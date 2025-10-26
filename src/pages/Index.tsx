import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время и вышлем анкету для рассмотрения.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const activities = [
    { icon: 'Coffee', title: 'Деловые завтраки' },
    { icon: 'BookOpen', title: 'Лекции по этикету' },
    { icon: 'Trophy', title: 'Теннис и гольф' },
    { icon: 'Wind', title: 'Йога' },
    { icon: 'TreePine', title: 'Конные прогулки' },
    { icon: 'Palette', title: 'Мастер-классы по стилю' },
    { icon: 'Users', title: 'Групповые занятия' },
    { icon: 'Camera', title: 'Фотодни' },
    { icon: 'Wine', title: 'Фуршеты' },
    { icon: 'Frame', title: 'Выставки' },
    { icon: 'Theater', title: 'Театр' },
    { icon: 'Cigarette', title: 'Сигарный клуб' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Заявка',
      description: 'Оставьте заявку на сайте для получения анкеты и подробной информации о клубе'
    },
    {
      number: '02',
      title: 'Анкетирование',
      description: 'Заполните анкету. Мы внимательно рассмотрим каждую заявку'
    },
    {
      number: '03',
      title: 'Решение',
      description: 'При положительном результате вы получите уведомление и информацию об оплате'
    },
    {
      number: '04',
      title: 'Членство',
      description: 'После оплаты вы получите физическое приглашение и подарок с символикой клуба'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">GLOSSA CLUB</h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-accent transition-colors">О клубе</a>
            <a href="#membership" className="hover:text-accent transition-colors">Членство</a>
            <a href="#admission" className="hover:text-accent transition-colors">Вступление</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/9669ed68-90ba-4530-9e26-f1c1f98e878a.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 fade-in">
          <p className="text-sm tracking-[0.3em] mb-6 text-accent uppercase">Закрытый клуб</p>
          <h2 className="text-6xl md:text-8xl font-light mb-8 italic">
            The privilege of<br />being chosen
          </h2>
          <div className="h-px w-32 bg-accent mx-auto"></div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-accent" />
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-5xl font-light mb-8 italic">О клубе</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                GLOSSA CLUB — эксклюзивное сообщество для тех, кто ценит качество во всём: 
                в окружении, времяпровождении и саморазвитии.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы создали пространство, где встречаются успешные люди, разделяющие 
                общие ценности и стремящиеся к личностному росту.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/f38a4e46-638d-49ac-ac5a-815b7361e6c0.jpg"
                alt="Клуб"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-light mb-12 text-center italic">Программа клуба</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card hover:bg-muted transition-colors cursor-default text-center border-border"
                >
                  <Icon name={activity.icon as any} size={32} className="mx-auto mb-4 text-accent" />
                  <p className="text-sm">{activity.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-32 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl font-light mb-8 italic">Членство</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Членство в GLOSSA CLUB открывает доступ к эксклюзивным мероприятиям, 
            готовой программе на месяц и сообществу единомышленников.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 text-accent" />
              <h5 className="text-xl mb-3">Готовая программа</h5>
              <p className="text-muted-foreground text-sm">
                Ежемесячный календарь событий и мероприятий
              </p>
            </div>
            <div className="text-center">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-accent" />
              <h5 className="text-xl mb-3">Премиальное окружение</h5>
              <p className="text-muted-foreground text-sm">
                Общение с успешными и интересными людьми
              </p>
            </div>
            <div className="text-center">
              <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-accent" />
              <h5 className="text-xl mb-3">Личностный рост</h5>
              <p className="text-muted-foreground text-sm">
                Развитие в комфортной и мотивирующей среде
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="admission" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-light mb-16 text-center italic">Процесс вступления</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-bold text-muted/20 mb-4">{step.number}</div>
                <h5 className="text-2xl mb-4 font-light">{step.title}</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 relative h-80 rounded-lg overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/10b927bd-4097-410b-aef6-d73e0e1e449d.jpg"
              alt="Приглашение"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8">
                <p className="text-lg text-accent italic">
                  После вступления вы получите физическое приглашение<br />
                  и эксклюзивный подарок с символикой клуба
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-card">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-5xl font-light mb-6 text-center italic">Оставить заявку</h3>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы вышлем вам анкету, программу клуба и условия членства
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Имя и фамилия"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder="Расскажите о себе (необязательно)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border min-h-32"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
            >
              Отправить заявку
            </Button>
          </form>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Отправляя заявку, вы соглашаетесь на обработку персональных данных</p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-2xl font-bold tracking-wider mb-2">GLOSSA CLUB</h4>
              <p className="text-sm text-muted-foreground">Закрытый клуб премиального качества</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 GLOSSA CLUB. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
