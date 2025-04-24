import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Leaf, BookOpen, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">О нас</h1>
              <p className="text-xl text-foreground/80 mb-8">
                Мы команда энтузиастов, объединенных общей целью - сделать 
                нашу планету чище и зеленее для будущих поколений.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-medium">С нами с 2015 года</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
                <p className="text-foreground/80 mb-6">
                  Мы стремимся создать устойчивое будущее через просвещение, 
                  инновации и практические действия. Наша миссия заключается в 
                  объединении людей и ресурсов для решения экологических проблем.
                </p>
                <p className="text-foreground/80">
                  Мы верим, что каждое действие, независимо от его масштаба, 
                  имеет значение в глобальном контексте защиты окружающей среды и 
                  создания более чистого, здорового мира.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-xl">
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Просвещение</h3>
                      <p className="text-foreground/70 text-sm">
                        Распространение знаний об экологических проблемах и возможных решениях
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Сообщество</h3>
                      <p className="text-foreground/70 text-sm">
                        Объединение людей и организаций с общими экологическими ценностями
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Действия</h3>
                      <p className="text-foreground/70 text-sm">
                        Инициирование и поддержка конкретных проектов по защите природы
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                За нашими успехами стоит команда профессионалов, 
                объединенных страстью к сохранению природы
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Екатерина Иванова" 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">Екатерина Иванова</h3>
                <p className="text-primary text-center mb-4">Основатель и директор</p>
                <p className="text-foreground/70 text-sm text-center">
                  Эколог с 15-летним опытом, инициатор крупных природоохранных проектов
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Алексей Петров" 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">Алексей Петров</h3>
                <p className="text-primary text-center mb-4">Научный руководитель</p>
                <p className="text-foreground/70 text-sm text-center">
                  Кандидат биологических наук, специалист по восстановлению экосистем
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Марина Соколова" 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">Марина Соколова</h3>
                <p className="text-primary text-center mb-4">Координатор волонтеров</p>
                <p className="text-foreground/70 text-sm text-center">
                  Организатор масштабных экологических акций и образовательных программ
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-medium">Присоединяйтесь к нашей команде!</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
