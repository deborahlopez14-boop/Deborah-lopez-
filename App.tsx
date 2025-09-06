
import React, { useState } from 'react';
import { Timeline } from './components/Timeline';
import type { Eon } from './types';
import { PlanetIcon, LinkIcon } from './components/Icons';
import { OriginStages } from './components/OriginStages';

const stagesData = [
  { 
    groupTitle: "Evolución Química (Prebiótica)",
    stages: [
      { title: 'Origen de la tierra y la atmósfera primitivas.' },
      { title: 'Formación de amoníaco, agua y metano.' },
      { title: 'Síntesis de compuestos orgánicos simples.' },
      { title: 'Compuestos orgánicos complejos.' },
      { title: 'Síntesis de ácidos nucleicos.' },
    ]
  },
  {
    groupTitle: "Origen Celular",
    stages: [
      { title: 'Formación de protobiontes.' },
      { title: 'Primeras células.' },
    ]
  },
  {
    groupTitle: "Evolución Biológica",
    stages: [
      { title: 'Evolución biológica.' },
    ]
  }
];

const timelineData: Eon[] = [
  {
    name: "EÓN HADEICO",
    timeRange: "4.600 - 4.000 Ma",
    description: "Cubre el período de enfriamiento del planeta, la formación de la corteza terrestre y la condensación que dio origen a los océanos.",
    color: "text-rose-500",
    dotColor: "bg-rose-500",
    borderColor: "border-rose-500/30",
    shadowColor: "hover:shadow-rose-400/30",
    arrowColor: "md:border-r-white",
    events: [
      { 
        time: "4.600 Ma", 
        events: [
          { icon: "planet", title: "Formación de la Tierra", description: "Inicio del Eón Hadeico con la formación del planeta a partir del disco protoplanetario." }
        ]
      },
      { 
        time: "4.000 Ma", 
        events: [
          { icon: "bacteria", title: "Origen de la vida", description: "Aparecen las primeras formas de vida en los océanos primordiales." },
          { icon: "bacteria", title: "Organismos fermentadores (Clostridium)", description: "Primeras formas de vida que obtenían energía de la materia orgánica sin oxígeno mediante fermentación." },
          { icon: "bacteria", title: "Bacterias quimioautótrofas (Desulfovibrio)", description: "Organismos que obtenían energía de reacciones químicas inorgánicas, sin luz solar ni oxígeno." }
        ]
      }
    ]
  },
  {
    name: "EÓN ARQUEANO",
    timeRange: "4.000 - 2.500 Ma",
    description: "Se terminan de formar los continentes y océanos. Se origina y diversifica la vida, aunque los registros fósiles de esta época son escasos.",
    color: "text-amber-500",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-500/30",
    shadowColor: "hover:shadow-amber-400/30",
    arrowColor: "md:border-r-white",
    arrowColorLeft: "md:border-l-white",
    events: [
      { 
        time: "Hasta 3.700 Ma", 
        events: [
          { icon: "fossil", title: "Estromatolitos", description: "Estructuras microbianas estratificadas, las primeras evidencias fósiles de vida." }
        ]
      },
      { 
        time: "3.700 Ma (aprox.)", 
        events: [
          { icon: "dna", title: "Reproducción parasexual (conjugación)", description: "Intercambio genético entre bacterias, aumentando la variabilidad." },
          { icon: "bacteria", title: "Bacterias fotoautótrofas del azufre", description: "Utilizaban la luz solar para producir energía sin generar oxígeno." },
          { icon: "oxygen", title: "Cianobacterias (Oscillatoria)", description: "Desarrollan la fotosíntesis oxigénica, liberando oxígeno al ambiente por primera vez." }
        ]
      },
      { 
        time: "3.500 Ma (aprox.)", 
        events: [
          { icon: "fossil", title: "Formación de hierro bandeado", description: "Como consecuencia de la atmósfera con oxígeno, el O2 liberado por cianobacterias reacciona con el hierro de los océanos, formando depósitos." }
        ]
      }
    ]
  },
  {
    name: "EÓN PROTEROZOICO",
    timeRange: "2.500 - 542 Ma",
    color: "text-sky-500",
    dotColor: "bg-sky-500",
    borderColor: "border-sky-500/30",
    shadowColor: "hover:shadow-sky-400/30",
    arrowColor: "md:border-r-white",
    arrowColorLeft: "md:border-l-white",
    events: [
      { 
        time: "2.500 - 1.800 Ma (aprox.)", 
        events: [
          { icon: "oxygen", title: "Gran Oxidación", description: "Acumulación masiva de oxígeno en la atmósfera y océanos, cambiando el planeta para siempre." },
          { icon: "bacteria", title: "Bacterias aeróbicas", description: "Organismos que evolucionaron para usar el oxígeno en la respiración para obtener mucha más energía." }
        ]
      },
      { 
        time: "2.000 - 1.500 Ma (aprox.)", 
        events: [
          { icon: "cell", title: "Célula eucariota (desde procariota ancestral)", description: "Aparición de células con núcleo y orgánulos a partir de un ancestro procariota." },
          { icon: "cell", title: "Célula con mitocondria (Endosimbiosis)", description: "Una célula primitiva engulle bacterias aeróbicas, originando las mitocondrias, clave para la respiración." },
          { icon: "cell", title: "Célula con plastos (Endosimbiosis)", description: "Algunas células engullen cianobacterias, dando lugar a los plastos (cloroplastos) y a la fotosíntesis eucariota." },
          { icon: "cell", title: "Diversificación Eucariota", description: "Se establecen linajes de eucariotas heterótrofos (ancestros de animales) y fotosintéticos (ancestros de algas)." }
        ]
      },
      { 
        time: "1.200 Ma (aprox.)", 
        events: [
          { icon: "dna", title: "Mitosis", description: "Proceso de división celular que asegura la distribución equitativa del material genético en células eucariotas." },
          { icon: "dna", title: "Origen de la meiosis y reproducción sexual", description: "Desarrollo de la reproducción sexual, aumentando drásticamente la diversidad genética." }
        ]
      },
      { 
        time: "PERÍODO EDIACÁRICO (635 - 542 Ma)", 
        events: [
          { icon: "multicellular", title: "Fauna pluricelular de Ediacara", description: "Surgen los primeros organismos multicelulares complejos y de cuerpo blando, diversificando la vida masivamente." }
        ]
      }
    ]
  }
];


