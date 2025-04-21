
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  "Ремонт электропроводки",
  "Замена розеток и выключателей",
  "Подключение люстр и светильников",
  "Установка электросчетчиков",
  "Монтаж электрощитов",
  "Поиск неисправностей",
  "Подключение бытовой техники",
  "Электромонтажные работы"
];

const ServicesList = () => {
  const listRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = listRef.current?.querySelectorAll('.service-item');
            items?.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-in');
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (listRef.current) {
      observer.observe(listRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-electric-dark">Услуги электрика в Колпино</h3>
        <ul ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <li 
              key={index}
              className="service-item flex items-center gap-2 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-electric-light flex-shrink-0" />
              <span className="text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServicesList;
