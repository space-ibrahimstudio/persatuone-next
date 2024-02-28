export const categories = [
  "Low Fat Series",
  "Standard Series",
  "Premium Series",
  "Black Series",
];

export const productsData = [
  [
    {
      imageUrl: "/img/products/img-01.jpg",
      cardTitle: "CT700 Low Fat Alkalized",
      cardDesc: "Fat Content: 8-10% | pH: 6.8 - 7.2",
      cardCta: "Contact us for more information",
    },
    {
      imageUrl: "/img/products/img-02.jpg",
      cardTitle: "CT700N Low Fat Natural",
      cardDesc: "Fat Content: 8-10% | pH: 5-6",
      cardCta: "Contact us for more information",
    },
  ],
  [
    {
      imageUrl: "/img/products/img-03.jpg",
      cardTitle: "CT800 Standard Alkalized",
      cardDesc: "Fat Content: 810-12% | pH: 6.8-7.2",
      cardCta: "Contact us for more information",
    },
    {
      imageUrl: "/img/products/img-04.jpg",
      cardTitle: "CT800N Standard Natural",
      cardDesc: "Fat Content: 8-10% | pH: 5.4-6.7",
      cardCta: "Contact us for more information",
    },
  ],
  [
    {
      imageUrl: "/img/products/img-06.jpg",
      cardTitle: "CT900 Premium Alkalized",
      cardDesc: "Fat Content: 10-12% | pH: 6.8-7.2",
      cardCta: "Contact us for more information",
    },
    {
      imageUrl: "/img/products/img-07.jpg",
      cardTitle: "CT900N Premium Natural",
      cardDesc: "Fat Content: 10-12% | pH: 6",
      cardCta: "Contact us for more information",
    },
  ],
  [
    {
      imageUrl: "/img/products/img-05.jpg",
      cardTitle: "CT1000 Black",
      cardDesc: "Fat Content: 10-12% | pH: 7.0-8.5",
      cardCta: "Contact us for more information",
    },
  ],
];

export const albums = [
  {
    id: 1,
    name: "Export Shipment",
    images: Array.from({ length: 14 }, (_, i) => `Album 3 Image ${i + 1}`),
  },
  {
    id: 2,
    name: "Cocoa Manufacturer",
    images: Array.from({ length: 5 }, (_, i) => `Album 1 Image ${i + 1}`),
  },
  {
    id: 3,
    name: "Coffee Manufacturer",
    images: Array.from({ length: 5 }, (_, i) => `Album 2 Image ${i + 1}`),
  },
  {
    id: 4,
    name: "Cocoa Farmers",
    images: Array.from({ length: 3 }, (_, i) => `Album 4 Image ${i + 1}`),
  },
  {
    id: 5,
    name: "Coffee Farmers",
    images: Array.from({ length: 10 }, (_, i) => `Album 5 Image ${i + 1}`),
  },
];
