const products = [
  // Bracelets
  {
    id: 1,
    title: "Silver Charm Bracelet",
    price: 45.999,
    description: "A delicate silver bracelet with beautiful charm details.",
    category: "bracelet",
    imgUrl: "https://joyasmarisol.com/11041-product_zoom/pulsera-plata-ala-con-infinito.jpg",
    stock: 10
  },
  {
    id: 2,
    title: "Gold Plated Bangle",
    price: 39.999,
    description: "A stylish gold-plated bangle with an elegant finish.",
    category: "bracelet",
    imgUrl: "https://gracelee.com/cdn/shop/products/G1350B_GoldenBangleNEW_B_YGcopy_1024x1024.jpg?v=1644417868",
    stock: 15
  },
  {
    id: 3,
    title: "Beaded Friendship Bracelet",
    price: 12.490,
    description: "Colorful beaded bracelet perfect for friendship gifts.",
    category: "bracelet",
    imgUrl: "https://moderntribe.com/cdn/shop/files/MT27Bd.jpg?v=1718821361",
    stock: 30
  },
  {
    id: 4,
    title: "Leather Strap Bracelet",
    price: 19.990,
    description: "A stylish leather strap bracelet with a metallic clasp.",
    category: "bracelet",
    imgUrl: "https://www.inmindjewellery.com/wp-content/uploads/slim-black-thin-leather-bracelet-3.jpg",
    stock: 25
  },

  // Rings
  {
    id: 5,
    title: "Sapphire Silver Ring",
    price: 49.990,
    description: "A stunning silver ring with a sapphire stone centerpiece.",
    category: "ring",
    imgUrl: "https://amalfa.in/cdn/shop/files/Diana_925_Silver_Blue_Sapphire_Ring_1280x.jpg?v=1735820078",
    stock: 8
  },
  {
    id: 6,
    title: "Minimalist Gold Ring",
    price: 29.990,
    description: "A sleek, minimalist gold ring that fits any occasion.",
    category: "ring",
    imgUrl: "https://normjewels.com/cdn/shop/products/14kSolidgoldMinimalistSignetRing_1600x.jpg?v=1629729270",
    stock: 12
  },
  {
    id: 7,
    title: "Vintage Ruby Ring",
    price: 35.000,
    description: "A vintage-inspired ring featuring a beautiful ruby stone.",
    category: "ring",
    imgUrl: "https://www.lamoredesign.com/cdn/shop/products/Largerubyengagementringrosegoldvintagehalodiamondrubyringlamoredesignjewelry-4.jpg?v=1725625117&width=2000",
    stock: 6
  },
  {
    id: 8,
    title: "Rose Gold Adjustable Ring",
    price: 19.990,
    description: "A trendy rose gold adjustable ring, perfect for any finger.",
    category: "ring",
    imgUrl: "https://niftygifts.co.za/cdn/shop/files/NiftyGiftsProduct_e9c1192c-9b00-4710-828b-2231371d0c5a.png?v=1725974098",
    stock: 20
  },

  // Necklaces
  {
    id: 9,
    title: "Diamond Pendant Necklace",
    price: 49.999,
    description: "A beautiful diamond pendant set in sterling silver.",
    category: "necklace",
    imgUrl: "https://i.etsystatic.com/10797896/r/il/74d717/3567616310/il_fullxfull.3567616310_k1oq.jpg",
    stock: 5
  },
  {
    id: 10,
    title: "Moonstone Necklace",
    price: 22.500,
    description: "A delicate moonstone necklace with an elegant silver chain.",
    category: "necklace",
    imgUrl: "https://keetaluxury.com/cdn/shop/files/magic-drop-moonstone-necklace-18-inches-242.png?v=1699977009&width=2048",
    stock: 15
  },
  {
    id: 11,
    title: "Heart-Shaped Pendant Necklace",
    price: 14.990,
    description: "A charming heart-shaped pendant necklace in silver.",
    category: "necklace",
    imgUrl: "https://filigreejewelers.com/cdn/shop/products/IMG_4435.jpg?v=1677702217&width=1946",
    stock: 25
  },
  {
    id: 12,
    title: "Gold Chain Necklace",
    price: 39.990,
    description: "A stylish gold chain necklace perfect for layering.",
    category: "necklace",
    imgUrl: "https://www.linjer.co/cdn/shop/files/thick-petal-chain-model-still_1024x.jpg?v=1716803924",
    stock: 12
  }
];

