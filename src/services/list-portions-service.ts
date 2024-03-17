import prismaClient from "../prisma";

class ListPortionsService {
  async execute() {
    const portions = await prismaClient.portion.findMany();

    return portions;
  }
}

export { ListPortionsService };
