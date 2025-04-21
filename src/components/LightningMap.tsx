
import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

const LightningMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загружаем скрипт Яндекс.Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU';
    script.async = true;
    
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    if (typeof window.ymaps !== 'undefined' && mapRef.current) {
      window.ymaps.ready(() => {
        // Координаты Колпино
        const kolpinoCoords = [59.7468, 30.5799];
        
        const map = new window.ymaps.Map(mapRef.current, {
          center: kolpinoCoords,
          zoom: 13,
          controls: ['zoomControl', 'geolocationControl']
        });

        // Создаем кастомную метку с изображением молнии
        const lightningIcon = `
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L4.094 12.5H11L10 22L18.906 11.5H12L13 2Z" 
                  fill="#FFD600" stroke="#3361FF" stroke-width="1.5" 
                  class="lightning-marker" />
          </svg>
        `;

        const lightningMarker = new window.ymaps.Placemark(
          kolpinoCoords,
          {
            hintContent: 'Электрик Колпино',
            balloonContent: 'Вызов электрика на дом в Колпино<br>+7 950 030 88 30'
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(lightningIcon),
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20],
            iconContentOffset: [0, 0]
          }
        );

        map.geoObjects.add(lightningMarker);
        
        // Добавляем пульсирующую анимацию для метки
        const pulse = () => {
          const marker = mapRef.current?.querySelector('.lightning-marker');
          if (marker) {
            marker.classList.add('animate-lightning-pulse');
          }
        };
        
        pulse();
      });
    }
  };

  return (
    <Card className="w-full h-[300px] sm:h-[400px] overflow-hidden shadow-lg rounded-xl">
      <div ref={mapRef} className="w-full h-full" />
    </Card>
  );
};

// Добавляем определение типа для window
declare global {
  interface Window {
    ymaps: any;
  }
}

export default LightningMap;
