
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Globe, Youtube } from "lucide-react";
import GraffitiHeader from "@/components/GraffitiHeader";
import GraffitiFooter from "@/components/GraffitiFooter";

const GraffitiLinks = () => {
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
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <GraffitiHeader />
      
      <main className="flex-grow py-12 relative">
        <div className="absolute inset-0 brick-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-graffiti-secondary hover:text-graffiti transition-colors graffiti-text"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Вернуться на главную</span>
              </Link>
            </div>
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-3 graffiti-title text-graffiti">
                <Zap className="w-7 h-7 text-graffiti-yellow inline-block transform rotate-12" />
                Другие ресурсы
              </h1>
              <p className="text-gray-400">
                Все официальные ресурсы электрика Колпино
              </p>
            </div>
            
            <div className="graffiti-box p-6 mb-10 transform -rotate-1 bg-[#222]">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 graffiti-text text-red-500">
                <Youtube className="w-6 h-6 text-red-500" />
                YouTube канал
              </h2>
              
              <a 
                href="https://youtube.com/@elektrikkolpino" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center p-4 rounded-lg bg-black hover:bg-red-500/10 transition-colors group border-2 border-dashed border-red-500 transform rotate-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-red-500 graffiti-text">
                    Электрик Колпино
                  </h3>
                  <p className="text-sm text-gray-400">
                    https://youtube.com/@elektrikkolpino
                  </p>
                </div>
              </a>
            </div>
            
            <div className="graffiti-box p-6 transform rotate-1 bg-[#222]">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 graffiti-text text-graffiti-secondary">
                <Globe className="w-6 h-6 text-graffiti-secondary transform rotate-12" />
                Веб-сайты
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 graffiti-stagger">
                {websites.map((site, index) => (
                  <a 
                    key={index}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg bg-black hover:bg-graffiti/10 transition-colors group border-2 border-dashed border-graffiti/50 flex items-center"
                    style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-graffiti-yellow transform group-hover:rotate-45 transition-transform">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <div className="ml-3 overflow-hidden">
                      <p className="font-medium text-graffiti truncate graffiti-text">
                        {site.name}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {site.url}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <GraffitiFooter />
    </div>
  );
};

export default GraffitiLinks;
