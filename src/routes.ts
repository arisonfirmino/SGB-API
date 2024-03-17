import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { ListBurgersController } from "./controllers/list-burgers-controller";
import { ListDrinksController } from "./controllers/list-drinks-controller";
import { ListPortionsController } from "./controllers/list-portions-controller";
import { ListDessertsController } from "./controllers/list-desserts-controller";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/burgers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListBurgersController().handle(request, reply);
    }
  );

  fastify.get(
    "/drinks",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListDrinksController().handle(request, reply);
    }
  );

  fastify.get(
    "/portions",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListPortionsController().handle(request, reply);
    }
  );

  fastify.get(
    "/desserts",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListDessertsController().handle(request, reply);
    }
  );
}