export default products;

// const products = [
//   {
//     id: 1,
//     title: 'Árbol de Navidad Artificial',
//     price: 150,
//     stock: 20,
//     img: `https://picsum.photos/seed/1/240/180`,
//     category: 'Decoracion'
//   },
//   {
//     id: 2,
//     title: 'Luces Navideñas Multicolor',
//     price: 35,
//     stock: 50,
//     img: `https://picsum.photos/seed/2/240/180`,
//     category: 'Iluminacion'
//   },
//   {
//     id: 3,
//     title: 'Guirnalda Navideña con Bolas',
//     price: 25,
//     stock: 30,
//     img: `https://picsum.photos/seed/3/240/180`,
//     category: 'Decoracion'
//   },
//   {
//     id: 4,
//     title: 'Muñeco de Nieve Inflable',
//     price: 80,
//     stock: 15,
//     img: `https://picsum.photos/seed/4/240/180`,
//     category: 'Decoracion Exterior'
//   },
//   {
//     id: 5,
//     title: 'Calcetines Navideños',
//     price: 10,
//     stock: 100,
//     img: `https://picsum.photos/seed/5/240/180`,
//     category: 'Regalos'
//   },
//   {
//     id: 6,
//     title: 'Centro de Mesa Navideño',
//     price: 45,
//     stock: 25,
//     img: `https://picsum.photos/seed/6/240/180`,
//     category: 'Decoracion'
//   },
//   {
//     id: 7,
//     title: 'Adorno Navideño para Puerta',
//     price: 20,
//     stock: 40,
//     img: `https://picsum.photos/seed/7/240/180`,
//     category: 'Decoracion Exterior'
//   },
//   {
//     id: 8,
//     title: 'Vela Aromática Navideña',
//     price: 12,
//     stock: 60,
//     img: `https://picsum.photos/seed/8/240/180`,
//     category: 'Ambientacion'
//   },
//   {
//     id: 9,
//     title: 'Corona de Adviento',
//     price: 30,
//     stock: 20,
//     img: `https://picsum.photos/seed/9/240/180`,
//     category: 'Decoracion'
//   },
//   {
//     id: 10,
//     title: 'Belen Navideño',
//     price: 50,
//     stock: 15,
//     img: `https://picsum.photos/seed/10/240/180`,
//     category: 'Decoracion'
//   },
//   {
//     id: 11,
//     title: 'Cojines Navideños',
//     price: 15,
//     stock: 30,
//     img: `https://picsum.photos/seed/11/240/180`,
//     category: 'Textiles'
//   },
//   {
//     id: 12,
//     title: 'Mantel Navideño',
//     price: 25,
//     stock: 20,
//     img: `https://picsum.photos/seed/12/240/180`,
//     category: 'Textiles'
//   },
//   {
//     id: 13,
//     title: 'Papá Noel Gigante',
//     price: 120,
//     stock: 10,
//     img: `https://picsum.photos/seed/13/240/180`,
//     category: 'Decoracion Exterior'
//   },
//   {
//     id: 14,
//     title: 'Juego de Bolas Navideñas',
//     price: 35,
//     stock: 40,
//     img: `https://picsum.photos/seed/14/240/180`,
//     category: 'Decoracion'
//   },
//   {
//     id: 15,
//     title: 'Tarjeta de Navidad',
//     price: 2,
//     stock: 100,
//     img: `https://picsum.photos/seed/15/240/180`,
//     category: 'Regalos'
//   }
// ];

// export default products;
