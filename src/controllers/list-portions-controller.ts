import { FastifyRequest, FastifyReply } from "fastify";
import { ListPortionsService } from "../services/list-portions-service";

class ListPortionsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listPortionsService = new ListPortionsService();

    const portions = await listPortionsService.execute();

    reply.send(portions);
  }
}

export { ListPortionsController };
