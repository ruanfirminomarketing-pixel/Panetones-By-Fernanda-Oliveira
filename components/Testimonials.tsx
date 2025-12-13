import React from 'react';
import { Quote } from 'lucide-react';
import { Button } from './Button';

export const Testimonials: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    {
      name: "Maria Helena",
      age: 52,
      text: "Eu achava que panetone era coisa de padaria grande. Com a receita da aula, fiz meus primeiros 5 chocotones e vendi todos no trabalho do meu marido. Já tenho 12 encomendas pra semana que vem!",
      highlight: "Vendi tudo!"
    },
    {
      name: "Ana Cláudia",
      age: 45,
      text: "Nunca tive muito jeito na cozinha, mas queria economizar nos presentes. Fiz os mini-panetones gourmet e coloquei numa caixinha bonita. Minhas irmãs choraram de emoção. Valeu cada centavo.",
      highlight: "Economizei e emocionei"
    },
    {
      name: "Lúcia Ferreira",
      age: 60,
      text: "Minha aposentadoria estava curta e resolvi arriscar. O curso é muito claro, a professora explica com calma. Fiz R$ 800,00 só na primeira semana de dezembro. Estou muito feliz!",
      highlight: "Renda extra real"
    }
  ];

  return (
    <section className="py-20 bg-holiday-green text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
          Quem faz, recomenda!
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-holiday-gold opacity-50" />
              <div className="mb-4">
                <span className="bg-holiday-gold text-holiday-dark text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {review.highlight}
                </span>
              </div>
              <p className="text-gray-100 italic mb-6 text-lg">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-holiday-red to-orange-500 flex items-center justify-center font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-holiday-cream">{review.name}</h4>
                  <p className="text-xs text-gray-300">{review.age} anos</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToOffer} className="shadow-xl border-white bg-holiday-red hover:bg-red-700">
            Quero Começar Agora!
          </Button>
        </div>
      </div>
    </section>
  );
};