const App: React.FC = () => {
  const [shareText, setShareText] = useState('Compartir');
  const [showCopyFallback, setShowCopyFallback] = useState(false);

  const handleShareClick = () => {
    // Check if Clipboard API is available in a secure context
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShareText('¡Enlace copiado!');
        setShowCopyFallback(false);
        setTimeout(() => {
          setShareText('Compartir');
        }, 2500);
      }).catch(err => {
        console.error('Error al copiar con la API: ', err);
        setShowCopyFallback(true); // Show fallback on API error
      });
    } else {
      // If API is not available, show the fallback immediately
      console.warn('La API del portapapeles no está disponible. Mostrando fallback.');
      setShowCopyFallback(true);
    }
  };
  
  const handleUrlSelect = (event: React.MouseEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).select();
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen text-slate-800">
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-screen-xl">
          <header className="text-center mb-12 md:mb-20">
              <div 
                  className="flex justify-center items-center gap-4 mb-4 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: '200ms' }}
              >
                  <PlanetIcon className="w-12 h-12 text-sky-500" />
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-rose-500">
                    Historia de la Tierra
                  </h1>
              </div>
              <p 
                  className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto opacity-0 animate-fadeInUp"
                  style={{ animationDelay: '400ms' }}
              >
                  Un viaje a través del Precámbrico para descubrir el origen de la vida y los eventos clave que dieron forma a nuestro planeta.
              </p>
          </header>
          <main className="grid md:grid-cols-[300px_1fr] gap-8 lg:gap-16">
            <aside className="hidden md:block">
              <div className="sticky top-8">
                <OriginStages stageGroups={stagesData} />
              </div>
            </aside>
            <div className="md:col-start-2">
              <Timeline eons={timelineData} />
            </div>
          </main>
          <footer className="text-center mt-16 text-slate-500 border-t border-slate-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>Creado por <span className="font-semibold">Deborah Lopez</span> con fines educativos.</p>
              <div className="relative">
                <button
                  onClick={handleShareClick}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  aria-label="Copiar enlace para compartir"
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>{shareText}</span>
                </button>
                {showCopyFallback && (
                  <div className="absolute bottom-full right-0 mb-2 w-72 p-4 bg-white border border-slate-300 rounded-lg shadow-xl z-20 text-left animate-fadeInUp">
                    <p className="text-sm font-medium text-slate-700 mb-2">Copiar enlace manualmente:</p>
                    <input
                      type="text"
                      value={window.location.href}
                      readOnly
                      onClick={handleUrlSelect}
                      className="w-full px-2 py-1 text-xs text-slate-800 bg-slate-100 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                     <button
                      onClick={() => setShowCopyFallback(false)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                      aria-label="Cerrar"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
