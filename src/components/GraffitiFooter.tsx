
import { Zap, Send, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const GraffitiFooter = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 relative">
      <div className="absolute inset-0 brick-pattern"></div>
      <div className="absolute top-0 left-0 right-0 h-1 drip-border"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2 graffiti-text text-2xl text-graffiti">
              <Zap className="w-8 h-8 text-graffiti transform rotate-12" />
              Электрик Колпино
            </Link>
            <p className="text-gray-400 mt-2">
              Профессиональные услуги электрика на дому
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+79500308830"
              className="graffiti-button graffiti-button-orange flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +7 950 030 88 30
            </a>
            
            <a 
              href="https://t.me/elektrikkolpino"
              target="_blank"
              rel="noopener noreferrer"
              className="graffiti-button graffiti-button-blue flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            
            <a 
              href="https://youtube.com/@elektrikkolpino"
              target="_blank"
              rel="noopener noreferrer"
              className="graffiti-button border-2 border-red-600 text-red-600 bg-red-600/10 hover:bg-red-600 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 rounded-lg font-bold relative overflow-hidden transform skew(-5deg, 0) shadow-lg"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Электрик Колпино - Вызов электрика на дом
          </p>
          
          <div>
            <Link 
              to="/links" 
              className="text-graffiti hover:text-graffiti-yellow transition-colors text-sm graffiti-text"
            >
              Все сайты и ресурсы
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GraffitiFooter;
