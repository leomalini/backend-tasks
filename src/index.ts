import fastify from "fastify";
import cors from "@fastify/cors";
import autoload from "@fastify/autoload";
import path from "node:path";
import log from "consola";
import ck from "chalk";
import "#settings/env.js";
import { ErrorHandler } from "#functions/error.js";

const app = fastify();

app.setErrorHandler(ErrorHandler);

app.register(cors, { origin: "*" });

app.register(autoload, {
  dir: path.join(import.meta.dirname, "routes"),
  routeParams: true,
});

app.addHook("onRoute", ({ method, path }) => {
  if (method === "HEAD" || method === "OPTIONS") return;

  log.success(`Registered route: ${ck.yellow(method)} ${ck.blue(path)}`);
});

const port = process.env.PORT || 3000;

await app.listen({ port, host: "0.0.0.0" }).catch((err) => {
  log.error(ck.red(`Failed to start server: ${err.message}`));
  process.exit(1);
});

log.success(ck.green(`Server is running at http://localhost:${port}`));
export default app;
