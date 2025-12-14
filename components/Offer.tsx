import React from 'react';
import { Button } from './Button';
import { Timer, ArrowRight, CreditCard } from 'lucide-react';

export const Offer: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = 'https://pay.kiwify.com.br/X065UOQ';
  };

  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-white to-holiday-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-holiday-gold">
          <div className="bg-holiday-red text-white py-4 px-6 text-center font-bold uppercase tracking-widest text-sm md:text-base flex justify-center items-center gap-2">
            <Timer className="w-5 h-5 animate-pulse" />
            Oferta Válida Somente Hoje
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl text-gray-600 mb-2">Leve todo o pacote:</h3>
            <p className="text-gray-500 text-sm mb-6">Vídeo Aulas + Apostila 50 Receitas + Acesso Vitalício</p>
            
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <span className="text-gray-400 line-through text-xl">De R$ 97,00</span>
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-2xl font-bold">Por apenas</span>
                <span className="text-5xl md:text-7xl font-bold text-holiday-green">R$ 17,90</span>
              </div>
              <span className="text-sm text-holiday-red font-semibold bg-red-50 px-3 py-1 rounded-full">
                 Pagamento Único sem juros
              </span>
            </div>

            <Button 
              onClick={handleCheckout}
              fullWidth={true} 
              pulse={true} 
              className="md:max-w-md mx-auto mb-6 text-xl md:text-2xl py-6"
            >
              QUERO APRENDER AGORA! <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-6">
              <span className="flex items-center gap-1"><CreditCard className="w-3 h-3"/> Compra Segura</span>
              <span className="flex items-center gap-1">💳 Acesso Imediato</span>
            </div>

            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Ao clicar no botão, você será redirecionada para nossa plataforma de pagamento 100% segura. O acesso chega no seu e-mail em minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};