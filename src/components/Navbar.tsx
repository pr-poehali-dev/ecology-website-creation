import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="py-4 border-b bg-primary/5">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Мир Экологии</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-primary transition">
            Главная
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition">
            О нас
          </Link>
          <Link to="/projects" className="text-foreground/80 hover:text-primary transition">
            Эко-проекты
          </Link>
          <Link to="/blog" className="text-foreground/80 hover:text-primary transition">
            Блог
          </Link>
        </div>
        
        <Button variant="outline" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Участвовать
        </Button>
        
        <Button variant="ghost" className="md:hidden" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
