
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
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Olá, sou{" "}
              <span className="text-primary">Guilherme Turto</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Desenvolvedor com experiência em{" "}
              <span className="font-semibold text-primary">automações com Python</span>{" "}
              e RPA. Aqui compartilho meus projetos e estou disponível para{" "}
              <span className="font-semibold">trabalhos freelance ou fixos</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-primary hover:bg-blue-900 text-white px-8 py-3"
                onClick={() => scrollToSection('contato')}
              >
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                onClick={() => scrollToSection('projetos')}
              >
                Veja Meus Projetos
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm border">
                <Code className="h-8 w-8 text-primary mr-4" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Python & RPA</h3>
                  <p className="text-gray-600 text-sm">Automações eficientes</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm border">
                <Zap className="h-8 w-8 text-primary mr-4" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Soluções Rápidas</h3>
                  <p className="text-gray-600 text-sm">Entrega no prazo</p>
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
