import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const blogPosts = [
  {
    id: 1,
    title: "10 простых способов сократить потребление пластика",
    excerpt: "Узнайте, как легко и эффективно снизить количество пластика в вашей повседневной жизни и помочь окружающей среде.",
    category: "Советы",
    author: "Екатерина Зелёная",
    date: "10 июня 2023",
    readTime: "7 мин",
    imageUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Как организовать экологичный офис: опыт российских компаний",
    excerpt: "Реальные примеры того, как отечественные компании внедряют экологические практики в офисную работу и экономят ресурсы.",
    category: "Бизнес",
    author: "Михаил Лесной",
    date: "2 июля 2023",
    readTime: "10 мин",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Голоса природы: как звуковое загрязнение влияет на животных",
    excerpt: "Исследование показывает, что городской шум меняет поведение птиц и других животных, нарушая их коммуникацию и выживание.",
    category: "Исследования",
    author: "Алексей Птичкин",
    date: "15 июля 2023",
    readTime: "8 мин",
    imageUrl: "https://images.unsplash.com/photo-1551957645-808cc3674078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Новый закон о раздельном сборе отходов: что изменится для россиян",
    excerpt: "Анализ нового законодательства и его влияния на систему обращения с отходами в российских городах.",
    category: "Законодательство",
    author: "Ирина Правовая",
    date: "30 июля 2023",
    readTime: "12 мин",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Экологичный туризм в России: 5 направлений для осознанного путешествия",
    excerpt: "Гид по российским экологическим маршрутам, где можно отдохнуть, не нанося вреда природе.",
    category: "Туризм",
    author: "Павел Походный",
    date: "5 августа 2023",
    readTime: "9 мин",
    imageUrl: "https://images.unsplash.com/photo-1533587061840-caa3827e3e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Зелёные школы: как экологическое образование меняет мышление детей",
    excerpt: "Результаты исследования показывают, что дети, получающие экологическое образование, вырастают более ответственными взрослыми.",
    category: "Образование",
    author: "Надежда Учебная",
    date: "12 августа 2023",
    readTime: "11 мин",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const categoryColors: Record<string, string> = {
  "Советы": "bg-green-100 text-green-800",
  "Бизнес": "bg-blue-100 text-blue-800",
  "Исследования": "bg-purple-100 text-purple-800",
  "Законодательство": "bg-orange-100 text-orange-800",
  "Туризм": "bg-teal-100 text-teal-800",
  "Образование": "bg-pink-100 text-pink-800",
};

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Блог о природе и экологии</h1>
              <p className="text-xl text-gray-600 mb-8">
                Актуальные материалы, исследования и рекомендации для тех, кто заботится о нашей планете
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Все статьи", "Советы", "Исследования", "Бизнес", "Образование"].map((category) => (
                  <Button 
                    key={category} 
                    variant={category === "Все статьи" ? "default" : "outline"}
                    className={category === "Все статьи" ? "bg-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Избранная статья</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Возрождение лесов" 
                  className="rounded-lg shadow-md w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <Badge className="bg-green-100 text-green-800 mb-4 hover:bg-green-200">Специальный репортаж</Badge>
                <h3 className="text-3xl font-bold mb-4">Возрождение лесов: масштабный проект восстановления экосистем Сибири</h3>
                <p className="text-gray-600 mb-6">
                  Уникальный проект объединил ученых, волонтеров и местных жителей для восстановления тысяч гектаров лесов, 
                  пострадавших от пожаров. Мы расскажем о технологиях, людях и первых результатах масштабной инициативы.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Ольга Лесникова</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={16} />
                    <span>20 августа 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>15 мин</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">Читать полностью</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Blog Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Последние публикации</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-52">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge className={`absolute top-3 left-3 ${categoryColors[post.category] || "bg-gray-100 text-gray-800"}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-gray-600">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between text-sm text-gray-500 pt-0">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Загрузить еще публикации
              </Button>
            </div>
          </div>
        </section>
      
        {/* Newsletter */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на нашу рассылку</h2>
              <p className="text-gray-600 mb-8">
                Получайте свежие материалы, анонсы экологических мероприятий и полезные советы прямо на вашу почту
              </p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="rounded-l-none">Подписаться</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
