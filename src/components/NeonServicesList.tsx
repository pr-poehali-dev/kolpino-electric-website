
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

const NeonServicesList = () => {
  const services = [
    {
      title: "Устранение неисправностей",
      description: "Быстрая диагностика и устранение электрических неисправностей любой сложности"
    },
    {
      title: "Замена проводки",
      description: "Полная или частичная замена старой проводки с соблюдением всех норм безопасности"
    },
    {
      title: "Установка розеток и выключателей",
      description: "Монтаж новых точек питания и переключателей в вашем доме или квартире"
    },
    {
      title: "Подключение бытовой техники",
      description: "Профессиональное подключение электроплит, духовых шкафов, стиральных машин"
    },
    {
      title: "Монтаж освещения",
      description: "Установка люстр, светильников, бра, светодиодной подсветки и других систем освещения"
    },
    {
      title: "Электромонтажные работы",
      description: "Комплексные работы по электрификации помещений любого назначения"
    }
  ];

  return (
    <Card className="neon-box overflow-hidden">
      <CardHeader className="bg-electric/10 p-4 border-b border-electric">
        <CardTitle className="flex items-center gap-2 neon-text-blue">
          <Zap className="w-5 h-5 text-electric-yellow animate-neon-yellow-pulse" />
          Услуги электрика
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-800">
          {services.map((service, index) => (
            <li 
              key={index} 
              className="p-4 hover:bg-electric/5 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-electric-yellow group-hover:animate-neon-yellow-pulse" />
                </div>
                
                <div>
                  <h3 className="font-medium text-electric group-hover:text-shadow-neon-blue transition-all">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="p-4 bg-electric/10 text-center">
          <p className="text-electric-yellow text-shadow-neon-yellow">
            Звоните: <a href="tel:+79500308830" className="font-bold">+7 950 030 88 30</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonServicesList;
