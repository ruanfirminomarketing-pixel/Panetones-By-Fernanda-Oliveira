import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from './Button';

export const Guarantee: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="inline-block p-4 bg-holiday-green/10 rounded-full mb-6">
          <Shield className="w-12 h-12 text-holiday-green" />
        </div>
        <h3 className="text-2xl font-bold font-serif text-holiday-dark mb-4">Garantia Incondicional de 7 Dias</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          O risco é todo nosso. Inscreva-se, assista às aulas e teste as receitas. Se por qualquer motivo você achar que não é para você, basta nos enviar um e-mail que devolvemos 100% do seu dinheiro. Sem perguntas e sem letras miúdas.
        </p>
        
        <Button onClick={scrollToOffer} variant="secondary">
          Quero Começar Agora!
        </Button>
      </div>
    </section>
  );
};