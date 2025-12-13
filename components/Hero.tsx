import React from 'react';
import { Button } from './Button';
import { Star, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-holiday-green text-white overflow-hidden pb-12 pt-8 md:pt-16">
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/431/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-holiday-red/20 border border-holiday-gold/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
          <Star className="w-4 h-4 text-holiday-gold fill-current" />
          <span className="text-sm font-medium text-holiday-cream">Método 100% Comprovado</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-holiday-cream drop-shadow-md">
          Faça Panetones <span className="text-holiday-gold">Profissionais</span> na Sua Cozinha Ainda Hoje
        </h1>

        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-sans font-light text-gray-100">
          Mesmo que você nunca tenha feito pão na vida. Lucre neste Natal ou encante sua família com receitas fáceis, rápidas e irresistíveis.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button onClick={scrollToOffer} pulse={true} className="shadow-holiday-gold/20 shadow-xl">
            Quero Começar Agora!
          </Button>
          <p className="text-sm opacity-80 mt-2">✨ Acesso imediato e vitalício</p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
            <CheckCircle className="w-5 h-5 text-holiday-gold" />
            <span>Sem equipamentos caros</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
            <CheckCircle className="w-5 h-5 text-holiday-gold" />
            <span>Passo a passo em vídeo</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
            <CheckCircle className="w-5 h-5 text-holiday-gold" />
            <span>+50 Receitas Gourmet</span>
          </div>
        </div>
      </div>
    </section>
  );
};