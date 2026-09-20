"use client";
import { useState } from "react";

const allProducts = [
  // MEN'S - 8 Products
  { id: 1, name: "Black Cotton T-Shirt", price: 399, sellPrice: 599, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", cat: "Mens" },
  { id: 2, name: "White Oversized T-Shirt", price: 450, sellPrice: 699, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400", cat: "Mens" },
  { id: 3, name: "Blue Denim Shirt", price: 650, sellPrice: 999, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", cat: "Mens" },
  { id: 4, name: "Formal Shirt Slim Fit", price: 700, sellPrice: 1099, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400", cat: "Mens" },
  { id: 5, name: "Men Jeans Slim Fit", price: 800, sellPrice: 1299, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", cat: "Mens" },
  { id: 6, name: "Premium Hoodie Grey", price: 900, sellPrice: 1499, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400", cat: "Mens" },
  { id: 7, name: "Men's Jacket Black", price: 1200, sellPrice: 1999, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400", cat: "Mens" },
  { id: 8, name: "Men's Shorts Combo", price: 500, sellPrice: 799, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400", cat: "Mens" },
  
  // WOMEN'S - 10 Products - HIGH PROFIT
  { id: 9, name: "Red Kurti Cotton", price: 550, sellPrice: 899, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400", cat: "Womens" },
  { id: 10, name: "Designer Saree Red", price: 900, sellPrice: 1499, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400", cat: "Womens" },
  { id: 11, name: "Floral Top for Girls", price: 400, sellPrice: 699, image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400", cat: "Womens" },
  { id: 12, name: "Lehenga Choli Bridal", price: 1500, sellPrice: 2599, image: "https://images.unsplash.com/photo-1609356247989-6a3b2d9e6a0a?w=400", cat: "Womens" },
  { id: 13, name: "Palazzo Pant Set", price: 600, sellPrice: 999, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400", cat: "Womens" },
  { id: 14, name: "Western Dress Black", price: 700, sellPrice: 1199, image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400", cat: "Womens" },
  { id: 15, name: "Anarkali Kurti Green", price: 650, sellPrice: 1099, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", cat: "Womens" },
  { id: 16, name: "Jeans for Girls", price: 600, sellPrice: 999, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", cat: "Womens" },

  // SHOES - 8 Products
  { id: 17, name: "Running Shoes White", price: 1200, sellPrice: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", cat: "Shoes" },
  { id: 18, name: "Classic Sneakers Black", price: 1400, sellPrice: 2499, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", cat: "Shoes" },
  { id: 19, name: "Sports Shoes Blue", price: 1100, sellPrice: 1799, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400", cat: "Shoes" },
  { id: 20, name: "Casual Shoes Brown", price: 900, sellPrice: 1499, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400", cat: "Shoes" },
  
  // GADGETS - 6 Products
  { id: 21, name: "Wireless Earbuds", price: 600, sellPrice: 999, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", cat: "Gadgets" },
  { id: 22, name: "Smart Watch Black", price: 1000, sellPrice: 1799, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", cat: "Gadgets" },
  { id: 23, name: "Phone Cover Stylish", price: 150, sellPrice: 399, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400", cat: "Gadgets" },
  { id: 24, name: "Power Bank 20000mAh", price: 700, sellPrice: 1199, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", cat: "Gadgets" },
];

export default function Home() {
  const [cat, setCat] = useState("All");
  const [cart, setCart] = useState<any>([]);
  const filtered = cat === "All" ? allProducts : allProducts.filter(p=>p.cat===cat);
  const total = cart.reduce((s:any,i:any)=>s+i.sellPrice,0);
  const profit = cart.reduce((s:any,i:any)=>s+(i.sellPrice - i.price),0);

  const orderWA = () => {
    const phone = "91XXXXXXXXXX"; // NEE NUMBER
    const items = cart.map((c:any)=>`${c.name} - ₹${c.sellPrice}`).join("%0A");
    const msg = `🛍️ *NEW ORDER - My Shop CD* %0A%0A${items}%0A%0A💰 Total: ₹${total} %0A📍 Address: `;
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <div style={{padding:15, fontFamily:'sans-serif', maxWidth:1200, margin:'auto'}}>
      <h1>🛍️ My Shop CD - All In One Store</h1>
      <div style={{display:'flex', gap:10, marginBottom:20, overflowX:'auto'}}>
        {["All","Mens","Womens","Shoes","Gadgets"].map(c=>(
          <button key={c} onClick={()=>setCat(c)} style={{padding:'8px 15px', borderRadius:20, border:'1px solid #8B5CF6', background: cat===c ? '#8B5CF6' : 'white', color: cat===c ? 'white' : '#8B5CF6'}}>{c}</button>
        ))}
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:15}}>
        {filtered.map(p=>(
          <div key={p.id} style={{border:'1px solid #eee', borderRadius:10, padding:10}}>
            <img src={p.image} style={{width:'100%', height:150, objectFit:'cover', borderRadius:8}} />
            <p style={{fontSize:13, margin:'8px 0 0 0'}}>{p.name}</p>
            <b>₹{p.sellPrice}</b> <small style={{textDecoration:'line-through', color:'grey'}}>₹{p.price}</small>
            <button onClick={()=>setCart([...cart, p])} style={{width:'100%', marginTop:8, background:'#8B5CF6', color:'white', border:'none', padding:8, borderRadius:6}}>Add</button>
          </div>
        ))}
      </div>
      {cart.length>0 && <div style={{position:'fixed', bottom:0, left:0, right:0, background:'white', borderTop:'2px solid #8B5CF6', padding:15, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div><b>Cart: {cart.length} | ₹{total}</b><br/><small style={{color:'green'}}>Profit: ₹{profit}</small></div>
        <button onClick={orderWA} style={{background:'green', color:'white', padding:'10px 20px', border:'none', borderRadius:8}}>Order on WhatsApp</button>
      </div>}
    </div>
  )
}
