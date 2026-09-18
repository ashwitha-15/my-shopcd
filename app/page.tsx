export default function Home() {
  const products = [
    { id: 1, name: "Premium T-Shirt", price: "₹499", image: "👕" },
    { id: 2, name: "Stylish Hoodie", price: "₹999", image: "🧥" },
    { id: 3, name: "Cool Sneakers", price: "₹1999", image: "👟" },
    { id: 4, name: "Trendy Cap", price: "₹299", image: "🧢" },
    { id: 5, name: "Denim Jeans", price: "₹1299", image: "👖" },
    { id: 6, name: "Smart Watch", price: "₹2499", image: "⌚" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center p-5 border-b">
        <h1 className="text-2xl font-bold">MY SHOP</h1>
        <button className="bg-black text-white px-4 py-2 rounded-full">Cart (0)</button>
      </header>

      <div className="bg-black text-white text-center py-20 px-5">
        <h2 className="text-5xl font-bold mb-4">NEW COLLECTION</h2>
        <p className="text-gray-300 mb-6">Trendy fashion at best price in Telangana</p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold">Shop Now</button>
      </div>

      <div className="p-5 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold my-6">Our Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.id} className="border rounded-2xl p-5 text-center hover:shadow-lg">
              <div className="text-6xl mb-4">{p.image}</div>
              <h4 className="font-semibold">{p.name}</h4>
              <p className="font-bold my-2">{p.price}</p>
              <button className="w-full bg-black text-white py-2 rounded-full mt-2">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white text-center p-6 mt-10">
        <p>© 2026 My Shop - Made with ❤️ in Dulapalli</p>
      </footer>
    </div>
  );
}