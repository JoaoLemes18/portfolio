import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Desenvolvedor Full Stack Sênior',
      company: 'TechCorp',
      location: 'São Paulo, SP',
      period: '2022 - Presente',
      current: true,
      description: 'Desenvolvimento de aplicações web complexas utilizando React, Node.js e tecnologias cloud. Liderança técnica de equipe de 5 desenvolvedores.',
      achievements: [
        'Migração de sistema legado para arquitetura moderna',
        'Redução de 40% no tempo de carregamento das aplicações',
        'Implementação de CI/CD e melhores práticas DevOps'
      ]
    },
    {
      id: 2,
      position: 'Desenvolvedor Full Stack',
      company: 'Startup Inovadora',
      location: 'Rio de Janeiro, RJ',
      period: '2021 - 2022',
      current: false,
      description: 'Desenvolvimento de MVP e features para startup de fintech. Trabalho em ambiente ágil com deploy contínuo.',
      achievements: [
        'Desenvolvimento de API REST escalável',
        'Criação de dashboard analytics em tempo real',
        'Integração com APIs de pagamento'
      ]
    },
    {
      id: 3,
      position: 'Desenvolvedor Frontend',
      company: 'Agência Digital',
      location: 'Belo Horizonte, MG',
      period: '2020 - 2021',
      current: false,
      description: 'Criação de interfaces modernas e responsivas para diversos clientes. Foco em performance e experiência do usuário.',
      achievements: [
        'Desenvolvimento de 15+ websites responsivos',
        'Otimização de SEO e Core Web Vitals',
        'Implementação de animações e microinterações'
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