
import { Card } from '@/components/ui/card';
import { Smartphone, Tablet } from 'lucide-react';

export const ScreenshotsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-light to-background dark:from-purple-dark/10 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Interface Adaptável
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desfrute de uma experiência consistente em ambos os temas, com design moderno e intuitivo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tema Claro */}
          <Card className="p-8 bg-white border-2 border-purple-primary/20 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-purple-primary" />
              <h3 className="text-xl font-semibold text-gray-900">Tema Claro</h3>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-primary rounded-full"></div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-100 rounded-xl p-3 ml-6">
                  <div className="h-3 bg-purple-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-purple-300 rounded w-3/4"></div>
                </div>
                
                <div className="bg-gray-200 rounded-xl p-3 mr-6">
                  <div className="h-3 bg-gray-400 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-400 rounded w-2/3"></div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-3 bg-purple-primary rounded"></div>
                    <div className="h-2 bg-purple-primary rounded w-16"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-purple-primary h-2 rounded-full w-2/3"></div>
            </div>
          </Card>

          {/* Tema Escuro */}
          <Card className="p-8 bg-gray-900 border-2 border-purple-primary/20 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Tablet className="w-6 h-6 text-purple-primary" />
              <h3 className="text-xl font-semibold text-white">Tema Escuro</h3>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-primary rounded-full"></div>
                  <div>
                    <div className="h-3 bg-gray-500 rounded w-20 mb-1"></div>
                    <div className="h-2 bg-gray-600 rounded w-16"></div>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-900/40 rounded-xl p-3 ml-6">
                  <div className="h-3 bg-purple-400 rounded w-full mb-2"></div>
                  <div className="h-3 bg-purple-400 rounded w-3/4"></div>
                </div>
                
                <div className="bg-gray-700 rounded-xl p-3 mr-6">
                  <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-3 bg-purple-primary rounded"></div>
                    <div className="h-2 bg-purple-primary rounded w-16"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-purple-primary h-2 rounded-full w-2/3"></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
