import prismaClient from "../prisma";

class ListBurgersService {
  async execute() {
    const burgers = await prismaClient.burger.findMany();

    return burgers;
  }
}

export { ListBurgersService };
