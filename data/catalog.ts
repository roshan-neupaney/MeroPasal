export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  mrp: number;
  badge?: string;
  deliveryEta: string;
  images: string[];
  description: string;
  tags?: string[];
};

export const categories: Category[] = [
  {
    id: "fresh",
    name: "Daily Fresh Groceries",
    slug: "daily-fresh-groceries",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "snacks",
    name: "Snacks & Bakery",
    slug: "snacks-and-bakery",
    image:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "personal-care",
    name: "Personal Care Items",
    slug: "personal-care-items",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "kirana",
    name: "Kirana Pasal",
    slug: "kirana-pasal",
    image:
      "https://images.unsplash.com/photo-1506801310323-534be5e7caa9?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "electronics",
    name: "Electronic Items",
    slug: "electronic-items",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "meat-eggs",
    name: "Meat, Eggs & Dairy",
    slug: "meat-eggs-dairy",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "drinks",
    name: "Drinks & Beverages",
    slug: "drinks-and-beverages",
    image:
      "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "baby",
    name: "Baby Items",
    slug: "baby-items",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "gifts",
    name: "Gifts & Party Decor",
    slug: "gifts-and-party-decor",
    image:
      "https://images.unsplash.com/photo-1504674900247-08e4e3f0a2d1?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "household",
    name: "Household Essentials",
    slug: "household-essentials",
    image:
      "https://images.unsplash.com/photo-1582719478250-20b1a1f8e6c7?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "health-wellness",
    name: "Health & Wellness",
    slug: "health-and-wellness",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "pet-care",
    name: "Pet Care",
    slug: "pet-care",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "breakfast",
    name: "Breakfast & Cereals",
    slug: "breakfast-and-cereals",
    image:
      "https://images.unsplash.com/photo-1484720823002-8e04fcecec5b?auto=format&fit=crop&w=600&q=60",
  },
];

