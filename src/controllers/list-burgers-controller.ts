import { FastifyRequest, FastifyReply } from "fastify";
import { ListBurgersService } from "../services/list-burgers-service";

class ListBurgersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listBurgersService = new ListBurgersService();

    const burgers = await listBurgersService.execute();

    reply.send(burgers);
  }
}

export { ListBurgersController };
