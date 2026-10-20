import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("HTML does not load executable assets from third-party origins", async () => {
  const html = await read("index.html");
  assert.doesNotMatch(html, /<(?:script|link)[^>]+(?:src|href)=["']https?:\/\//i);
});

test("nginx sends a restrictive browser security policy", async () => {
  const config = await read("nginx.conf");
  const required = [
    "server_tokens off;",
    "Content-Security-Policy",
    "default-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "X-Content-Type-Options",
    "Referrer-Policy",
    "Permissions-Policy",
    "Cross-Origin-Opener-Policy",
  ];
  for (const directive of required) {
    assert.match(config, new RegExp(directive.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("runtime container is least-privileged and uses its unprivileged port", async () => {
  const [dockerfile, compose] = await Promise.all([
    read("Dockerfile"),
    read("docker-compose.yml"),
  ]);
  assert.match(dockerfile, /nginxinc\/nginx-unprivileged:/);
  assert.match(dockerfile, /RUN npm ci/);
  assert.doesNotMatch(dockerfile, /RUN npm install/);
  assert.match(compose, /["']9371:8080["']/);
  assert.doesNotMatch(compose, /9371:80(?:["']|\s)/);
  assert.match(compose, /read_only:\s*true/);
  assert.match(compose, /no-new-privileges:true/);
  assert.match(compose, /cap_drop:\s*\n\s*- ALL/);
});

test("build and runtime resources are constrained", async () => {
  const [dockerfile, compose] = await Promise.all([
    read("Dockerfile"),
    read("docker-compose.yml"),
  ]);
  assert.match(dockerfile, /^FROM node:22-alpine@sha256:[a-f0-9]{64} AS build/m);
  assert.match(compose, /mem_limit:\s*64m/);
  assert.match(compose, /cpus:\s*["']0\.50["']/);
  assert.match(compose, /max-size:\s*["']10m["']/);
  assert.match(compose, /max-file:\s*["']3["']/);
});

test("build context excludes common secret files", async () => {
  const dockerignore = new Set((await read(".dockerignore")).split(/\r?\n/));
  for (const pattern of [".env", ".env.*", "*.key", "*.pem", ".ssh"]) {
    assert.ok(dockerignore.has(pattern), `missing ${pattern} from .dockerignore`);
  }
});

test("published references do not use mutable URL shorteners", async () => {
  const [english, japanese] = await Promise.all([
    read("src/assets/cv_data.js"),
    read("src/assets/cv_data_jp.js"),
  ]);
  assert.doesNotMatch(english, /https?:\/\/(?:bit\.ly|tinyurl\.com)\//i);
  assert.doesNotMatch(japanese, /https?:\/\/(?:bit\.ly|tinyurl\.com)\//i);
});

test("development server defaults to loopback", async () => {
  const config = await read("vite.config.js");
  assert.doesNotMatch(config, /host:\s*["']0\.0\.0\.0["']/);
  assert.match(config, /host:\s*["']127\.0\.0\.1["']/);
});
