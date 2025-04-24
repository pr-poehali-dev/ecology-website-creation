import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'Чистые берега',
    description: 'Проект по очистке прибрежных зон рек и озер от мусора, высадке прибрежной растительности и восстановлению экосистем водоемов. Мы регулярно организуем волонтерские выезды, где каждый может внести свой вклад в сохранение чистоты наших водных ресурсов.',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 75,
    participants: 120,
    location: 'Реки и озера центрального региона',
    startDate: 'Март 2023',
  },
  {
    id: 2,
    title: 'Зелёный город',
    description: 'Инициатива по озеленению городских пространств, созданию экологичных общественных зон и внедрению принципов устойчивого развития в городскую среду. Мы работаем с местными властями и сообществами для создания более зеленых и здоровых городских пространств.',
    image: 'https://images.unsplash.com/photo-1586878341523-7c82d8b2d468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 60,
    participants: 85,
    location: 'Городские парки и скверы',
    startDate: 'Июнь 2023',
  },
  {
    id: 3,
    title: 'ЭкоШкола',
    description: 'Образовательная программа для детей и подростков о принципах устойчивого развития, экологической ответственности и взаимодействии человека с природой. Наши интерактивные занятия помогают воспитать новое поколение экологически сознательных граждан.',
    image: 'https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 90,
    participants: 210,
    location: 'Школы и образовательные центры',
    startDate: 'Сентябрь 2022',
  },
  {
    id: 4,
    title: 'Переработка пластика',
    description: 'Программа по сбору и переработке пластиковых отходов в полезные товары, от строительных материалов до предметов искусства. Мы устанавливаем пункты сбора пластика и сотрудничаем с производственными компаниями для внедрения технологий переработки.',
    image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 45,
    participants: 65,
    location: 'Пункты сбора по всему городу',
    startDate: 'Январь 2024',
  },
  {
    id: 5,
    title: 'Лесовосстановление',
    description: 'Проект по восстановлению лесных массивов, пострадавших от пожаров и вырубки. Мы организуем массовые высадки деревьев с привлечением волонтеров, а также осуществляем последующий мониторинг и уход за молодыми посадками.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 65,
    participants: 150,
    location: 'Лесные массивы региона',
    startDate: 'Апрель 2023',
  },
  {
    id: 6,
    title: 'Экотуризм',
    description: 'Развитие экологического туризма в уникальных природных местах региона с минимальным воздействием на окружающую среду. Мы разрабатываем экотропы, обучаем гидов и содействуем формированию ответственного отношения к природе у туристов.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    progress: 30,
    participants: 40,
    location: 'Особо охраняемые природные территории',
    startDate: 'Июль 2023',
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <Link to="/" className="inline-flex items-center text-primary hover:underline mb-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Назад на главную
              </Link>
              <h1 className="text-4xl font-bold mb-2">Экологические проекты</h1>
              <p className="text-muted-foreground max-w-3xl">
                Мы реализуем различные инициативы, направленные на защиту окружающей среды,
                восстановление экосистем и формирование экологической культуры.
              </p>
            </div>
            <Button className="mt-4 md:mt-0" variant="default">
              Предложить проект
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map(project => (
              <div key={project.id} className="bg-background rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4 space-y-1">
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Прогресс</span>
                      <span>{project.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground block">Участников:</span>
                      <span className="font-medium">{project.participants}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Начало:</span>
                      <span className="font-medium">{project.startDate}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground block">Локация:</span>
                      <span className="font-medium">{project.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Подробнее о проекте
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
