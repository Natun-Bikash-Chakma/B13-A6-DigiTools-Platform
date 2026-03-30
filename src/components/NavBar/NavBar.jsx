import React from "react";
import bannerImg from "../../assets/banner.png";
const NavBar = () => {
    return (
        <header className="hero py-12 lg:py-8 px-4 lg:px-12">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24 p-0 max-w-7xl">
                <div className="relative w-full max-w-lg">
                    <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
                    <img 
                        src={bannerImg}
                        className="rounded-3xl shadow-2xl border border-white/20 relative z-10"
                        alt="Workflow Graphic" 
                    />
                </div>
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        New: AI-Powered Tools Available
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-neutral mb-6">
                        Supercharge Your <br />
                        {/* Updated bg-gradient-to-r to bg-linear-to-r for Tailwind v4 */}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Digital Workflow</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-base-content/60 leading-relaxed mb-8 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {/* Updated bg-gradient-to-r to bg-linear-to-r for Tailwind v4 */}
                        <button className="btn btn-lg btn-primary rounded-full px-10 text-white bg-linear-to-r from-primary to-secondary border-none shadow-xl shadow-primary/25">
                            Explore Products
                        </button>
                        <button className="btn btn-lg btn-outline border-base-300 hover:border-primary rounded-full px-10 gap-3 group">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 text-primary">
                                    <path d="M3 22v-20l18 10-18 10z" />
                                </svg>
                            </div>
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default NavBar;
