import React from 'react';
import { Clock, TrendingUp, Heart, Gift, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Benefits: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-holiday-red" />,
      title: "Faça Ainda Hoje",
      desc: "Receitas rápidas que não precisam de 3 dias de fermentação."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-holiday-green" />,
      title: "Receita à Prova de Erros",
      desc: "Medidas exatas para sua massa crescer e ficar fofinha sempre."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-holiday-gold" />,
      title: "Lucre Muito",
      desc: "Aprenda a precificar e fazer embalagens que valorizam seu produto em 3x."
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "Presenteie com Amor",
      desc: "Nada supera o carinho de um presente feito pelas suas mãos."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Encante a Família",
      desc: "Seja a estrela da ceia de Natal com elogios de todos."
    }
  ];

  return (
    <section className="py-16 bg-holiday-cream/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-holiday-dark mb-12">
          Por que este curso é para você?
        </h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4 bg-gray-50 p-3 rounded-full">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-holiday-dark">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToOffer} pulse={true}>
            Quero Começar Agora!
          </Button>
        </div>
      </div>
    </section>
  );
};