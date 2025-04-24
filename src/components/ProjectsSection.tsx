import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Чистые берега',
    description: 'Проект по очистке прибрежных зон рек и озер от мусора, высадке прибрежной растительности.',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 75,
  },
  {
    title: 'Зелёный город',
    description: 'Инициатива по озеленению городских пространств, созданию экологичных общественных зон.',
    image: 'https://images.unsplash.com/photo-1586878341523-7c82d8b2d468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 60,
  },
  {
    title: 'ЭкоШкола',
    description: 'Образовательная программа для детей и подростков о принципах устойчивого развития.',
    image: 'https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 90,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Наши проекты</h2>
            <p className="text-muted-foreground max-w-2xl">
              Текущие экологические инициативы, в которых вы можете принять участие и внести свой вклад в сохранение природы.
            </p>
          </div>
          <Button variant="link" className="text-primary mt-4 md:mt-0">
            Все проекты <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Прогресс</span>
                    <span>{project.progress}%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
