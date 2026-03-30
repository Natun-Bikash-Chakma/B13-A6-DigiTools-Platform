import React from "react";
import productsData from "./ProductsData.json";
import { toast } from "react-toastify";
const ProductSection = ({ activeTab, setActiveTab, cart, setCart }) => {
  const isAdded = (id) => cart.some((item) => item.id === id);
  const addToCart = (product) => {
    if (!isAdded(product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} Added to Cart! 🛒`);
    }
  };
  const removeFromCart = (id, name) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error(`${name} Removed! 🗑️`);
  };
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
  const getTagClass = (type) => {
    switch (type) {
      case 'warning': return 'bg-orange-100 text-orange-600';
      case 'secondary': return 'bg-purple-100 text-purple-600';
      case 'success': return 'bg-green-100 text-green-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };
  return (
    <div className="bg-base-100 min-h-screen">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-4">Premium Digital Tools</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          {/* Tab Switcher */}
          <div className="inline-flex bg-blue-600 p-1 rounded-full mb-10 shadow-lg">
            <button 
              onClick={() => setActiveTab("products")} 
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === "products" ? "bg-white text-blue-600 shadow-sm" : "text-white hover:bg-blue-700"}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab("cart")} 
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === "cart" ? "bg-white text-blue-600 shadow-sm" : "text-white hover:bg-blue-700"}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div key={product.id} className="card bg-white border border-gray-100 shadow-sm p-8 rounded-3xl relative transition-all hover:shadow-xl flex flex-col group/card">
                {/* Dynamic Tag */}
                <div className={`absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${getTagClass(product.tagType)}`}>
                  {product.tag}
                </div>
                
                <div className="text-4xl mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{product.description}</p>
                
                <div className="text-3xl font-black mb-6">
                  ${product.price} <span className="text-sm font-normal text-gray-400 lowercase">/{product.period}</span>
                </div>
                <div className="space-y-3 mb-8 border-t pt-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Button Logic: Added vs Buy Now */}
                {isAdded(product.id) ? (
                  <button 
                    onClick={() => removeFromCart(product.id, product.name)}
                    className="group btn no-animation bg-green-600 hover:bg-red-500 border-none text-white w-full rounded-xl font-bold mt-auto transition-colors duration-200"
                  >
                    <span className="group-hover:hidden flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Added to Cart!
                    </span>
                    <span className="hidden group-hover:inline">✕ Remove from Cart?</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => addToCart(product)} 
                    className="btn btn-primary w-full rounded-xl bg-blue-600 hover:bg-blue-700 border-none text-white font-bold mt-auto shadow-md"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Cart Section */
          <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-[40px] shadow-lg border border-gray-50">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span>Your Cart</span>
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">{cart.length}</span>
            </h2>
            
            {cart.length > 0 ? (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl border border-gray-100 transition-all hover:border-blue-200">
                      <div className="flex items-center gap-5">
                        <span className="text-3xl bg-white p-3 rounded-xl shadow-sm">{item.icon}</span>
                        <div>
                          <p className="font-bold text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-400">${item.price} / {item.period}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.name)} 
                        className="btn btn-ghost btn-sm text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t flex justify-between items-center">
                  <span className="text-gray-500 font-bold text-lg">Total Amount:</span>
                  <span className="text-4xl font-black text-blue-600">${totalAmount}</span>
                </div>
                <button 
                  onClick={() => toast.info("Redirecting to payment...")} 
                  className="btn btn-block bg-blue-600 hover:bg-blue-700 text-white h-16 rounded-3xl mt-8 text-xl border-none shadow-xl shadow-blue-200"
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="text-7xl mb-4 opacity-50">🛒</div>
                <h3 className="text-2xl font-bold text-gray-400">Your cart is empty</h3>
                <button 
                  onClick={() => setActiveTab("products")} 
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Browse Products
                </button>
              </div>  
            )}
          </div>
        )}
      </section>
    </div>
  );
};
export default ProductSection;