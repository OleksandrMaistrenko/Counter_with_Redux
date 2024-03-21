import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const server = fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.register(fastifyStatic, {
  root: join(__dirname, "../build"),
});

server
  .listen({ port: 1234 })
  .then((address) => {
    console.log("Server started" + address);
  })
  .catch((err) => {
    console.log("Error");
  });
