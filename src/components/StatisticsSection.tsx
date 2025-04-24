const stats = [
  {
    value: '250+',
    label: 'Волонтеров',
  },
  {
    value: '45',
    label: 'Завершенных проектов',
  },
  {
    value: '120',
    label: 'Тонн мусора собрано',
  },
  {
    value: '15000',
    label: 'Деревьев посажено',
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Наши достижения</h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            За годы работы мы достигли впечатляющих результатов благодаря поддержке неравнодушных людей
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg bg-primary-foreground/10">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
