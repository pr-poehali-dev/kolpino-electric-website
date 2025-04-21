
import { useEffect } from "react";
import Header from "@/components/NeonHeader";
import Footer from "@/components/NeonFooter";
import LightningMap from "@/components/LightningMap";
import ContactCard from "@/components/NeonContactCard";
import ServicesList from "@/components/NeonServicesList";
import { Zap, ArrowRight, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const NeonIndex = () => {
  useEffect(() => {
    document.title = "⚡ Электрик Колпино | Вызов электрика на дом в Колпино";
  }, []);

  return (
    <div className="flex flex-col min-h-screen neon-grid">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dark-deeper to-dark-lighter py-16 relative overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,107,255,0.3),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-3 neon-text-blue animate-neon-pulse">
                <Zap className="w-8 h-8 text-electric-yellow animate-neon-yellow-pulse" />
                Электрик Колпино
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8 text-electric-cyan">
                Профессиональные услуги электрика на дому в Колпинском районе Санкт-Петербурга
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+79500308830"
                  className="neon-button-yellow group inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-neon-pulse" />
                  Позвонить сейчас: +7 950 030 88 30
                </a>
                <a 
                  href="https://t.me/elektrikkolpino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button inline-flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:animate-neon-pulse" />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-12 bg-dark-deeper relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold neon-text-blue border-l-4 border-electric pl-3">
                  Быстрая помощь с электрикой
                </h2>
                <p className="text-gray-300">
                  Пришлите фото с описанием проблемы, и я приеду к вам на помощь, скорее всего, в тот же день!
                  Работаю в Колпино и Колпинском районе Санкт-Петербурга.
                </p>
                
                <ContactCard />
                
                <div className="mt-6 neon-box p-4">
                  <h3 className="text-xl font-medium neon-text-yellow mb-3">Почему обращаются ко мне:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric-yellow animate-neon-yellow-pulse" />
                      <span>Оперативный выезд на дом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric-yellow animate-neon-yellow-pulse" />
                      <span>Работаю без посредников</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric-yellow animate-neon-yellow-pulse" />
                      <span>Гарантия на все работы</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric-yellow animate-neon-yellow-pulse" />
                      <span>Разумные цены без накруток</span>
                    </li>
                  </ul>
                </div>
                
                <div className="neon-box p-6 mt-8">
                  <img 
                    src="https://cdn.poehali.dev/files/de87b603-7b38-4035-9ba9-4e06907cb956.jpg" 
                    alt="Электрик Колпино" 
                    className="w-full h-auto rounded-lg shadow-neon-blue"
                  />
                  <p className="text-center mt-3 text-electric animate-neon-pulse">
                    Вызов Электрика в Колпино ⚡ 8 950 030 88 30
                  </p>
                </div>
                
                <Link 
                  to="/links" 
                  className="inline-flex items-center gap-1 text-electric hover:text-electric-yellow transition-colors text-shadow-neon-blue hover:text-shadow-neon-yellow"
                >
                  <span>Посмотреть другие мои ресурсы</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <ServicesList />
                
                <h2 className="text-2xl font-bold neon-text-blue border-l-4 border-electric pl-3 mt-8">
                  Зона обслуживания
                </h2>
                <p className="text-gray-300 mb-4">
                  Работаю по всему Колпинскому району Санкт-Петербурга.
                  Оперативно прибуду по вашему адресу для решения любых задач с электрикой.
                </p>
                
                <div className="mb-6 overflow-hidden rounded-lg neon-border">
                  <LightningMap />
                </div>
                
                <div className="mt-4 p-4 bg-electric/5 rounded-lg neon-border-yellow">
                  <p className="text-electric-yellow text-shadow-neon-yellow">
                    <strong>Нужна помощь с электрикой?</strong> Звоните или пишите в Telegram!
                    Решу ваши проблемы быстро и профессионально.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NeonIndex;
