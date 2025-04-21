
import { Zap, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const GraffitiHeader = () => {
  return (
    <header className="bg-[#1a1a1a] text-white py-4 relative z-10">
      <div className="absolute inset-0 brick-pattern"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 drip-border"></div>
      
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-graffiti rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <span className="graffiti-title text-xl text-white group-hover:text-graffiti transition-colors">
            Электрик Колпино
          </span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Link 
            to="/links" 
            className="graffiti-button graffiti-button-blue"
          >
            Другие сайты
          </Link>
          
          <a 
            href="tel:+79500308830"
            className="graffiti-button graffiti-button-orange flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            +7 950 030 88 30
          </a>
        </div>
      </div>
    </header>
  );
};

export default GraffitiHeader;
