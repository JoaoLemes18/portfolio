import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Assistente de TI',
      company: 'Cliniprev Diagnósticos',
      location: 'Cuiabá, MT',
      period: 'Jun 2025 - Presente',
      current: true,
      description: 'Atuo como Assistente de TI com experiência em atendimento presencial e remoto, gestão de chamados via GLPI, manutenção de hardware, configuração de redes, servidores, backup, firewall, administração de Active Directory e gerenciamento de bancos de dados.',
      achievements: [
        'Gestão de chamados via GLPI com alta eficiência',
        'Configuração e manutenção de servidores e firewalls',
        'Administração de Active Directory e bancos de dados',
        'Trabalho com sistemas hospitalares como Clinux, PACS Carestream e Laborlis'
      ]
    },
    {
      id: 2,
      position: 'Estágio em Suporte',
      company: 'Tribunal de Justiça do Estado de Mato Grosso',
      location: 'Cuiabá, MT',
      period: 'Abr 2024 - Fev 2025',
      current: false,
      description: 'Atuei na Divisão de Compras com foco em suporte técnico e TI, garantindo o funcionamento adequado dos recursos tecnológicos, como computadores, internet e links. Prestei suporte técnico ao uso do Excel e do Pacote Office.',
      achievements: [
        'Suporte técnico em hardware, software e redes',
        'Manutenção e melhorias em sistemas internos',
        'Elaboração e manutenção de planilhas avançadas',
        'Redação de ofícios e suporte às demandas do setor'
      ]
    },
    {
      id: 3,
      position: 'Estagiário em Desenvolvimento Mobile',
      company: 'Compass UOL',
      location: 'Remoto',
      period: 'Mai 2023 - Nov 2023',
      current: false,
      description: 'Desenvolvimento mobile com React Native/TypeScript, criando aplicativos com interface intuitiva ao usuário. Participei da trilha de aprendizado React Native AWS Context com aprendizado excepcional.',
      achievements: [
        'Desenvolvimento de apps React Native com TypeScript',
        'Integração com Firebase e Redux para estado global',
        'Implementação de navegação e armazenamento local',
        'Uso de tecnologias como Axios, Context API e Expo'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minha <span className="text-primary">Experiência</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trajetória profissional e principais conquistas ao longo da carreira
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10">
                    {exp.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="p-6 border-0 card-shadow hover-lift">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar size={16} className="text-primary" />
                          <span className="text-sm font-medium text-primary">{exp.period}</span>
                          {exp.current && (
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              Atual
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                        
                        <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                          <div className="flex items-center space-x-1">
                            <Building size={14} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium mb-2">Principais conquistas:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;