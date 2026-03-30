import React from "react";
const StatsSection = () => {
    return (
        /* Updated bg-gradient-to-r to bg-linear-to-r for Tailwind v4 */
        <div className="bg-linear-to-r from-primary to-secondary py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center text-white gap-8 md:gap-0">
                    
                    {/* Active Users */}
                    <div className="flex-1 text-center md:border-r border-white/20 last:border-none">
                        <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
                        <div className="text-white/80 text-sm lg:text-base font-medium">Active Users</div>
                    </div>
                    {/* Premium Tools */}
                    <div className="flex-1 text-center md:border-r border-white/20 last:border-none">
                        <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
                        <div className="text-white/80 text-sm lg:text-base font-medium">Premium Tools</div>
                    </div>
                    {/* Rating */}
                    <div className="flex-1 text-center">
                        <div className="text-4xl lg:text-5xl font-bold mb-2">4.9</div>
                        <div className="text-white/80 text-sm lg:text-base font-medium">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StatsSection;
