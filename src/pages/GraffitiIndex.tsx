
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Phone, Send } from "lucide-react";
import GraffitiHeader from "@/components/GraffitiHeader";
import GraffitiFooter from "@/components/GraffitiFooter";
import GraffitiContactCard from "@/components/GraffitiContactCard";
import GraffitiServicesList from "@/components/GraffitiServicesList";
import LightningMap from "@/components/LightningMap";

const GraffitiIndex = () => {
  useEffect(() => {
    document.title = "⚡ Электрик Колпино | Вызов электрика на дом";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <GraffitiHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 brick-pattern"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 graffiti-title text-white">
                <span className="inline-block text-graffiti">⚡ Электрик</span>{" "}
                <span className="inline-block text-graffiti-secondary">Колпино</span>
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8 text-gray-300">
                Профессиональные услуги электрика на дому в Колпинском районе Санкт-Петербурга
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+79500308830"
                  className="graffiti-button graffiti-button-orange group inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Позвонить сейчас: +7 950 030 88 30
                </a>
                <a 
                  href="https://t.me/elektrikkolpino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="graffiti-button graffiti-button-blue inline-flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold graffiti-text text-graffiti border-l-4 border-graffiti pl-3 transform -rotate-1">
                  Быстрая помощь с электрикой
                </h2>
                <p className="text-gray-300">
                  Пришлите фото с описанием проблемы, и я приеду к вам на помощь, скорее всего, в тот же день!
                  Работаю в Колпино и Колпинском районе Санкт-Петербурга.
                </p>
                
                <GraffitiContactCard />
                
                <div className="mt-6 graffiti-box p-4 transform rotate-1">
                  <h3 className="text-xl font-medium graffiti-text text-graffiti-yellow mb-3">Почему обращаются ко мне:</h3>
                  <ul className="space-y-2 graffiti-stagger">
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-graffiti-yellow transform rotate-12" />
                      <span>Оперативный выезд на дом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-graffiti-yellow transform rotate-12" />
                      <span>Работаю без посредников</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-graffiti-yellow transform rotate-12" />
                      <span>Гарантия на все работы</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-graffiti-yellow transform rotate-12" />
                      <span>Разумные цены без накруток</span>
                    </li>
                  </ul>
                </div>
                
                <div className="graffiti-box p-6 mt-8 transform -rotate-1">
                  <img 
                    src="https://cdn.poehali.dev/files/de87b603-7b38-4035-9ba9-4e06907cb956.jpg" 
                    alt="Электрик Колпино" 
                    className="w-full h-auto rounded-lg border-4 border-white rotate-2"
                  />
                  <p className="text-center mt-3 text-graffiti graffiti-text">
                    Вызов Электрика в Колпино ⚡ 8 950 030 88 30
                  </p>
                </div>
                
                <Link 
                  to="/links" 
                  className="inline-flex items-center gap-1 text-graffiti-secondary hover:text-graffiti transition-colors graffiti-text"
                >
                  <span>Посмотреть другие мои ресурсы</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <GraffitiServicesList />
                
                <h2 className="text-2xl font-bold graffiti-text text-graffiti-secondary border-l-4 border-graffiti-secondary pl-3 mt-8 transform rotate-1">
                  Зона обслуживания
                </h2>
                <p className="text-gray-300 mb-4">
                  Работаю по всему Колпинскому району Санкт-Петербурга.
                  Оперативно прибуду по вашему адресу для решения любых задач с электрикой.
                </p>
                
                <div className="mb-6 graffiti-box overflow-hidden transform -rotate-1">
                  <LightningMap />
                </div>
                
                <div className="mt-4 p-4 bg-graffiti-yellow/10 rounded-lg border-2 border-dashed border-graffiti-yellow transform rotate-1">
                  <p className="text-graffiti-yellow graffiti-text">
                    <strong>Нужна помощь с электрикой?</strong> Звоните или пишите в Telegram!
                    Решу ваши проблемы быстро и профессионально.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <GraffitiFooter />
    </div>
  );
};

export default GraffitiIndex;
