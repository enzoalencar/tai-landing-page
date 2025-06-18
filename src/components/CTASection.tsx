
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-primary to-purple-primary/80 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar sua prática de inglês em algo divertido e efetivo?
        </h2>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Experimente grátis agora mesmo! Basta escolher um tema, clicar e conversar — o resto é com a IA.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          <a href="https://drive.google.com/drive/folders/1FlMZQgQ0wbOleMwaZrBja8QhEBvXnTzn?hl=pt-br" target="_blank" rel="noopener noreferrer" >
            <Button 
              size="lg"
              className="bg-white text-purple-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar APK
            </Button>
          </a>
        </div>
        
        <p className="mt-8 text-lg opacity-80">
          Cadastro rápido • Sem cartão de crédito • Comece em 30 segundos
        </p>
      </div>
    </section>
  );
};
