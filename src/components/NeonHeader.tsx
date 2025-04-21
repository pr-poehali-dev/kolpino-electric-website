
import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const NeonHeader = () => {
  return (
    <header className="bg-dark-deeper text-white shadow-md py-4 relative z-10">
      <div className="absolute inset-0 bg-electric/5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric to-transparent animate-neon-pulse"></div>
      
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
        >
          <Zap className="w-6 h-6 text-electric-yellow animate-neon-yellow-pulse" />
          <span className="neon-text-blue">Электрик Колпино</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="border-electric text-electric hover:bg-electric/20 text-shadow-neon-blue"
            asChild
          >
            <Link to="/links">Другие ресурсы</Link>
          </Button>
          
          <Button 
            size="sm"
            className="bg-electric-yellow text-black hover:bg-electric-yellow/90 neon-border-yellow flex items-center gap-2"
            onClick={() => window.location.href = 'tel:+79500308830'}
          >
            <Phone className="w-4 h-4" />
            +7 950 030 88 30
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NeonHeader;
