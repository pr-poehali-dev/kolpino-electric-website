
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Zap, 
  Globe, 
  YoutubeIcon 
} from "lucide-react";
import NeonHeader from "@/components/NeonHeader";
import NeonFooter from "@/components/NeonFooter";

const NeonLinks = () => {
  useEffect(() => {
    document.title = "Другие ресурсы | Электрик Колпино";
  }, []);

  const websites = [
    { url: "https://elektrik-kolpino.narod.ru", name: "Elektrik Kolpino Narod.ru" },
    { url: "http://elektrikkolpino.bos.ru", name: "ElektrikKolpino Bos.ru" },
    { url: "https://colpino-electric-service.poehali.dev", name: "Colpino Electric Service" },
    { url: "https://elektrik-sait-video.poehali.dev", name: "Электрик Сайт Видео" },
    { url: "https://anime-electrics-project.poehali.dev", name: "Anime Electrics Project" },
    { url: "https://kolpino-electric-site.poehali.dev", name: "Kolpino Electric Site" },
    { url: "https://minimal-electric-site.poehali.dev", name: "Minimal Electric Site" },
    { url: "https://kolpino-lightning-site.poehali.dev", name: "Kolpino Lightning Site" },
    { url: "https://kolpino-electric-site-1.poehali.dev", name: "Kolpino Electric Site 1" },
    { url: "https://elektromontazh-sait.poehali.dev", name: "Электромонтаж Сайт" },
    { url: "https://kolpino-electric-initiative.poehali.dev", name: "Kolpino Electric Initiative" },
    { url: "https://website-replication-project.poehali.dev", name: "Website Replication Project" },
    { url: "https://elektrik-kolpino.renderforestsites.com", name: "Elektrik Kolpino RenderforestSites" },
    { url: "https://elektrikkolpino.renderforestsites.com", name: "ElektrikKolpino RenderforestSites" },
  ];

  return (
    <div className="flex flex-col min-h-screen neon-grid">
      <NeonHeader />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-electric hover:text-electric-yellow transition-colors text-shadow-neon-blue hover:text-shadow-neon-yellow"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Вернуться на главную</span>
              </Link>
            </div>
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-3 neon-text-blue flex items-center justify-center gap-2">
                <Zap className="w-7 h-7 text-electric-yellow animate-neon-yellow-pulse" />
                Другие ресурсы
              </h1>
              <p className="text-gray-400">
                Все официальные ресурсы электрика Колпино
              </p>
            </div>
            
            <Card className="neon-box mb-10">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 neon-text-yellow">
                  <YoutubeIcon className="w-6 h-6 text-electric-pink animate-neon-pulse" />
                  YouTube канал
                </h2>
                
                <a 
                  href="https://youtube.com/@elektrikkolpino" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-lg bg-dark-lighter hover:bg-electric/10 transition-colors group neon-border"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <YoutubeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-electric group-hover:text-shadow-neon-blue">
                      Электрик Колпино
                    </h3>
                    <p className="text-sm text-gray-400">
                      https://youtube.com/@elektrikkolpino
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
            
            <Card className="neon-box">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 neon-text-blue">
                  <Globe className="w-6 h-6 text-electric animate-neon-pulse" />
                  Веб-сайты
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {websites.map((site, index) => (
                    <a 
                      key={index}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg bg-dark-lighter hover:bg-electric/10 transition-colors group neon-border flex items-center"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center neon-box-yellow">
                        <Zap className="w-4 h-4 text-electric-yellow" />
                      </div>
                      <div className="ml-3 overflow-hidden">
                        <p className="font-medium text-electric truncate group-hover:text-shadow-neon-blue">
                          {site.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {site.url}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <NeonFooter />
    </div>
  );
};

export default NeonLinks;
