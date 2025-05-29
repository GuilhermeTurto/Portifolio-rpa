
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      await emailjs.send(
        'service_93yvmst',
        'template_iiqcon9',
        formData,
        'CGOK9Bm6roXfH5LHC'
      );
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve. Obrigado pelo interesse!",
      });

      // Reset do formulário
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente por e-mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conte-me sobre seu projeto e vamos criar uma solução personalizada para suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Informações de Contato
                </CardTitle>
                <CardDescription>
                  Entre em contato através dos canais abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">devturto@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">(14) 99678-1303</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Bauru, SP</span>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-6 bg-primary rounded-lg text-white">
              <h3 className="font-semibold mb-3">Resposta Rápida</h3>
              <p className="text-sm text-blue-100">
                Normalmente respondo em até 24 horas. Para projetos urgentes, 
                entre em contato diretamente por WhatsApp.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Solicitar Orçamento
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e receba uma proposta personalizada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Tipo de Projeto *</Label>
                    <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de automação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-scraping">Web Scraping</SelectItem>
                        <SelectItem value="rpa">RPA (Robotic Process Automation)</SelectItem>
                        <SelectItem value="api-integration">Integração de APIs</SelectItem>
                        <SelectItem value="data-processing">Processamento de Dados</SelectItem>
                        <SelectItem value="email-automation">Automação de E-mails</SelectItem>
                        <SelectItem value="chatbot">Chatbot</SelectItem>
                        <SelectItem value="dashboard">Dashboard/Relatórios</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição Detalhada *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Descreva detalhadamente o que você precisa automatizar, quais sistemas estão envolvidos, qual o volume de dados, prazo esperado, etc."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-blue-900 text-white py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Solicitação
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
