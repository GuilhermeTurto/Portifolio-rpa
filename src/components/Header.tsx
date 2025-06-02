
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            DevTurto
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="/cv-guilherme-turto.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Baixar CV
              </a>
            </Button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white w-fit"
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar CV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
