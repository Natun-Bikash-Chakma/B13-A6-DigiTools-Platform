import React from "react";
const DaisyNav = ({ cartCount, setActiveTab }) => {
    return (
        <nav className="navbar bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 px-4 lg:px-12">
            <div className="navbar-start">
                <a className="text-2xl font-bold text-primary tracking-tight cursor-pointer" onClick={() => setActiveTab("products")}>DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-base-content/70">
                    <li><a className="hover:text-primary">Products</a></li>
                    <li><a className="hover:text-primary">Features</a></li>
                    <li><a className="hover:text-primary">Pricing</a></li>
                    <li><a className="hover:text-primary">Testimonials</a></li>
                    <li><a className="hover:text-primary">FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2 lg:gap-4">
                <div 
                    className="relative cursor-pointer p-2 hover:bg-base-200 rounded-full transition-all" 
                    onClick={() => setActiveTab("cart")}
                >
                    <span className="text-2xl">🛒</span>
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                            {cartCount}
                        </span>
                    )}
                </div>
                <a className="btn btn-ghost btn-sm lg:btn-md font-medium">Login</a>
                <button className="btn btn-primary btn-sm md:btn-md rounded-full px-6">Get Started</button>
            </div>
        </nav>
    );
};
export default DaisyNav;
