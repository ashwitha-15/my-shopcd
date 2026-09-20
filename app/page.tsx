"use client"
import { useState } from "react"

const phone = "918374649257"

const products = [
  { id: 1, name: "Classic White Tee", price: 399, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", category: "T-Shirts" },
  { id: 2, name: "Black Oversized Tee", price: 449, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500", category: "T-Shirts" },
  { id: 3, name: "Blue Denim Shirt", price: 799, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", category: "Shirts" },
  { id: 4, name: "Black Hoodie Premium", price: 899, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", category: "Hoodies" },
  { id: 5, name: "Cargo Pants - Black", price: 999, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500", category: "Pants" },
  { id: 6, name: "White Sneakers", price: 1199, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", category: "Shoes" },
  { id: 7, name: "Drop Shoulder Tee", price: 549, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500", category: "T-Shirts" },
  { id: 8, name: "Smart Watch Series", price: 1299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", category: "Gadgets" },
  { id: 9, name: "Grey Joggers", price: 699, image: "https://images.unsplash.com/photo-1552902875-9ac1fe6102?w=500", category: "Pants" },
  { id: 10, name: "Printed Shirt", price: 849, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500", category: "Shirts" },
  { id: 11, name: "Beige Oversized Tee", price: 499, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500", category: "T-Shirts" },
  { id: 12, name: "Black Cargo Joggers", price: 1099, image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500", category: "Pants" },
  { id: 13, name: "Polarized Sunglasses", price: 599, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", category: "Accessories" },
  { id: 14, name: "Leather Wallet", price: 499, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500", category: "Accessories" },
  { id: 15, name: "Street Style Cap", price: 299, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500", category: "Accessories" },
  { id: 16, name: "Striped T-Shirt", price: 599, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500", category: "T-Shirts" },
  { id: 17, name: "Denim Jacket", price: 1499, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500", category: "Jackets" },
  { id: 18, name: "Navy Blue Hoodie", price: 949, image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500", category: "Hoodies" },
  { id: 19, name: "Sports Shorts", price: 449, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500", category: "Pants" },
  { id: 20, name: "Black Backpack", price: 899, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", category: "Bags" },
]

export default function Home() {
  const [cart, setCart] = useState<any[]>([])

  const addToCart = (p:any) => {
    setCart([...cart, p])
    alert(`${p.name} Added to Cart! 🛒`)
  }

  const orderOnWhatsApp = () => {
    if(cart.length===0) return alert("Cart empty boss!")
    let msg = `Hi Style Hub! I want to order:%0A`
    cart.forEach(p => msg += `- ${p.name} - Rs.${p.price}%0A`)
    msg += `%0AMy Address: `
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="p-4 shadow flex justify-between items-center sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-black">🛍️ Style Hub</h1>
        <button onClick={orderOnWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
          Cart ({cart.length}) - WhatsApp
        </button>
      </header>

      <div className="p-2 bg-black text-white text-center text-sm">
        🔥 Free Delivery in Hyderabad | COD Available | Trending Collection 2026
      </div>

      <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className="border rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src={p.image} className="h-48 w-full object-cover" />
            <div className="p-3">
              <p className="text-xs text-gray-500">{p.category}</p>
              <h3 className="font-bold text-sm">{p.name}</h3>
              <p className="font-black mt-1">₹{p.price}</p>
              <button onClick={()=>addToCart(p)} className="mt-2 w-full bg-black text-white py-2 rounded-lg text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
   }
