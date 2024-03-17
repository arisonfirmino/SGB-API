import prismaClient from "../prisma";

class ListDessertsService {
  async execute() {
    const desserts = await prismaClient.dessert.findMany();

    return desserts;
  }
}

export { ListDessertsService };
