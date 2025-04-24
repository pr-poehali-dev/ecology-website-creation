import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/10 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">Мир Экологии</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Вместе сделаем нашу планету чище и здоровее для будущих поколений.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-primary transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-primary transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/80 hover:text-primary transition">
                  Эко-проекты
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-primary transition">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>ул. Зеленая, 123, г. Москва</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>info@eco-world.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Подписка</h3>
            <p className="text-muted-foreground mb-4">
              Подпишитесь на нашу рассылку, чтобы быть в курсе эко-новостей
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-3 py-2 bg-background rounded-l-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Мир Экологии. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
