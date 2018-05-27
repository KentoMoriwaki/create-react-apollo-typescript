import ejs from "ejs";
import fs from "mz/fs";

import { ROOT_HTML_PATH, MANIFEST_PATH } from "../constants";

let body: string | null = null;
let manifest: { [key: string]: any } | null = null;

export default async function getHTML(refresh = false) {
  if (!manifest || refresh) {
    const raw = await fs.readFile(MANIFEST_PATH, "utf8");
    manifest = JSON.parse(raw);
  }
  if (!body || refresh) {
    const raw = await fs.readFile(ROOT_HTML_PATH, "utf8");
    body = ejs.render(raw, {
      mainJs: manifest!["main.js"]
    });
  }
  return body;
}
