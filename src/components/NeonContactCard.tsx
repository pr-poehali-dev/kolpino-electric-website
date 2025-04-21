
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Send, Zap } from "lucide-react";

const NeonContactCard = () => {
  return (
    <Card className="neon-box overflow-hidden">
      <CardContent className="p-6 bg-dark-lighter">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4 neon-text-blue">
          <Zap className="w-5 h-5 text-electric-yellow animate-neon-yellow-pulse" />
          Связаться со мной
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center neon-box-yellow">
              <Phone className="w-5 h-5 text-electric-yellow" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Телефон:</p>
              <a 
                href="tel:+79500308830" 
                className="text-electric-yellow hover:underline text-shadow-neon-yellow"
              >
                +7 950 030 88 30
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center neon-box">
              <Send className="w-5 h-5 text-electric" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Telegram:</p>
              <a 
                href="https://t.me/elektrikkolpino" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-electric hover:underline text-shadow-neon-blue"
              >
                @elektrikkolpino
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-electric/10 p-4 rounded-lg border border-electric">
          <p className="text-gray-300 text-sm">
            <span className="text-electric font-medium">Как это работает:</span> Пришлите фото проблемы 
            и описание ситуации, и я оперативно выеду к вам на дом для решения вашей задачи.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonContactCard;
