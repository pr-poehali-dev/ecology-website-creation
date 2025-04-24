import { Leaf, Recycle, Globe, Droplets } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Сохранение природы',
    description: 'Мы работаем над сохранением биоразнообразия и защитой природных экосистем.',
  },
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: 'Переработка отходов',
    description: 'Продвигаем идеи разумного потребления и правильной утилизации отходов.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Экологическое образование',
    description: 'Проводим лекции и мастер-классы для повышения экологической грамотности.',
  },
  {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    title: 'Чистая вода',
    description: 'Реализуем проекты по очистке водоемов и защите водных ресурсов.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши направления</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы занимаемся различными аспектами экологии, стремясь создать более устойчивое и здоровое будущее для всех жителей планеты.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition border border-border/50">
              <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
