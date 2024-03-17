import { FastifyRequest, FastifyReply } from "fastify";
import { ListDrinksService } from "../services/list-drinks-service";

class ListDrinksController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listDrinksService = new ListDrinksService();

    const drinks = await listDrinksService.execute();

    reply.send(drinks);
  }
}

export { ListDrinksController };
