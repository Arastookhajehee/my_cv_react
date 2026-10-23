import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("website source exposes social links without direct contact details", async () => {
  const [contact, header] = await Promise.all([
    read("src/Components/Contact.jsx"),
    read("src/Components/Portfolio/PortfolioHeader.jsx"),
  ]);
  const source = `${contact}\n${header}`;
  for (const required of [
    "youtube.com/@arastookhajehee1570",
    "instagram.com/kh.arastoo",
    "github.com/Arastookhajehee",
  ]) {
    assert.ok(source.includes(required), `social reference missing: ${required}`);
  }

  for (const forbidden of [
    "mailto:",
    "a.khajehee@gmail.com",
    "khajehee.arastoo@haseman.co.jp",
    "arastoo@arch1.t.u-tokyo.ac.jp",
    'href="#contact"',
    'id="contact"',
  ]) {
    assert.ok(!source.includes(forbidden), `contact reference remains: ${forbidden}`);
  }
});
