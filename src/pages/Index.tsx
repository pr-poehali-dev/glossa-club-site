import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
      number: 'I',
      title: 'Заявка',
      description: 'Оставьте заявку на сайте для получения анкеты и подробной информации о клубе'
    },
    {
      number: 'II',
      title: 'Анкетирование',
      description: 'Заполните анкету. Мы внимательно рассмотрим каждую заявку'
    },
    {
      number: 'III',
      title: 'Решение',
      description: 'При положительном результате вы получите уведомление и информацию об оплате'
    },
    {
      number: 'IV',
      title: 'Членство',
      description: 'После оплаты вы получите физическое приглашение и подарок с символикой клуба'
    }
  ];



  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed left-0 top-1/4 w-96 h-96 opacity-10 pointer-events-none z-0">
        <img 
          src="https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/b27fed22-da89-431d-bdaf-e74edf21fd08.jpg"
          alt=""
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </div>
      <div className="fixed right-0 top-1/3 w-96 h-96 opacity-10 pointer-events-none z-0 transform scale-x-[-1]">
        <img 
          src="https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/b27fed22-da89-431d-bdaf-e74edf21fd08.jpg"
          alt=""
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">GLOSSA CLUB</h1>
          <div className="hidden md:flex gap-8 text-sm">
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
            backgroundImage: `url('https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/52a57b54-7126-4342-8ed3-db47688d4eaf.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 fade-in">
          <p className="text-xs tracking-[0.4em] mb-8 text-accent/80 uppercase font-light">Закрытый клуб</p>
          <h2 className="text-6xl md:text-8xl mb-8 font-light tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The privilege of<br />being chosen
          </h2>
          <div className="h-px w-24 bg-accent/50 mx-auto"></div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-accent/60" />
        </div>
      </section>

      <section id="about" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg brightness-[0.3]"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/c7833513-9a33-47e3-a861-dbc3de4c4bbd.jpg')`,
              }}
            >
            </div>
            <div className="relative z-10 py-16">
              <h3 className="text-4xl font-light mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>О КЛУБЕ</h3>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  GLOSSA CLUB — эксклюзивное сообщество для тех, кто ценит качество во всём: 
                  в окружении, времяпровождении и саморазвитии.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Мы создали пространство, где встречаются успешные люди, разделяющие 
                  общие ценности и стремящиеся к личностному росту.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-light mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ПРОГРАММА КЛУБА</h4>
            <div className="overflow-x-auto">
              <div className="flex gap-12 px-6 min-w-max justify-center">
                {activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-3 min-w-[100px]"
                  >
                    <Icon name={activity.icon as any} size={20} className="text-accent/70" strokeWidth={1} />
                    <p className="text-xs text-center text-muted-foreground">{activity.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-32 px-6 bg-card/30 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-light mb-8" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ЧЛЕНСТВО</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Членство в GLOSSA CLUB открывает доступ к эксклюзивным мероприятиям, 
            готовой программе на месяц и сообществу единомышленников.
          </p>

        </div>
      </section>

      <section id="admission" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-light mb-16 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ПРОЦЕСС ВСТУПЛЕНИЯ</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="text-5xl font-light text-accent/60 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step.number}</div>
                <h5 className="text-xl mb-4 font-light tracking-wide">{step.title}</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-card/30 relative z-10">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-light mb-6 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ОСТАВИТЬ ЗАЯВКУ</h3>
          <p className="text-center text-muted-foreground mb-12 text-sm">
            Заполните форму, и мы вышлем вам анкету, программу клуба и условия членства
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Имя и фамилия"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border/50 h-12"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background/50 border-border/50 h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Расскажите о себе (необязательно)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 border-border/50 min-h-32"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-sm tracking-wider rounded-none"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#e8d5c4' }}
            >
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </form>

          <div className="mt-12 text-center text-xs text-muted-foreground">
            <p>Отправляя заявку, вы соглашаетесь на обработку персональных данных</p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-xl font-bold tracking-wider mb-2">GLOSSA CLUB</h4>
              <p className="text-xs text-muted-foreground">Закрытый клуб премиального качества</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-center text-xs text-muted-foreground">
            <p>© 2024 GLOSSA CLUB. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;