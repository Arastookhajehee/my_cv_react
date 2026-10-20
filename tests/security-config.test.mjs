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
