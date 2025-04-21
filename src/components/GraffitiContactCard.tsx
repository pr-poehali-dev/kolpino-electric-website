
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Send, Zap } from "lucide-react";

const GraffitiContactCard = () => {
  return (
    <div className="graffiti-box p-6 bg-[#222] spray-effect">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4 graffiti-text text-graffiti">
        <Zap className="w-5 h-5 text-graffiti-yellow transform rotate-12" />
        Связаться со мной
      </h3>
      
      <div className="space-y-4 graffiti-stagger">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-graffiti transform rotate-12">
            <Phone className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Телефон:</p>
            <a 
              href="tel:+79500308830" 
              className="text-graffiti-yellow hover:underline graffiti-text"
            >
              +7 950 030 88 30
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-graffiti-secondary transform rotate-12">
            <Send className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Telegram:</p>
            <a 
              href="https://t.me/elektrikkolpino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-graffiti-secondary hover:underline graffiti-text"
            >
              @elektrikkolpino
            </a>
          </div>
        </div>
        
        <div className="mt-6 p-4 border-2 border-dashed border-graffiti/50 rounded-lg bg-graffiti/5 transform rotate-1">
          <p className="text-gray-300 text-sm">
            <span className="text-graffiti font-medium">Как это работает:</span> Пришлите фото проблемы 
            и описание ситуации, и я оперативно выеду к вам на дом для решения вашей задачи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraffitiContactCard;
