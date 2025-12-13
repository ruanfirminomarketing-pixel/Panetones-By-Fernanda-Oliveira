import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle } from 'lucide-react';

const BUYERS = [
  { name: "Cátia", location: "Rio de Janeiro, RJ" },
  { name: "Maria Santos", location: "São Paulo, SP" },
  { name: "Lúcia Ferreira", location: "Belo Horizonte, MG" },
  { name: "Fátima Souza", location: "Salvador, BA" },
  { name: "Sueli Oliveira", location: "Curitiba, PR" },
  { name: "Ana Maria", location: "Porto Alegre, RS" },
  { name: "Rosana", location: "Recife, PE" },
  { name: "Cláudia", location: "Campinas, SP" },
  { name: "Márcia", location: "Niterói, RJ" },
  { name: "Sandra", location: "Goiânia, GO" },
  { name: "Regina", location: "Florianópolis, SC" },
  { name: "Vera Lúcia", location: "Vitória, ES" },
  { name: "Marta", location: "Fortaleza, CE" },
  { name: "Sônia", location: "Brasília, DF" }
];

const DELAYS = [3000, 5000, 8000]; // 3, 5, 8 segundos
const DISPLAY_DURATION = 4000; // Tempo que o toast fica visível (4 segundos)

export const SocialProofToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [buyer, setBuyer] = useState(BUYERS[0]);

  useEffect(() => {
    let timeoutId: number;

    const scheduleNext = () => {
      // Escolhe um delay aleatório entre 3s, 5s e 8s
      const nextDelay = DELAYS[Math.floor(Math.random() * DELAYS.length)];
      
      timeoutId = window.setTimeout(() => {
        // Escolhe um comprador aleatório
        const randomBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
        setBuyer(randomBuyer);
        setVisible(true);

        // Esconde após o tempo de exibição
        setTimeout(() => {
          setVisible(false);
          // Agenda o próximo ciclo
          scheduleNext();
        }, DISPLAY_DURATION);

      }, nextDelay);
    };

    // Inicia o ciclo
    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      className={`fixed top-20 right-4 z-50 w-[calc(100%-2rem)] md:w-80 transform transition-all duration-500 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl border-l-4 border-holiday-green p-4 flex items-center gap-4">
        <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">
            {buyer.name} <span className="font-normal text-gray-500">de {buyer.location}</span>
          </p>
          <p className="text-xs text-holiday-red font-semibold flex items-center gap-1 mt-1">
            <ShoppingBag className="w-3 h-3" />
            Acabou de comprar o curso
          </p>
        </div>
      </div>
    </div>
  );
};