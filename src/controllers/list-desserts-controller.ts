import { FastifyRequest, FastifyReply } from "fastify";
import { ListDessertsService } from "../services/list-desserts-service";

class ListDessertsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listDessertsService = new ListDessertsService();

    const desserts = await listDessertsService.execute();

    reply.send(desserts);
  }
}

export { ListDessertsController };
