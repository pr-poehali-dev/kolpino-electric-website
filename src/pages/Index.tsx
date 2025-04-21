
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LightningMap from "@/components/LightningMap";
import ContactCard from "@/components/ContactCard";
import ServicesList from "@/components/ServicesList";
import { Button } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "Электрик Колпино | Услуги электрика в Колпинском районе СПб";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-electric to-electric-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
                <Zap className="w-8 h-8 text-electric-yellow animate-lightning-pulse" />
                Электрик Колпино
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8">
                Профессиональные услуги электрика на дому в Колпинском районе Санкт-Петербурга
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+79500308830"
                  className="bg-white text-electric hover:bg-electric-yellow hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Позвонить сейчас: +7 950 030 88 30
                </a>
                <a 
                  href="https://t.me/elektrikkolpino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-electric-dark border-l-4 border-electric pl-3">
                  Быстрая помощь с электрикой
                </h2>
                <p className="text-gray-700">
                  Пришлите фото с описанием проблемы, и я приеду к вам на помощь, скорее всего, в тот же день!
                  Работаю в Колпино и Колпинском районе Санкт-Петербурга.
                </p>
                
                <ContactCard />
                
                <div className="mt-6">
                  <h3 className="text-xl font-medium text-electric-dark mb-3">Почему обращаются ко мне:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric" />
                      <span>Оперативный выезд на дом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric" />
                      <span>Работаю без посредников</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric" />
                      <span>Гарантия на все работы</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-electric" />
                      <span>Разумные цены без накруток</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  to="/links" 
                  className="inline-flex items-center gap-1 text-electric hover:text-electric-dark transition-colors"
                >
                  <span>Посмотреть другие мои ресурсы</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <ServicesList />
                
                <h2 className="text-2xl font-bold text-electric-dark border-l-4 border-electric pl-3 mt-8">
                  Зона обслуживания
                </h2>
                <p className="text-gray-700 mb-4">
                  Работаю по всему Колпинскому району Санкт-Петербурга.
                  Оперативно прибуду по вашему адресу для решения любых задач с электрикой.
                </p>
                
                <LightningMap />
                
                <div className="mt-4 p-4 bg-electric/10 rounded-lg">
                  <p className="text-electric-dark">
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

export default Index;
