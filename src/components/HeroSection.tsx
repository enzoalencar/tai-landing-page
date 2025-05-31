
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Zap, Target } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-light to-white dark:from-purple-dark/20 dark:to-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Converse e Aprenda{' '}
              <span className="text-purple-primary">Inglês</span>{' '}
              sobre o que Você Ama!
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Escolha um tema, receba a primeira mensagem e mergulhe em diálogos naturais — sem precisar pensar no assunto.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Nosso aplicativo usa assuntos do dia a dia para tornar a prática de inglês espontânea e motivadora. 
              Após clicar em "Começar", você escolhe um tema e automaticamente recebe o contexto perfeito para iniciar uma conversa natural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button 
                size="lg" 
                className="bg-purple-primary hover:bg-purple-primary/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Baixar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 gradient-purple rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-primary rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">AI English Tutor</h3>
                      <p className="text-sm text-muted-foreground">Online agora</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-primary/10 dark:bg-purple-primary/20 rounded-2xl p-4 ml-8">
                    <p className="text-sm text-foreground">
                      Imagine que você está em uma cafeteria londrina. O barista pergunta sobre sua bebida favorita. Como você responderia?
                    </p>
                  </div>
                  
                  <div className="bg-muted rounded-2xl p-4 mr-8">
                    <p className="text-sm text-foreground">
                      I'd like a cappuccino with oat milk, please!
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Zap className="w-4 h-4 text-purple-primary" />
                      <span className="text-xs text-purple-primary font-medium">Excelente gramática!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
