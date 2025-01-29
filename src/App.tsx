import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "El Salvador",
    content: (
      <div className="space-y-4">
        <img 
          src="https://wwwnc.cdc.gov/travel/images/map-el-salvador.png" 
          alt="El Salvador"
          className="w-full h-64 object-cover rounded-lg"
        />
        <p className="text-xl">¡Bienvenidos a mi informe sobre El Salvador!</p>
        <img 
          src="https://flagcdn.com/sv.svg"
          alt="Bandera de El Salvador" 
          className="w-48 mx-auto"
        />
      </div>
    )
  },
  {
    title: "Ciudad Capital",
    content: (
      <div className="space-y-4">
        <img 
src="https://cdn.getyourguide.com/img/tour/47988c7e5b8bbf0af11e62a6ff4aefeea5a7f6de61e1c3bbe1389006ef589164.jpg/98.jpg"
          alt="San Salvador"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold">San Salvador</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>La ciudad más grande de El Salvador</li>
          <li>Ubicada en el Valle del Volcán Boquerón</li>
          <li>Hogar de aproximadamente 2.4 millones de personas</li>
        </ul>
      </div>
    )
  },
  {
    title: "Comida Tradicional",
    content: (
      <div className="space-y-4">
        <img 
          src="https://images.ctfassets.net/vm4sgchw7ymt/6BR90SQYU2NSvZr33yecnW/12a5a3ce5c4eee2aafadb96a2c81deba/pupases-el-salvador-popular-food.jpg"
          alt="Pupusas"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold">Platillos Famosos</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Pupusas - tortillas rellenas</li>
          <li>Yuca Frita - yuca frita con curtido</li>
          <li>Tamales</li>
          <li>Quesadilla Salvadoreña - pastel de queso dulce</li>
        </ul>
      </div>
    )
  },
  {
    title: "Sitios Turísticos",
    content: (
      <div className="space-y-4">
        <img 
          src="https://yucatanmagazine.com/wp-content/uploads/2022/01/Tazumal001.jpg"
          alt="Ruinas de Tazumal"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold">Atracciones Populares</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Ruinas Mayas de Tazumal</li>
          <li>Parque Nacional El Imposible</li>
          <li>Lago de Coatepeque</li>
          <li>Bosque Nuboso de Montecristo</li>
        </ul>
      </div>
    )
  },
  {
    title: "Personas Famosas",
    content: (
      <div className="space-y-4">
        <img 
          src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_3x/f_auto/mls-lag-prd/vlrxle0fl4npyb0qcryf.jpg" 
          alt="Personas Famosas"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-bold">Arte y Cultura</h3>
            <ul className="list-disc list-inside">
              <li>Salvador Salazar Arrué (escritor)</li>
              <li>Fernando Llort (artista)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Deportes</h3>
            <ul className="list-disc list-inside">
              <li>Jorge "Mágico" González (fútbol)</li>
              <li>Mauricio Cienfuegos (fútbol)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Fechas Importantes",
    content: (
      <div className="space-y-4">
        <img 
          src="https://i0.wp.com/elsalvadorinenglish.com/wp-content/uploads/2022/09/Cover-Wordpress-23.png?w=1170&ssl=1" 
          alt="Personas Famosas"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="space-y-2">
          <h3 className="font-bold">Línea de Tiempo Histórica</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>1821 - Independencia de España</li>
            <li>1841 - Independencia total</li>
            <li>1992 - Fin de la Guerra Civil</li>
            <li>2001 - Adopción del Dólar Estadounidense</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Productos",
    content: (
      <div className="space-y-4">
        <img 
          src="https://assets.bonappetit.com/photos/57c5d0e36a6acdf3485dfb2b/16:9/w_2240,c_limit/3717295073_f5ae257d71_o.jpg" 
          alt="Personas Famosas"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold">Principales Exportaciones</h3>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Café</li>
            <li>Azúcar</li>
            <li>Textiles</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Electrónicos</li>
            <li>Medicamentos</li>
            <li>Productos plásticos</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Deportes",
    content: (
      <div className="space-y-4">
        <img 
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&h=600"
          alt="Estadio de fútbol"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold">Deportes Populares</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Fútbol (Deporte Nacional)</li>
          <li>Surf</li>
          <li>Béisbol</li>
          <li>Baloncesto</li>
        </ul>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
            {slides[currentSlide].title}
          </h1>
          
          <div className="relative">
            <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {slides[currentSlide].content}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="Diapositiva anterior"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="Siguiente diapositiva"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;