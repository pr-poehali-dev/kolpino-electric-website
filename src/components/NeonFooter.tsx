
import { Button } from "@/components/ui/button";
import { Zap, Send, PhoneCall, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NeonFooter = () => {
  return (
    <footer className="bg-dark-deeper text-white py-8 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric to-transparent animate-neon-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold neon-text-blue">
              <Zap className="w-6 h-6 text-electric-yellow animate-neon-yellow-pulse" />
              Электрик Колпино
            </Link>
            <p className="text-gray-400 mt-2">Профессиональные услуги электрика на дому</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              className="border-electric text-electric hover:bg-electric/20 text-shadow-neon-blue flex items-center gap-2"
              onClick={() => window.location.href = 'tel:+79500308830'}
            >
              <PhoneCall className="w-4 h-4" />
              +7 950 030 88 30
            </Button>
            
            <Button 
              variant="outline"
              className="border-electric-yellow text-electric-yellow hover:bg-electric-yellow/20 text-shadow-neon-yellow flex items-center gap-2"
              onClick={() => window.open('https://t.me/elektrikkolpino', '_blank')}
            >
              <Send className="w-4 h-4" />
              Telegram
            </Button>
            
            <Button 
              variant="outline"
              className="border-electric-pink text-electric-pink hover:bg-electric-pink/20 text-shadow-neon-pink flex items-center gap-2"
              onClick={() => window.open('https://youtube.com/@elektrikkolpino', '_blank')}
            >
              <YoutubeIcon className="w-4 h-4" />
              YouTube
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Электрик Колпино - Вызов электрика на дом
          </p>
          
          <div>
            <Link 
              to="/links" 
              className="text-electric hover:text-electric-yellow transition-colors text-shadow-neon-blue hover:text-shadow-neon-yellow text-sm"
            >
              Все сайты и ресурсы
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NeonFooter;
