
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-electric text-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
        >
          <Zap className="w-6 h-6 text-electric-yellow animate-float" />
          <span>Электрик Колпино</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="border-white text-white hover:bg-white/20"
            asChild
          >
            <Link to="/links">Другие ресурсы</Link>
          </Button>
          
          <Button 
            size="sm"
            className="bg-white text-electric hover:bg-electric-yellow"
            onClick={() => window.location.href = 'tel:+79500308830'}
          >
            +7 950 030 88 30
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
