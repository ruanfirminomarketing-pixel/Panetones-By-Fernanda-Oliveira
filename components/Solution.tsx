import React from 'react';
import { BookOpen, Video, Smartphone, Award, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Solution: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-holiday-red font-bold tracking-widest uppercase text-sm">Apresentamos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-holiday-dark mt-2">
            Curso Panetones de Sucesso
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            O guia definitivo com vídeo-aulas e apostilas para você dominar a arte do panetone artesanal, do clássico ao gourmet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Visual Representation of Product - Image Grid 2x2 */}
          <div className="relative">
             <div className="absolute -inset-4 bg-holiday-gold/20 rounded-full blur-xl"></div>
             
             <div className="grid grid-cols-2 gap-3 relative">
                {/* Imagem 1: Panetone de Chocolate */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white aspect-square">
                   <img 
                    src="https://images.unsplash.com/photo-1606913084603-3e7702b01627?auto=format&fit=crop&w=600&q=80" 
                    alt="Panetone de Chocolate Trufado" 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-bold text-center">Chocolate Trufado</p>
                  </div>
                </div>
                
                {/* Imagem 2: Panetone Tradicional */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1609172466030-038222d8616c?auto=format&fit=crop&w=600&q=80" 
                    alt="Panetone Tradicional de Frutas" 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-bold text-center">Clássico de Frutas</p>
                  </div>
                </div>

                {/* Imagem 3: Panetone de Pistache */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white aspect-square">
                   <img 
                    src="https://images.unsplash.com/photo-1627044037568-15d2a938c4c7?auto=format&fit=crop&w=600&q=80" 
                    alt="Panetone de Pistache" 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-bold text-center">Pistache Gourmet</p>
                  </div>
                </div>

                {/* Imagem 4: Panetone com Morango */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-white aspect-square">
                   <img 
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" 
                    alt="Panetone com Morango" 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-bold text-center">Ninho com Morango</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-holiday-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Video className="w-6 h-6 text-holiday-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-holiday-dark mb-2">Vídeo Aula Completa: A Base Perfeita</h3>
                <p className="text-gray-600">Aprenda o ponto exato da massa, como sovar sem cansar e o segredo da fermentação para aquele panetone que desfia.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-holiday-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-holiday-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-holiday-dark mb-2">+50 Receitas Tradicionais e Gourmet</h3>
                <p className="text-gray-600">
                  Do clássico de frutas ao <strong>Pistache, Oreo, Ninho com Nutella, Red Velvet</strong> e muito mais. Sabores que vendem sozinhos!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-holiday-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-holiday-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-holiday-dark mb-2">100% Online e Flexível</h3>
                <p className="text-gray-600">Assista do seu celular, tablet ou computador. Pause, volte e assista quantas vezes quiser. Acesso Vitalício.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-holiday-dark mb-2">Didática Simples</h3>
                <p className="text-gray-600">Tudo explicado tim-tim por tim-tim. Ideal para iniciantes totais.</p>
              </div>
            </div>

            <div className="pt-6">
              <Button onClick={scrollToOffer} className="w-full md:w-auto text-center justify-center">
                Quero Começar Agora! <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};