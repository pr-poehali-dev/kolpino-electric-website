
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Send, Zap } from "lucide-react";

const ContactCard = () => {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader className="bg-electric pb-4 text-white">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Zap className="w-6 h-6 text-electric-yellow" />
          Быстрая связь с электриком
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Вызов электрика на дом в Колпино</h3>
          <p className="text-sm text-muted-foreground">
            Отправьте фото с описанием проблемы и получите помощь в тот же день!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className="flex items-center gap-2 bg-electric hover:bg-electric-light"
            onClick={() => window.location.href = 'tel:+79500308830'}
          >
            <PhoneCall className="w-4 h-4" />
            <span>+7 950 030 88 30</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-electric text-electric hover:bg-electric/10"
            onClick={() => window.open('https://t.me/elektrikkolpino', '_blank')}
          >
            <Send className="w-4 h-4" />
            <span>Написать в Telegram</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
