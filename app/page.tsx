import React from 'react';
import { Phone, MessageCircle, Wrench, MapPin, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  // 장인어른 WhatsApp 번호 반영 (+52 56 4740 2442)
  const whatsappNumber = "525647402442"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20necesito%20ayuda%20con%20una%20reparación%20de%20plomería.`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              {/* Tool 대신 Wrench 사용 */}
              <Wrench className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-tight">OMAR Plomería</span>
          </div>
          <a 
            href={whatsappLink}
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Servicio Profesional de <span className="text-blue-400">Plomería</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10">
            Soluciones rápidas y garantizadas para su hogar o negocio. 
            Atención inmediata en emergencias.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Contactar por WhatsApp
            </a>
            <a 
              href={`tel:+${whatsappNumber}`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105"
            >
              <Phone size={24} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Reparaciones Generales", desc: "Fugas de agua, tuberías rotas y mantenimiento preventivo." },
            { title: "Instalación de Boilers", desc: "Instalación y reparación de calentadores de todas las marcas." },
            { title: "Destape de Drenajes", desc: "Limpieza profunda y desazolve de tuberías obstruidas." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">¿Por qué elegirnos?</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-center md:justify-start text-gray-700">
                <MapPin className="text-blue-600" /> Servicio en toda el área metropolitana
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start text-gray-700">
                <CheckCircle className="text-blue-600" /> Precios justos y presupuestos gratis
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start text-gray-700">
                <Phone className="text-blue-600" /> Disponibilidad inmediata
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white p-10 rounded-3xl shadow-xl border-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">¡Agenda tu visita!</h3>
            <p className="text-gray-600 mb-6">Presiona el botón de abajo para enviar un mensaje directo a Omar.</p>
            <a 
              href={whatsappLink}
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2026 OMAR Plomería - Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            <span className="flex items-center gap-1"><MapPin size={16} /> Ciudad de México</span>
          </div>
        </div>
      </footer>
    </div>
  );
}