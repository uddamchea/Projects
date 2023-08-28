import assets from "./assets";

const ItemData = [
  {
    id: "Item-01",
    name: "Road Bike",
    creator: "Uddam",
    price: 10,
    description:
      "Just a really cool and fast bike.",
    image: assets.item01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "Item-02",
    name: "Macbook Laptop",
    creator: "Zane",
    price: 1.2,
    description:
      "Just a really cool and fast laptop.",
    image: assets.item02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "Item-03",
    name: "Mice",
    creator: "Thimali",
    price: 0.1,
    description:
      "Just some cool mice.",
    image: assets.item03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "Item-04",
    name: "White Hoodie",
    creator: "Elham",
    price: 0.2,
    description:
      "Just a cool hoodie.",
    image: assets.item04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "Item-05",
    name: "Gold Table Lamp",
    creator: "Lorenzo",
    price: 1.25,
    description:
      "Just a cool gold lamp.",
    image: assets.item05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "Item-06",
    name: "Couch",
    creator: "Jasper",
    price: 0.25,
    description:
      "Just a really comfy couch.",
    image: assets.item06,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "Item-07",
    name: "Ford SUV",
    creator: "Frank",
    price: 10.25,
    description:
      "Just a really spacious car.",
    image: assets.item07,
    bids: [],
  },
];

export { ItemData };
