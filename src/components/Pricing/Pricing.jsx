import React from 'react';
const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            subtitle: "Perfect for getting started",
            price: "0",
            features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
            buttonText: "Get Started Free",
            isPopular: false
        },
        {
            name: "Pro",
            subtitle: "Best for professionals",
            price: "29",
            features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
            buttonText: "Start Pro Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            subtitle: "For teams and businesses",
            price: "99",
            features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];
    return (
        <section className="bg-base-100 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-neutral mb-4 tracking-tight">Simple, Transparent Pricing</h2>
                    <p className="text-base-content/60 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`card relative p-10 border border-base-200 shadow-xl transition-all duration-300 flex flex-col text-left h-full ${
                                plan.isPopular ? 'bg-primary text-white scale-105 z-10' : 'bg-white'
                            }`}
                        >
                            {/* "Most Popular" Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge badge-warning font-bold py-3 px-4 shadow-md">
                                    Most Popular
                                </div>
                            )}
                            {/* Plan Name & Price */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-base-content/60'}`}>
                                    {plan.subtitle}
                                </p>
                            </div>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-black">${plan.price}</span>
                                <span className={`ml-2 text-lg font-medium ${plan.isPopular ? 'text-white/70' : 'text-base-content/50'}`}>/Month</span>
                            </div>
                            {/* Features List - Updated 'flex-grow' to 'grow' for Tailwind v4 */}
                            <ul className="space-y-4 mb-12 grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org" className={`h-5 w-5 shrink-0 ${plan.isPopular ? 'text-white' : 'text-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={`text-base ${plan.isPopular ? 'text-white/90' : 'text-neutral'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* CTA Button */}
                            <button className={`btn btn-lg w-full border-none shadow-md normal-case text-lg ${
                                plan.isPopular 
                                ? 'bg-white text-primary hover:bg-base-200' 
                                : 'bg-primary text-white hover:bg-primary/90'
                            }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Pricing;
