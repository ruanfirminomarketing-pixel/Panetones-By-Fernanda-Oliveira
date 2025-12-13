import React from 'react';
import { XCircle } from 'lucide-react';
import { Button } from './Button';

export const Empathy: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-holiday-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-holiday-green mb-10">
          Você já se sentiu assim?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-400">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Cansou de levar a mesma coisa em todo Natal e deseja surpreender a sua família, mas não sabe como?</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-400">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Tem medo de gastar ingredientes caros e a massa solar ou ficar seca?</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-400">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Acha que precisa de uma batedeira planetária profissional para começar?</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-400">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Gostaria de uma renda extra no fim de ano, mas sente que "não leva jeito" para vendas?</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-holiday-gold/30">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-holiday-green text-xl">Nós te entendemos.</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Muitas mulheres deixam de lucrar ou de criar memórias incríveis com a família porque acham que panetone é um "bicho de sete cabeças".
            </p>
            <p className="text-gray-800 font-semibold italic">
              Mas a verdade é que, com a técnica certa, é mais fácil do que fazer um bolo de cenoura. E nós vamos te provar.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={scrollToOffer} variant="secondary">
            Quero Começar Agora!
          </Button>
        </div>
      </div>
    </section>
  );
};