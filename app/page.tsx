"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Premium T-Shirt", price: 499, emoji: "👕" },
  { id: 2, name: "Stylish Hoodie", price: 999, emoji: "🧥" },
  { id: 3, name: "Cool Sneakers", price: 1999, emoji: "👟" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  
  const addToCart = (p: any) => {
    setCart([...cart, p]);
    alert(`${p.name} Cart lo add ayindi! ✅`);
  };

  const total = cart.reduce((s, i) => s + i.price, 0);

  const orderNow = () => {
    const text = `Hi! Order kavali: ${cart.map(c=>c.name).join(', ')} Total Rs.${total}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white text-center py-4">
        <h1 className="text-2xl font-black">MY SHOP - NEW COLLECTION</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl p-6 shadow text-center">
            <div className="text-6xl">{p.emoji}</div>
            <h4 className="font-semibold mt-3 text-lg">{p.name}</h4>
            <p className="font-bold mt-1">Rs. {p.price}</p>
            <button 
              onClick={() => addToCart(p)} 
              className="w-full bg-black text-white py-3 rounded-full mt-4 font-bold hover:bg-gray-800 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-5 right-5 bg-black text-white p-5 rounded-2xl shadow-2xl">
          <p className="font-bold">Cart: {cart.length} items</p>
          <p>Total: Rs. {total}</p>
          <button onClick={orderNow} className="bg-green-500 w-full mt-3 py-2 rounded-full font-bold">Buy on WhatsApp</button>
          <button onClick={()=>setCart([])} className="w-full mt-2 text-xs text-gray-400">Clear</button>
        </div>
      )}

      <footer className="bg-black text-white text-center py-4 mt-10">
        <p>© 2026 My Shop - Made with ❤️</p>
      </footer>
    </div>
  );
}