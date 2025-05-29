
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações Principais */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">DevPython</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialista em automações Python e RPA, transformando processos manuais 
              em soluções eficientes e escaláveis.
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const element = document.getElementById('inicio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projetos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se Comigo</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/guilherme-turto-44aa0a168 "
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/GuilhermeTurto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:devturto@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              <strong>E-mail:</strong> devturto@gmail.com<br />
              <strong>WhatsApp:</strong> (14) 99678-1303
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} DevPython. Todos os direitos reservados. 
            Desenvolvido com React e TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
