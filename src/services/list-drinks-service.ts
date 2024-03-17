import prismaClient from "../prisma";

class ListDrinksService {
  async execute() {
    const drinks = await prismaClient.drink.findMany();

    return drinks;
  }
}

export { ListDrinksService };
