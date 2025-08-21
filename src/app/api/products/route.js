let products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description:
      "The iPhone 15 Pro Max comes with the powerful A17 Pro chip, titanium design, advanced camera system with 5x telephoto zoom, and a stunning Super Retina XDR display. Built for performance and durability, it's the most advanced iPhone yet.",
    price: 1399,
    image: "https://i.ibb.co.com/Tqpq8XNg/3207184.jpg",
  },
  {
    id: 2,
    name: "iPhone 15",
    description:
      "iPhone 15 features the A16 Bionic chip, Dynamic Island, and a powerful 48MP camera. With its long-lasting battery life and sleek design, this device is perfect for everyday use and professional photography.",
    price: 999,
    image: "https://i.ibb.co.com/ZRPx31kc/3207145.jpg",
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch",
    description:
      "The MacBook Pro 16-inch is powered by the Apple M3 Max chip, offering incredible speed, efficiency, and graphics performance. With a Liquid Retina XDR display and all-day battery life, it's the ultimate laptop for professionals.",
    price: 2999,
    image: "https://i.ibb.co.com/ds2yC3Mb/side-view-laptop-black-wall.jpg",
  },
  {
    id: 4,
    name: "MacBook Air 13-inch",
    description:
      "Lightweight and ultra-portable, the MacBook Air with M2 chip delivers blazing-fast performance and long battery life in a fanless design. Perfect for students, creatives, and everyday users.",
    price: 1199,
    image: "https://i.ibb.co.com/MvBM4R3/988.jpg",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    description:
      "Apple Watch Series 9 features the new S9 chip for faster performance, brighter display, and advanced health tracking including heart rate, ECG, and blood oxygen monitoring. Stay connected, healthy, and active all day long.",
    price: 499,
    image: "https://i.ibb.co.com/V0384mMm/3749312.jpg",
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    description:
      "Designed for adventurers, the Apple Watch Ultra 2 features a rugged titanium case, longer battery life, precision GPS, and advanced dive metrics. Built for endurance and extreme environments.",
    price: 799,
    image: "https://i.ibb.co.com/PsmndcgX/smartwatch-screen-digital-device.jpg",
  },
  {
    id: 7,
    name: "iPad Pro 12.9-inch",
    description:
      "The iPad Pro with M2 chip offers laptop-class performance in a sleek, portable design. With Liquid Retina XDR display, Apple Pencil 2 support, and powerful multitasking, it’s perfect for professionals and creatives.",
    price: 1299,
    image: "https://i.ibb.co.com/XxnNQ2R8/90965.jpg",
  },
  {
    id: 8,
    name: "iPad Air",
    description:
      "The iPad Air combines powerful performance with portability. Featuring the M1 chip, 10.9-inch Liquid Retina display, and support for Apple Pencil and Magic Keyboard, it's perfect for work and play.",
    price: 799,
    image: "https://i.ibb.co.com/Q3tjr5zw/tablet-with-blank-screen-chair.jpg",
  },
  {
    id: 9,
    name: "AirPods Pro (2nd Gen)",
    description:
      "AirPods Pro 2 deliver next-level sound quality with Adaptive Transparency, Active Noise Cancellation, and personalized spatial audio. With improved battery life and USB-C charging, they're the best wireless earbuds from Apple.",
    price: 249,
    image: "https://i.ibb.co.com/pBTgqNH8/earphones-with-case-surrounded-by-nature-scene.jpg",
  },
  {
    id: 10,
    name: "AirPods Max",
    description:
      "AirPods Max bring high-fidelity sound with computational audio, active noise cancellation, and spatial audio for an immersive experience. The premium design and comfort make it perfect for audiophiles.",
    price: 549,
    image: "https://i.ibb.co.com/213JgKvn/2112-i211-002-S-m012-c13-headphones-wireless-realistic-composition-5.jpg",
  },
  {
    id: 11,
    name: "Apple Vision Pro",
    description:
      "Apple Vision Pro is Apple’s revolutionary spatial computer that blends digital content with your physical space. Featuring micro-OLED displays, eye and hand tracking, and visionOS, it delivers an entirely new way to work and play.",
    price: 3499,
    image: "https://i.ibb.co.com/219xsH1h/laptop-wooden-table.jpg",
  },
  {
    id: 12,
    name: "Apple TV 4K",
    description:
      "Apple TV 4K brings the best shows, movies, sports, and live TV in stunning 4K HDR with Dolby Atmos sound. With the new Siri Remote, fast performance, and Apple Arcade, it’s the future of home entertainment.",
    price: 199,
    image: "https://i.ibb.co.com/FkzKw2JN/O9FG5V0.jpg",
  },
];


// GET: সব প্রোডাক্ট দেখাবে
export async function GET(request) {
  return Response.json(products);
}

// POST: নতুন প্রোডাক্ট যোগ করবে
export async function POST(request) {
  const body = await request.json();
  const newProduct = {
    id: products.length + 1,
    ...body
  };
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}