export const products: Product[] = [
  {
    id: "costume-9-11",
    name: "Girl Boy Velvet Christmas Costume 9-11yrs",
    categoryId: "gifts",
    price: 1399,
    mrp: 1450,
    badge: "Only 1 left",
    deliveryEta: "45 mins",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=60&sat=-80",
    ],
    description:
      "Soft velvet Christmas costume set with hat, jacket, and trousers perfect for 9-11 years kids.",
    tags: ["Gifts & Party", "Costume", "Limited Stock"],
  },
  {
    id: "paneer-1kg",
    name: "Fresh Paneer 1kg",
    categoryId: "fresh",
    price: 699,
    mrp: 750,
    badge: "Fresh",
    deliveryEta: "40 mins",
    images: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Creamy paneer made from fresh milk, perfect for curries.",
    tags: ["Dairy", "Protein"],
  },
  {
    id: "milk-500ml",
    name: "Full Cream Milk 500ml",
    categoryId: "fresh",
    price: 80,
    mrp: 90,
    deliveryEta: "35 mins",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Rich and creamy full cream milk sourced locally.",
    tags: ["Dairy", "Daily Fresh"],
  },
  {
    id: "eggs-6",
    name: "Brown Eggs - Pack of 6",
    categoryId: "fresh",
    price: 120,
    mrp: 140,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1587049352851-8d0e29f59ee0?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Farm fresh brown eggs, protein rich and hormone free.",
    tags: ["Eggs", "Protein"],
  },
  {
    id: "bread-loaf",
    name: "Whole Wheat Bread & Toast",
    categoryId: "snacks",
    price: 70,
    mrp: 85,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Soft whole wheat bread for healthy breakfasts.",
    tags: ["Bakery"],
  },
  {
    id: "chicken-leg",
    name: "Chicken Leg - 500g",
    categoryId: "meat-eggs",
    price: 350,
    mrp: 400,
    deliveryEta: "50 mins",
    images: [
      "https://images.unsplash.com/photo-1604909053030-0286aea3d8f3?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Fresh cut chicken legs, tender and cleaned.",
    tags: ["Meat", "Protein"],
  },
  {
    id: "kiwi-pack",
    name: "Kiwi - 500g-600g",
    categoryId: "fresh",
    price: 229,
    mrp: 350,
    badge: "-33%",
    deliveryEta: "45 mins",
    images: [
      "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Juicy kiwis packed with vitamin C.",
    tags: ["Fruits", "Offers"],
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    categoryId: "fresh",
    price: 266,
    mrp: 300,
    badge: "-34%",
    deliveryEta: "45 mins",
    images: [
      "https://images.unsplash.com/photo-1611572272351-3fd6b5c6b8f6?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Bright and sweet dragon fruits sourced daily.",
    tags: ["Fruits"],
  },
  {
    id: "beauty-makeup",
    name: "Beauty & Makeup Kit",
    categoryId: "personal-care",
    price: 1250,
    mrp: 1400,
    deliveryEta: "60 mins",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60",
    ],
    description: "Curated beauty essentials for everyday glam.",
    tags: ["Beauty", "Gifts"],
  },
  {
    id: "basmati-rice-5kg",
    name: "Premium Basmati Rice 5kg",
    categoryId: "kirana",
    price: 1299,
    mrp: 1499,
    badge: "Popular",
    deliveryEta: "50 mins",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Aged long-grain basmati rice with rich aroma, perfect for biryani.",
    tags: ["Staples", "Rice", "Family Pack"],
  },
  {
    id: "organic-honey",
    name: "Raw Organic Honey 500g",
    categoryId: "kirana",
    price: 549,
    mrp: 620,
    deliveryEta: "35 mins",
    images: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Cold-filtered multiflora honey with no added sugar.",
    tags: ["Healthy", "Natural", "Sweetener"],
  },
  {
    id: "whole-oats-1kg",
    name: "Whole Grain Oats 1kg",
    categoryId: "breakfast",
    price: 320,
    mrp: 380,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    ],
    description: "High-fiber oats for wholesome breakfasts and baking.",
    tags: ["Breakfast", "Fiber"],
  },
  {
    id: "cold-coffee-250ml",
    name: "Iced Latte Cold Coffee 250ml",
    categoryId: "drinks",
    price: 95,
    mrp: 120,
    deliveryEta: "25 mins",
    images: [
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Ready-to-drink creamy cold coffee with balanced sweetness.",
    tags: ["Coffee", "Ready to drink"],
  },
  {
    id: "sparkling-water-500ml",
    name: "Lime Sparkling Water 500ml",
    categoryId: "drinks",
    price: 75,
    mrp: 90,
    deliveryEta: "25 mins",
    images: [
      "https://images.unsplash.com/photo-1510626176961-4b37d0c4be1d?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Zero sugar fizzy water with natural lime flavor.",
    tags: ["Hydration", "Zero Calorie"],
  },
  {
    id: "detergent-liquid-1l",
    name: "Liquid Detergent 1L",
    categoryId: "household",
    price: 349,
    mrp: 420,
    badge: "Best Seller",
    deliveryEta: "40 mins",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Tough on stains yet gentle on fabrics with long-lasting fragrance.",
    tags: ["Cleaning", "Laundry"],
  },
  {
    id: "kitchen-towels-2ply",
    name: "Kitchen Towel Rolls 2 Ply (2 Pack)",
    categoryId: "household",
    price: 199,
    mrp: 240,
    deliveryEta: "35 mins",
    images: [
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Ultra absorbent kitchen towel rolls ideal for quick cleanups.",
    tags: ["Cleaning", "Kitchen"],
  },
  {
    id: "herbal-toothpaste-150g",
    name: "Herbal Toothpaste 150g",
    categoryId: "personal-care",
    price: 145,
    mrp: 175,
    deliveryEta: "25 mins",
    images: [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Fluoride toothpaste with clove and mint for fresh breath.",
    tags: ["Oral Care", "Herbal"],
  },
  {
    id: "anti-dandruff-shampoo",
    name: "Anti-Dandruff Shampoo 340ml",
    categoryId: "personal-care",
    price: 389,
    mrp: 450,
    badge: "Trending",
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80&sat=-10",
    ],
    description: "Cleansing shampoo with zinc to reduce dandruff and itchiness.",
    tags: ["Hair Care"],
  },
  {
    id: "vitamin-c-60tab",
    name: "Vitamin C Chewable Tablets (60)",
    categoryId: "health-wellness",
    price: 499,
    mrp: 550,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1612975365090-8f5b2760978e?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Immunity-boosting vitamin C with zinc and citrus flavor.",
    tags: ["Supplements", "Immunity"],
  },
  {
    id: "baby-diapers-m",
    name: "Ultra Soft Baby Diapers - M (32 pcs)",
    categoryId: "baby",
    price: 849,
    mrp: 920,
    deliveryEta: "45 mins",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80&sat=-10",
    ],
    description: "Breathable diapers with aloe lotion and 12-hour absorption.",
    tags: ["Diapers", "Baby Care"],
  },
  {
    id: "dog-food-1kg",
    name: "Premium Dog Food 1kg",
    categoryId: "pet-care",
    price: 499,
    mrp: 560,
    deliveryEta: "50 mins",
    images: [
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Complete and balanced nutrition with chicken and vegetables.",
    tags: ["Pets", "Dog Food"],
  },
  {
    id: "cat-litter-10l",
    name: "Clumping Cat Litter 10L",
    categoryId: "pet-care",
    price: 699,
    mrp: 780,
    deliveryEta: "55 mins",
    images: [
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Low dust, fast clumping litter with fresh lavender scent.",
    tags: ["Pets", "Cat Care"],
  },
  {
    id: "bluetooth-earbuds",
    name: "True Wireless Earbuds",
    categoryId: "electronics",
    price: 2499,
    mrp: 2999,
    badge: "Hot Deal",
    deliveryEta: "60 mins",
    images: [
      "https://images.unsplash.com/photo-1582719478248-54e9f2af1b0b?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Bluetooth 5.3 earbuds with ENC mic and 24hr playback.",
    tags: ["Audio", "Gadgets"],
  },
  {
    id: "usb-c-charger",
    name: "Fast USB-C Charger 25W",
    categoryId: "electronics",
    price: 799,
    mrp: 899,
    deliveryEta: "35 mins",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Compact PD charger compatible with phones and tablets.",
    tags: ["Charging", "Accessories"],
  },
  {
    id: "butter-cookies-400g",
    name: "Butter Cookies Tin 400g",
    categoryId: "snacks",
    price: 249,
    mrp: 320,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Crisp Danish-style butter cookies in an airtight tin.",
    tags: ["Biscuits", "Tea Time"],
  },
  {
    id: "instant-noodles-5",
    name: "Masala Instant Noodles (Pack of 5)",
    categoryId: "snacks",
    price: 180,
    mrp: 210,
    deliveryEta: "25 mins",
    images: [
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Classic masala noodles ready in 2 minutes.",
    tags: ["Quick Bite", "Kids"],
  },
  {
    id: "cheese-slices-10",
    name: "Processed Cheese Slices (10 pcs)",
    categoryId: "fresh",
    price: 210,
    mrp: 240,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Individually wrapped cheese slices for sandwiches and burgers.",
    tags: ["Dairy", "Breakfast"],
  },
  {
    id: "greek-yogurt-500g",
    name: "Greek Yogurt 500g",
    categoryId: "fresh",
    price: 260,
    mrp: 299,
    deliveryEta: "35 mins",
    images: [
      "https://images.unsplash.com/photo-1505253748838-6e5dc4eb9d7e?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Thick and creamy yogurt with live cultures, low in sugar.",
    tags: ["Dairy", "Protein"],
  },
  {
    id: "peanut-butter-jar",
    name: "Crunchy Peanut Butter 750g",
    categoryId: "breakfast",
    price: 475,
    mrp: 520,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1604908176997-1251882c1f90?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Protein-rich crunchy peanut butter with no hydrogenated oils.",
    tags: ["Protein", "Spread"],
  },
  {
    id: "filter-coffee-200g",
    name: "South Indian Filter Coffee 200g",
    categoryId: "breakfast",
    price: 360,
    mrp: 420,
    deliveryEta: "30 mins",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Bold roast coffee blend for authentic filter coffee.",
    tags: ["Coffee", "Beverage"],
  },
];

