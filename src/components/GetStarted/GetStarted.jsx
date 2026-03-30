import React from "react";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";
const GetStarted = () => {
    const steps = [
    {
        id: 1,
        image: userImg,
        title: "Create Account",
        description: "Sign up quickly with your email and get instant access to our platform."
    },
    {
        id: 2,
        image: packageImg,
        title: "Choose Package",
        description: "Select the best plan that suits your needs from our premium tools."
    },
    {
        id: 3,
        image: rocketImg,
        title: "Start Using",
        description: "Start using the tools immediately and boost your productivity."
    }
];
    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-neutral mb-4">Get Started In 3 Steps</h2>
                <p className="text-base-content/60 mb-16">Start using premium digital tools in minutes, not hours.</p>
                {/* Steps Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="relative bg-white border border-base-200 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Step Number Badge */}
                            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold h-6 w-6 flex items-center justify-center rounded-full">
                                {step.id}
                            </div>
                            {/* Image Container */}
                            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                                <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                            </div>
                            {/* Text Content */}
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-base-content/50 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default GetStarted;
