import prisma from "./prisma";

async function seedDatabase() {
  try {
    const burgers = [
      {
        name: "SaborGrill Classic Burger",
        description:
          "O clássico reinventado! Um suculento hambúrguer de carne grelhada, coberto com queijo cheddar derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto, tudo isso servido em um pão macio e dourado.",
        price: "15,90",
        imageUrl:
          "https://utfs.io/f/fedb120c-b7c1-4514-9635-6b73341310b7-76jjgk.jpeg",
      },
      {
        name: "Baconator Supreme",
        description:
          "Para os amantes de bacon! Este hambúrguer indulgente apresenta duas generosas fatias de bacon crocante, queijo suíço derretido, cebolas caramelizadas e um toque de molho barbecue defumado, tudo entre dois pães tostados e macios.",
        price: "17,50",
        imageUrl:
          "https://utfs.io/f/c657569f-f1ff-4627-8db7-6398bb9cf16b-kyki1a.jpeg",
      },
      {
        name: "Mega Cheese Delight",
        description:
          "Uma explosão de queijo em cada mordida! Este hambúrguer é carregado com uma mistura de queijos deliciosos, incluindo cheddar, suíço e pepper jack, complementados por alface fresca, tomate maduro e um toque de maionese cremosa.",
        price: "16,75",
        imageUrl:
          "https://utfs.io/f/6fc908d7-9631-48d2-89e5-1161b362e69a-n37osa.jpeg",
      },
      {
        name: "Double Trouble Burger",
        description:
          "Dobrando a diversão! Este hambúrguer apresenta duas suculentas carnes grelhadas, cada uma coberta com queijo americano derretido, fatias de picles crocantes, cebolas frescas e ketchup, tudo entre um pão macio e levemente tostado.",
        price: "18,25",
        imageUrl:
          "https://utfs.io/f/95db8995-84f3-4883-a910-c99289f9d009-8io0lp.jpeg",
      },
      {
        name: "Ultimate BBQ Blast",
        description:
          "Prepare-se para uma explosão de sabor! Este hambúrguer é carregado com carne grelhada, bacon crocante, queijo cheddar derretido e cebolas fritas, tudo regado com nosso molho barbecue caseiro, servido em um pão de hambúrguer torrado.",
        price: "19,50",
        imageUrl:
          "https://utfs.io/f/f5e6d3ee-459c-4107-b874-ba1300add11b-p7fp46.jpeg",
      },
      {
        name: "Veggie Deluxe Burger",
        description:
          "Uma opção vegetariana que satisfaz! Este hambúrguer é feito com um patty de grão-de-bico e vegetais, coberto com queijo suíço derretido, abacate cremoso, alface fresca, tomate e maionese vegana, tudo em um pão integral.",
        price: "14,95",
        imageUrl:
          "https://utfs.io/f/c1ca6bac-7c65-4b4f-8fbc-ec66b4f15760-8873ah.jpeg",
      },
      {
        name: "Spicy Inferno Burger",
        description:
          "Para os corajosos! Este hambúrguer é carregado com carne grelhada, queijo pepper jack derretido, jalapeños picantes, cebolas roxas, pimentão grelhado e uma generosa porção de molho picante, tudo entre dois pães tostados.",
        price: "16,80",
        imageUrl:
          "https://utfs.io/f/4739a332-d2d2-49e5-9c34-2184c7eec543-48fhvo.jpeg",
      },
      {
        name: "Chicken Crunch Burger",
        description:
          "Uma delícia crocante! Este hambúrguer apresenta um filete de frango crocante empanado, queijo americano derretido, alface fresca, tomate e maionese, tudo em um pão de hambúrguer macio e dourado.",
        price: "16,25",
        imageUrl:
          "https://utfs.io/f/c3aea678-4adb-4b64-bf5f-17025fd55353-duetxf.jpeg",
      },
      {
        name: "Hawaiian Luau Burger",
        description:
          "Uma explosão de sabores tropicais! Este hambúrguer é carregado com carne grelhada, fatias de presunto, abacaxi grelhado, queijo suíço derretido e uma camada de molho teriyaki, tudo servido em um pão de hambúrguer tostado.",
        price: "17,95",
        imageUrl:
          "https://utfs.io/f/8c0678ec-f18b-4914-ad0b-2bce49cd29e4-a88o.jpeg",
      },
      {
        name: "Fiesta Mexicana Burger",
        description:
          "Uma festa de sabores mexicanos! Este hambúrguer apresenta carne grelhada, queijo pepper jack derretido, guacamole fresco, jalapeños picantes e uma pitada de salsa, tudo entre dois pães de hambúrguer tostados.",
        price: "16,50",
        imageUrl:
          "https://utfs.io/f/a8dceace-515e-4007-9d65-147984470867-43na7b.jpeg",
      },
      {
        name: "Mushroom Madness Burger",
        description:
          "Para os amantes de cogumelos! Este hambúrguer é coberto com uma generosa porção de cogumelos salteados, queijo suíço derretido, alface crocante, tomate fresco e um toque de molho aioli, servido em um pão de hambúrguer tostado.",
        price: "17,25",
        imageUrl:
          "https://utfs.io/f/b4077d87-2394-40ba-b349-826f0ca5369c-pbh3pm.jpeg",
      },
      {
        name: "Breakfast Bliss Burger",
        description:
          "O café da manhã perfeito em forma de hambúrguer! Este hambúrguer matinal apresenta um patty de salsicha, queijo cheddar derretido, um ovo frito, fatias de bacon crocante e uma pitada de ketchup, tudo em um pão de hambúrguer levemente tostado.",
        price: "15,75",
        imageUrl:
          "https://utfs.io/f/2140576c-6bda-4e3a-838c-b5432c0a4b9e-h4hgl7.jpeg",
      },
    ];

    const drinks = [
      {
        name: "Refresco de Limonada Fresca",
        description:
          "Uma refrescante limonada feita com limões frescos espremidos na hora, adoçada com um toque de açúcar, perfeita para acompanhar seu hambúrguer favorito.",
        price: "5,50",
        imageUrl:
          "https://utfs.io/f/91383802-225f-47fd-a0c9-427405966ab2-qdv3yn.jpeg",
      },
      {
        name: "Smoothie de Frutas Tropicais",
        description:
          "Uma mistura refrescante de frutas tropicais, como manga, abacaxi e morango, batidas com iogurte natural para criar um smoothie cremoso e delicioso.",
        price: "6,75",
        imageUrl:
          "https://utfs.io/f/5274842e-936d-4f5d-9199-7cf62d785941-392qyw.jpeg",
      },
      {
        name: "Refrigerante Artesanal de Raiz",
        description:
          "Uma versão artesanal do clássico refrigerante de raiz, com uma mistura única de especiarias e extratos naturais para um sabor autêntico e refrescante.",
        price: "4,50",
        imageUrl:
          "https://utfs.io/f/33d78a1a-409b-4e8f-a99c-99475ddf7196-m5hlo0.jpeg",
      },
      {
        name: "Chá Gelado de Pêssego",
        description:
          "Um chá gelado refrescante, infundido com o sabor doce e suculento do pêssego, perfeito para saciar sua sede em um dia quente de verão.",
        price: "5,25",
        imageUrl:
          "https://utfs.io/f/f8a108ab-796b-4393-8f38-6c6e1419e154-jkpqz2.jpeg",
      },
      {
        name: "Café Gelado Caramelado",
        description:
          "Um café gelado cremoso, enriquecido com um toque de calda de caramelo e servido com cubos de gelo, proporcionando uma explosão de sabor e energia.",
        price: "6,00",
        imageUrl:
          "https://utfs.io/f/eeb1a628-d90d-41ea-ad28-b90bc495c9f0-bzrgaw.jpeg",
      },
      {
        name: "Milkshake de Baunilha",
        description:
          "Um milkshake cremoso e indulgente, feito com sorvete de baunilha e leite, batido até ficar suave e coberto com chantilly, ideal para os amantes de doce.",
        price: "7,50",
        imageUrl:
          "https://utfs.io/f/8f3762df-655f-41c5-9f08-0c05528e3daf-dfh8de.jpeg",
      },
      {
        name: "Coquetel de Frutas Frescas",
        description:
          "Um coquetel refrescante e colorido, preparado com uma mistura de frutas frescas da estação, suco de laranja e um toque de suco de cranberry, servido com gelo.",
        price: "8,25",
        imageUrl:
          "https://utfs.io/f/97728249-039b-4ceb-bd45-6b277e1ef8b5-wney2r.jpeg",
      },
      {
        name: "Água Mineral Natural",
        description:
          "Água mineral naturalmente refrescante, perfeita para hidratar e acompanhar sua refeição, garantindo uma experiência leve e revigorante.",
        price: "2,00",
        imageUrl:
          "https://utfs.io/f/bf45db9f-7d4f-406f-b819-ad75892bf34d-1s4z6.png",
      },
    ];

    const portions = [
      {
        name: "Porção de Batatas Fritas Crocantes",
        description:
          "Deliciosas batatas cortadas em palitos e fritas até ficarem crocantes por fora e macias por dentro, servidas com ketchup e maionese caseira.",
        price: "8,00",
        imageUrl:
          "https://utfs.io/f/74fa5cc9-51f1-4272-9963-f9d402c5e370-3s0pgg.jpeg",
      },
      {
        name: "Anéis de Cebola Dourados",
        description:
          "Anéis de cebola macios e suculentos, empanados e fritos até ficarem dourados e crocantes, perfeitos para compartilhar com amigos.",
        price: "9,50",
        imageUrl:
          "https://utfs.io/f/feb455fd-13a8-4c4d-80f3-416d4cb9fc2e-vvk8je.jpeg",
      },
      {
        name: "Asas de Frango Picantes",
        description:
          "Asas de frango marinadas em temperos picantes, assadas até ficarem crocantes por fora e suculentas por dentro, servidas com molho de pimenta.",
        price: "10,75",
        imageUrl:
          "https://utfs.io/f/2b21d79a-b10c-4167-a940-5cdd937ac8ec-pg2uah.jpeg",
      },
      {
        name: "Palitos de Queijo Derretido",
        description:
          "Palitos de queijo mussarela empanados e fritos até ficarem dourados e crocantes por fora, com um interior derretido e delicioso, acompanhados de molho marinara.",
        price: "9,25",
        imageUrl:
          "https://utfs.io/f/621b78d8-ff83-49f7-9b5d-f7e73a68ae3b-pkd0va.jpeg",
      },
      {
        name: "Tiras de Frango Crocantes",
        description:
          "Tiras de frango empanadas e fritas até ficarem crocantes por fora e macias por dentro, servidas com molho barbecue ou molho ranch.",
        price: "10,00",
        imageUrl:
          "https://utfs.io/f/becd39ec-319f-4193-9566-4d1728a84b6e-2a88hr.jpeg",
      },
    ];

    const desserts = [
      {
        name: "Sundae de Chocolate Supremo",
        description:
          "Uma deliciosa combinação de sorvete de baunilha, calda de chocolate quente, chantilly e pedaços de brownie, tudo coroado com uma cereja no topo.",
        price: "7,50",
        imageUrl:
          "https://utfs.io/f/2dac28ae-6f1e-4b85-850c-2a01f5d35ab0-7x7jz0.jpeg",
      },
      {
        name: "Torta de Maçã Caseira",
        description:
          "Uma fatia generosa de torta de maçã caseira, feita com maçãs frescas, açúcar mascavo e canela, coberta com uma crosta de massa folhada e servida com uma bola de sorvete de baunilha.",
        price: "8,00",
        imageUrl:
          "https://utfs.io/f/eb584e73-3406-4e3f-9188-7d0386bc2917-a9n0jf.jpeg",
      },
      {
        name: "Banoffee Pie",
        description:
          "Uma irresistível torta de Banoffee feita com uma base de biscoito amanteigado, uma camada de caramelo, bananas fatiadas, coberta com chantilly fresco e lascas de chocolate.",
        price: "9,50",
        imageUrl:
          "https://utfs.io/f/23301132-f018-4c43-bfb3-264f77bc7a3b-d0eupg.jpeg",
      },
      {
        name: "Milkshake de Morango",
        description:
          "Um milkshake cremoso e refrescante, feito com sorvete de morango, leite gelado e um toque de xarope de morango, servido com chantilly e uma fatia de morango fresco.",
        price: "6,50",
        imageUrl:
          "https://utfs.io/f/62be5303-a35c-4341-925e-53b5a17bc3ce-bxmm3.jpeg",
      },
      {
        name: "Pudim de Caramelo",
        description:
          "Um pudim cremoso e decadente, com sabor rico de caramelo, feito com ingredientes de alta qualidade e coberto com uma generosa porção de calda de caramelo.",
        price: "5,00",
        imageUrl:
          "https://utfs.io/f/2d2367e1-cf4c-42f8-95c4-6816436a0e20-pdpuxi.jpeg",
      },
      {
        name: "Cheesecake de Frutas Vermelhas",
        description:
          "Uma fatia generosa de cheesecake cremoso, coberto com uma variedade de frutas vermelhas frescas, como morangos, framboesas e amoras, e finalizado com um leve toque de calda de framboesa.",
        price: "8,50",
        imageUrl:
          "https://utfs.io/f/555ce0ef-a410-4d8e-8973-835f95cc13e1-m0icr0.jpeg",
      },
      {
        name: "Brownie de Chocolate Duplo",
        description:
          "Um brownie indulgente e macio, feito com chocolate amargo e pedaços de chocolate ao leite, servido quente com uma bola de sorvete de baunilha e uma drizzle de calda de chocolate.",
        price: "7,75",
        imageUrl:
          "https://utfs.io/f/b75c0b5b-3b4d-423a-af1e-221a95da322c-s6wteb.jpeg",
      },
      {
        name: "Creme Brûlée de Baunilha",
        description:
          "Uma sobremesa clássica e sofisticada, com uma camada cremosa de creme de baunilha coberta com uma crosta caramelizada crocante, proporcionando uma explosão de sabores e texturas.",
        price: "9,00",
        imageUrl:
          "https://utfs.io/f/5c6db3df-5f73-4e19-bd2c-8f5c43a5c922-wyu49q.jpeg",
      },
    ];

    await prisma.burger.createMany({ data: burgers });
    await prisma.drink.createMany({ data: drinks });
    await prisma.portion.createMany({ data: portions });
    await prisma.dessert.createMany({ data: desserts });

    console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
