import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão de Profissionais - Mobile',
      description: 'Aplicação Full Stack para gestão de profissionais, integrando cadastro, listagem, edição, inativação/reativação e filtros dinâmicos por especialidade com autenticação JWT.',
      image: project1,
      technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Expo'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Sistema Fasiclin - Gestão Hospitalar',
      description: 'Aplicação Full Stack para otimizar a gestão de pacientes, agendamentos e prontuários eletrônicos na clínica-escola, integrando frontend e backend em um fluxo unificado.',
      image: project2,
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Plataforma de Cursos - Full Stack',
      description: 'Plataforma completa para gestão de cursos técnicos com interfaces para alunos, professores e coordenadores. Frontend em React.js + TypeScript e backend em C# (.NET Core) com autenticação JWT e sistema de permissões.',
      image: project3,
      technologies: ['React', 'TypeScript', 'C#', '.NET Core', 'SQL Server', 'Entity Framework', 'JWT', 'Vite'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Apps Mobile - Compass UOL',
      description: 'Desenvolvimento de aplicativos mobile com React Native e TypeScript, focado em interfaces intuitivas e experiência do usuário excepcional.',
      image: project3,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Async Storage', 'Expo'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi e que demonstram minhas habilidades
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden border-0 card-shadow hover-lift">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github size={16} className="mr-2" />
                      Código
                    </Button>
                    <Button size="sm" className="hero-gradient text-white">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                    {project.id === 3 && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github size={16} className="mr-2" />
                        Backend
                      </Button>
                    )}
                    <Button size="sm" className="flex-1 hero-gradient text-white">
                      <ExternalLink size={16} className="mr-2" />
                      Ver projeto
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 fade-in">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Ver todos os projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;