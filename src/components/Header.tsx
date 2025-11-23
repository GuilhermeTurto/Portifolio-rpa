import { Button } from "@/components/ui/button";
import { Download, Menu, X, Moon, Sun } from "lucide-react"; 
import { useState, useEffect } from "react";

// Logo para o modo CLARO
import logoDevTurto from '../assets/logo.png'; 

// Logo para o modo ESCURO. Certifique-se que este arquivo existe na pasta assets.
import logoDevTurtoDark from '../assets/logo-dark.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 bg-white dark:bg-background backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* MUDANÇA AQUI: O src da imagem agora muda baseado no tema */}
          <img 
            src={theme === 'dark' ? logoDevTurtoDark : logoDevTurto}
            alt="Logo DevTurto" 
            className="h-11 w-auto transition-all" 
          />
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
            >
              Contato
            </button>
            
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-gray-900 dark:text-white">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

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

          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-gray-700 dark:text-gray-200">
               {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <button
              className="p-2 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-left py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
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