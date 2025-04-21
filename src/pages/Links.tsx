
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sites = [
  "https://elektrik-kolpino.narod.ru",
  "http://elektrikkolpino.bos.ru",
  "https://colpino-electric-service.poehali.dev",
  "https://elektrik-sait-video.poehali.dev",
  "https://anime-electrics-project.poehali.dev",
  "https://kolpino-electric-site.poehali.dev",
  "https://minimal-electric-site.poehali.dev",
  "https://kolpino-lightning-site.poehali.dev",
  "https://kolpino-electric-site-1.poehali.dev",
  "https://elektromontazh-sait.poehali.dev",
  "https://kolpino-electric-initiative.poehali.dev",
  "https://website-replication-project.poehali.dev",
  "https://elektrik-kolpino.renderforestsites.com",
  "https://elektrikkolpino.renderforestsites.com"
];

const Links = () => {
  useEffect(() => {
    document.title = "Другие ресурсы | Электрик Колпино";
    
    // Анимация появления элементов при загрузке страницы
    const items = document.querySelectorAll('.link-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fade-in');
      }, index * 100);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center">
              <Link to="/" className="flex items-center gap-1 text-electric hover:text-electric-dark transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Вернуться на главную</span>
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold mb-8 text-electric-dark">Другие ресурсы Электрика Колпино</h1>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-electric-dark">YouTube канал</h2>
                  <a 
                    href="https://youtube.com/@elektrikkolpino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item flex items-center gap-2 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-red-600" />
                    <span className="font-medium">youtube.com/@elektrikkolpino</span>
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-electric-dark">Другие сайты</h2>
                  <div className="space-y-3">
                    {sites.map((site, index) => (
                      <a 
                        key={index}
                        href={site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors opacity-0"
                      >
                        <ExternalLink className="w-5 h-5 text-electric" />
                        <span className="font-medium break-all">{site}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-4 bg-electric/10 rounded-lg">
              <p className="text-center text-electric-dark">
                <strong>Нужна помощь с электрикой?</strong> Звоните: +7 950 030 88 30 или пишите в Telegram: @elektrikkolpino
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Links;
