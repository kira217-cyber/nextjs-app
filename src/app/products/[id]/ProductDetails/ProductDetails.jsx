export default function ProductDetails({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  )
}
