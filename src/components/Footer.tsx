
import { Link } from "react-router-dom";
import { YouTube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-electric-dark text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">© {new Date().getFullYear()} Электрик Колпино</p>
            <p className="text-xs opacity-70 mt-1">Услуги электрика в Колпинском районе Санкт-Петербурга</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10"
              asChild
            >
              <a href="https://youtube.com/@elektrikkolpino" target="_blank" rel="noopener noreferrer">
                <YouTube className="w-5 h-5 mr-1" />
                <span>YouTube</span>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/links">Другие сайты</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
