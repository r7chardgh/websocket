import { createServer } from "http";
import { parse } from "url";
import next from "next";
const port = parseInt(process.env.port || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parseUrl = parse(req.url!, true);
    handle(req, res, parseUrl);
  }).listen(port);

  console.log(
    `Server listening at  htpp://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
