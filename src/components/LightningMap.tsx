
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

        // Создаем кастомную метку с изображением молнии в граффити стиле
        const lightningIcon = `
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L4.094 12.5H11L10 22L18.906 11.5H12L13 2Z" 
                  fill="#FFD600" stroke="#FF5722" stroke-width="2" 
                  class="lightning-dot" />
            <circle cx="12" cy="12" r="10" stroke="#FF5722" stroke-width="1" stroke-dasharray="3 2" fill="none" />
          </svg>
        `;

        const lightningMarker = new window.ymaps.Placemark(
          kolpinoCoords,
          {
            hintContent: 'Электрик Колпино',
            balloonContent: '<div style="font-family: \'Permanent Marker\', cursive; color: #FF5722;">Вызов электрика на дом в Колпино<br>+7 950 030 88 30</div>'
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(lightningIcon),
            iconImageSize: [60, 60],
            iconImageOffset: [-30, -30],
            iconContentOffset: [0, 0]
          }
        );

        map.geoObjects.add(lightningMarker);
        
        // Добавляем стилизацию для карты в граффити-стиле
        map.panes.get('ground').getElement().style.filter = 'grayscale(80%) contrast(120%) brightness(0.8)';
        
        // Добавляем подсветку рядом с маркером
        const circle = new window.ymaps.Circle(
          [kolpinoCoords, 500],
          {
            hintContent: 'Зона обслуживания'
          },
          {
            fillColor: "#FF572220",
            strokeColor: "#FF5722",
            strokeWidth: 2,
            strokeStyle: 'dash'
          }
        );
        
        map.geoObjects.add(circle);
      });
    }
  };

  return (
    <div className="rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 bg-graffiti/10 mix-blend-overlay z-10 pointer-events-none"></div>
      <div className="w-full h-[300px] sm:h-[400px] overflow-hidden" ref={mapRef}></div>
    </div>
  );
};

// Добавляем определение типа для window
declare global {
  interface Window {
    ymaps: any;
  }
}

export default LightningMap;
