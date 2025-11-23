import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // MUDANÇA: dark:bg-none remove o gradiente no modo escuro para usar o fundo preto
    <section id="inicio" className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-transparent dark:to-transparent dark:bg-none transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            
            {/* MUDANÇA: dark:text-white para o título ficar branco */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Olá, sou{" "}
              {/* Usei text-primary para puxar o verde configurado */}
              <span className="text-primary">Guilherme Turto</span>
            </h1>
            
            {/* MUDANÇA: dark:text-gray-300 para o texto de apoio ficar legível */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desenvolvedor com experiência em{" "}
              <span className="font-semibold text-primary">automações com Python</span>{" "}
              e RPA. Aqui compartilho meus projetos e estou disponível para{" "}
              <span className="font-semibold dark:text-white">trabalhos freelance ou fixos</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                // Ajustei o hover para combinar com o verde
                className="bg-primary hover:bg-primary/90 dark:hover:bg-white  text-white dark:hover:text-black px-8 py-3"
                onClick={() => scrollToSection('contato')}
              >
                Solicite um Orçamento
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-3 dark:bg-transparent"
                onClick={() => scrollToSection('projetos')}
              >
                Veja Meus Projetos
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* CARD 1 - MUDANÇA: Adicionei dark:bg-card e dark:border-gray-800 */}
              <div className="flex items-center justify-center bg-white dark:bg-card dark:border-gray-800 p-6 rounded-lg shadow-sm border transition-colors">
                <Code className="h-8 w-8 text-primary mr-4" />
                <div className="text-left">
                  {/* Títulos dos cards agora ficam brancos no escuro */}
                  <h3 className="font-semibold text-gray-900 dark:text-white">Python & RPA</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Automações eficientes</p>
                </div>
              </div>
              
              {/* CARD 2 - Mesmas mudanças */}
              <div className="flex items-center justify-center bg-white dark:bg-card dark:border-gray-800 p-6 rounded-lg shadow-sm border transition-colors">
                <Zap className="h-8 w-8 text-primary mr-4" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Soluções Rápidas</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Entrega no prazo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;