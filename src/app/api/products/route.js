let products = [
  {
    id: 1,
    name: "Product One",
    description: "This is product one.",
    price: 200,
    image: "https://i.ibb.co/your-image-link1.jpg"
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is product two.",
    price: 250,
    image: "https://i.ibb.co/your-image-link2.jpg"
  }
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
