
import { Coffee, Plane, Briefcase, MessageSquare, Brain, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const themes = [
  {
    icon: Coffee,
    title: 'Café',
    description: 'Pratique conversas em cafeterias, restaurantes e situações gastronômicas',
    color: 'text-purple-primary'
  },
  {
    icon: Plane,
    title: 'Viagens',
    description: 'Aprenda vocabulário essencial para aeroportos, hotéis e turismo',
    color: 'text-purple-primary'
  },
  {
    icon: Briefcase,
    title: 'Negócios',
    description: 'Desenvolva habilidades para reuniões, apresentações e networking',
    color: 'text-purple-primary'
  }
];

const features = [
  {
    icon: MessageSquare,
    title: 'Início Automático',
    description: 'O bot quebra o gelo ao enviar um cenário e pergunta inicial, eliminando qualquer bloqueio criativo.'
  },
  {
    icon: Brain,
    title: 'Feedback em Tempo Real',
    description: 'Correções sutis de gramática e sugestões de vocabulário aparecem em balões roxos, sem interromper o fluxo.'
  },
  {
    icon: TrendingUp,
    title: 'Progressão Personalizada',
    description: 'O sistema ajusta a dificuldade das próximas perguntas, criando um ciclo de aprendizado contínuo.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Funcionalidades Principais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma experiência completa de aprendizado que se adapta ao seu ritmo e interesses
          </p>
        </div>

        {/* Temas Pré-Definidos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Temas Pré-Definidos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-light dark:bg-purple-dark/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-primary group-hover:text-white transition-all duration-300">
                    <theme.icon className={`w-8 h-8 ${theme.color} group-hover:text-white`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{theme.title}</h4>
                  <p className="text-muted-foreground">{theme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Outras Funcionalidades */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-6 bg-purple-light dark:bg-purple-dark/20 rounded-xl flex items-center justify-center group-hover:bg-purple-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-purple-primary group-hover:text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
