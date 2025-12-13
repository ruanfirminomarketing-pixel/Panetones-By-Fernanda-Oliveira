import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-holiday-dark text-gray-400 py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Panetones de Sucesso. Todos os direitos reservados.</p>
        <p>Este site não faz parte do site do Facebook ou Facebook Inc.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};