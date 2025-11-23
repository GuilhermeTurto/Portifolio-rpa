
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Database, ScanSearch, BarChart3, Mail, Workflow } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bot de Emissão de Guias PDF",
      description: "Automação completa para geração de guias em PDF utilizando Selenium WebDriver. Sistema capaz de processar centenas de documentos automaticamente.",
      icon: FileText,
      technologies: ["Python", "Selenium", "ReportLab", "Pandas"],
      category: "Web Automation"
    },
    {
      title: "Pesquisa e Extração de Dados",
      description: "Sistema que realiza pesquisas automáticas na web, captura informações relevantes de sites públicos ou privados, organiza os dados em planilhas e envia relatórios estruturados. Ideal para monitoramento de preços, concorrentes, cotações, notícias e muito mais.",
      icon: ScanSearch,
      technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas"],
      category: "Web Scraping"
    },
    {
      title: "Extração de Dados via API",
      description: "Sistema de integração que coleta dados de APIs externas e popula planilhas Excel automaticamente, com tratamento de erros e logs detalhados.",
      icon: Database,
      technologies: ["Python", "Requests", "openpyxl", "SQLite"],
      category: "Data Integration"
    },
    {
      title: "Dashboard de Vendas",
      description: "Painel interativo que consolida dados de vendas de múltiplas fontes, gerando relatórios automatizados e insights em tempo real.",
      icon: BarChart3,
      technologies: ["Python", "Dash", "Plotly", "PostgreSQL"],
      category: "Data Visualization"
    },
    {
      title: "Automatização de E-mails",
      description: "Sistema que envia relatórios personalizados por e-mail de forma automática, com templates dinâmicos e agendamento flexível.",
      icon: Mail,
      technologies: ["Python", "SMTP", "Jinja2", "Schedule"],
      category: "Email Automation"
    },
    {
      title: "Entrada de Dados em Sistemas",
      description: "Robô desenvolvido para inserir dados automaticamente em portais e sistemas internos, como emissão de NFs, guias de pagamento, cadastros e preenchimento de formulários complexos. Reduz erros humanos e aumenta a produtividade em tarefas repetitivas.",
      icon: Workflow,
      technologies: ["Python", "Selenium", "PyAutoGUI", "SQLite"],
      category: "RPA (Robotic Process Automation)"
    }
  ];

  return (
    <section id="projetos" className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções em automação que entregam resultados reais para empresas de todos os tamanhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Interessado em ver mais detalhes ou discutir um projeto similar?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
