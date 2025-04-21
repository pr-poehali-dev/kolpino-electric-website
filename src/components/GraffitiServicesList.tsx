
import { Zap } from "lucide-react";

const GraffitiServicesList = () => {
  const services = [
    {
      title: "Устранение неисправностей",
      description: "Быстрая диагностика и устранение электрических неисправностей любой сложности",
      color: "orange"
    },
    {
      title: "Замена проводки",
      description: "Полная или частичная замена старой проводки с соблюдением всех норм безопасности",
      color: "blue"
    },
    {
      title: "Установка розеток и выключателей",
      description: "Монтаж новых точек питания и переключателей в вашем доме или квартире",
      color: "yellow"
    },
    {
      title: "Подключение бытовой техники",
      description: "Профессиональное подключение электроплит, духовых шкафов, стиральных машин",
      color: "green"
    },
    {
      title: "Монтаж освещения",
      description: "Установка люстр, светильников, бра, светодиодной подсветки и других систем освещения",
      color: "purple"
    },
    {
      title: "Электромонтажные работы",
      description: "Комплексные работы по электрификации помещений любого назначения",
      color: "pink"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'orange': return 'border-orange-500 text-orange-500 bg-orange-500/10';
      case 'blue': return 'border-blue-500 text-blue-500 bg-blue-500/10';
      case 'yellow': return 'border-yellow-500 text-yellow-500 bg-yellow-500/10';
      case 'green': return 'border-green-500 text-green-500 bg-green-500/10';
      case 'purple': return 'border-purple-500 text-purple-500 bg-purple-500/10';
      case 'pink': return 'border-pink-500 text-pink-500 bg-pink-500/10';
      default: return 'border-orange-500 text-orange-500 bg-orange-500/10';
    }
  };

  return (
    <div className="graffiti-box bg-[#222] overflow-hidden">
      <div className="p-4 border-b-2 border-dashed border-graffiti/50 bg-graffiti/10">
        <h2 className="flex items-center gap-2 graffiti-text text-xl text-graffiti">
          <Zap className="w-5 h-5 text-graffiti-yellow transform rotate-12" />
          Услуги электрика
        </h2>
      </div>
      
      <div className="p-0">
        <ul className="graffiti-stagger">
          {services.map((service, index) => (
            <li 
              key={index} 
              className="p-4 border-b border-dashed border-gray-800 hover:bg-black/30 transition-colors group"
              style={{ transform: `rotate(${index % 2 === 0 ? '0.5' : '-0.5'}deg)` }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full flex items-center justify-center bg-black border-2 border-graffiti group-hover:rotate-45 transition-transform">
                  <Zap className="w-4 h-4 text-graffiti-yellow" />
                </div>
                
                <div>
                  <h3 className={`font-medium graffiti-text ${getColorClass(service.color)}`}>
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
        
        <div className="p-4 bg-graffiti/5 text-center border-t-2 border-dashed border-graffiti/50">
          <p className="text-graffiti-yellow graffiti-text">
            Звоните: <a href="tel:+79500308830" className="font-bold">+7 950 030 88 30</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraffitiServicesList;
