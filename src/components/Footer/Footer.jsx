import React from 'react';
import instagramIcon from "../../assets/instagram.png"; 
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
const Footer = () => {
  const socialLinks = [
    { id: 1, icon: instagramIcon, url: "#", alt: "Instagram" },
    { id: 2, icon: facebookIcon, url: "#", alt: "Facebook" },
    { id: 3, icon: twitterIcon, url: "#", alt: "Twitter" },
  ];
  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Product</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          {/* Resources & Social Section */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-400 mb-10">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.id} 
                  href={social.url} 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all overflow-hidden p-2"
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    className="w-full h-full object-contain" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
