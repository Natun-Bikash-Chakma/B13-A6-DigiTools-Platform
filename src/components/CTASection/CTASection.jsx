import React from 'react';
const CTASection = () => {
    return (
        <section className="bg-base-100">
            {/* Updated bg-gradient-to-r to bg-linear-to-r for Tailwind v4 */}
            <div className="mx-auto bg-linear-to-r from-[#7C3AED] to-[#9333EA] py-20 px-8 text-center text-white shadow-2xl">
                
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    Ready To Transform Your Workflow?
                </h2>
                {/* Description */}
                <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter. 
                    Start your free trial today.
                </p>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    {/* Primary White Button */}
                    <button className="btn btn-lg bg-white text-[#7C3AED] border-none hover:bg-white/90 rounded-full px-10 normal-case font-bold shadow-lg">
                        Explore Products
                    </button>
                    
                    {/* Outline Button */}
                    <button className="btn btn-lg btn-outline text-white border-white/40 hover:bg-white/10 hover:border-white rounded-full px-10 normal-case font-bold">
                        View Pricing
                    </button>
                </div>
                {/* Footer Badges/Text */}
                <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-white/70 font-medium">
                    <span>14-day free trial</span>
                    <span className="hidden sm:inline">•</span>
                    <span>No credit card required</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Cancel anytime</span>
                </div>
            </div>
        </section>
    );
};
export default CTASection;
