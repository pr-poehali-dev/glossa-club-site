import { useState, useEffect } from 'react';
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
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-section').forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, укажите ваш email';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, укажите корректный email';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите ваш телефон';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      const response = await fetch('https://functions.poehali.dev/cfb2c98f-7f15-4d1b-b003-91d6f486bd70', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        if (navigator.vibrate) {
          navigator.vibrate([50, 30, 50]);
        }
        
        createOverlay();
        
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время и вышлем анкету для рассмотрения.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        createOverlay();
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      createOverlay();
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  const activities = [
    { icon: 'Coffee', title: 'Деловые завтраки' },
    { icon: 'BookOpen', title: 'Лекции по этикету' },
    { icon: 'Trophy', title: 'Теннис и гольф' },
    { icon: 'Sparkles', title: 'Йога' },
    { icon: 'Trees', title: 'Конные прогулки' },
    { icon: 'Shirt', title: 'Мастер-классы по стилю' },
    { icon: 'Users', title: 'Групповые занятия' },
    { icon: 'Camera', title: 'Фотодни' },
    { icon: 'Wine', title: 'Фуршеты' },
    { icon: 'Image', title: 'Выставки' },
    { icon: 'Theater', title: 'Театр' },
    { icon: 'Flame', title: 'Сигарный клуб' }
  ];

  const steps = [
    {
      number: 'I',
      title: 'ЗАЯВКА',
      description: 'Оставьте заявку на сайте для получения анкеты и подробной информации о клубе'
    },
    {
      number: 'II',
      title: 'АНКЕТИРОВАНИЕ',
      description: 'Заполните анкету. Мы внимательно рассмотрим каждую заявку'
    },
    {
      number: 'III',
      title: 'РЕШЕНИЕ',
      description: 'При положительном результате вы получите уведомление и информацию об оплате'
    },
    {
      number: 'IV',
      title: 'ЧЛЕНСТВО',
      description: 'После оплаты вы получите физическое приглашение и подарок с символикой клуба'
    }
  ];

  const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; inset: 0; background: black; opacity: 0; z-index: 99; pointer-events: none; transition: opacity 0.3s ease;';
    document.body.appendChild(overlay);
    
    setTimeout(() => overlay.style.opacity = '0.4', 10);
    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed left-0 top-1/4 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0 will-change-transform">
        <img 
          src="https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/b27fed22-da89-431d-bdaf-e74edf21fd08.jpg"
          alt=""
          className="w-full h-full object-contain mix-blend-lighten"
          loading="eager"
        />
      </div>
      <div className="fixed right-0 top-1/3 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0 transform scale-x-[-1] will-change-transform">
        <img 
          src="https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/b27fed22-da89-431d-bdaf-e74edf21fd08.jpg"
          alt=""
          className="w-full h-full object-contain mix-blend-lighten"
          loading="eager"
        />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider">GLOSSA CLUB</h1>
          <button className="md:hidden" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
            <Icon name="Menu" size={22} />
          </button>
          <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-accent transition-colors cursor-pointer">О клубе</a>
            <a href="#membership" onClick={(e) => { e.preventDefault(); document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-accent transition-colors cursor-pointer">Членство</a>
            <a href="#admission" onClick={(e) => { e.preventDefault(); document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-accent transition-colors cursor-pointer">Вступление</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-accent transition-colors cursor-pointer">Контакты</a>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="hover:text-accent transition-colors cursor-pointer">О клубе</a>
            <a href="#membership" onClick={(e) => { e.preventDefault(); document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="hover:text-accent transition-colors cursor-pointer">Членство</a>
            <a href="#admission" onClick={(e) => { e.preventDefault(); document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="hover:text-accent transition-colors cursor-pointer">Вступление</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="hover:text-accent transition-colors cursor-pointer">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black will-change-transform">
          <img
            src="https://cdn.poehali.dev/files/8bd9237c-22ae-4906-930d-5ae5f11dcc46.jpg"
            alt=""
            className="w-full h-full object-contain brightness-[0.4]"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 will-change-transform"></div>
        
        <div className="relative z-10 text-center px-4 md:px-6 fade-in">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 text-accent/80 uppercase font-light">Закрытый клуб</p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl mb-6 md:mb-8 font-light tracking-wide leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The privilege of<br />being chosen
          </h2>
          <div className="h-px w-16 md:w-24 bg-accent/50 mx-auto"></div>
        </div>

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500"
          style={{ 
            opacity: Math.max(0, 1 - scrollY / 300)
          }}
        >
          <Icon name="ChevronDown" size={20} className="text-accent/40 hover:text-accent/60 transition-colors" strokeWidth={1} />
        </div>
      </section>

      <section id="about" className="py-12 md:py-24 lg:py-32 px-4 md:px-6 relative z-10 fade-section opacity-0">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 md:mb-24 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg brightness-[0.3] grayscale"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/a629715f-44e2-426c-8ec9-da82b8b47fd2/files/c7833513-9a33-47e3-a861-dbc3de4c4bbd.jpg')`,
              }}
            >
            </div>
            <div className="relative z-10 py-12 md:py-16">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-light mb-8 md:mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>О КЛУБЕ</h3>
              <div className="max-w-3xl mx-auto text-center px-4">
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  GLOSSA CLUB — эксклюзивное сообщество для тех, кто ценит качество во всём: 
                  в окружении, времяпровождении и саморазвитии.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Мы создали пространство, где встречаются успешные люди, разделяющие 
                  общие ценности и стремящиеся к личностному росту.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-light mb-8 md:mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ПРОГРАММА КЛУБА</h4>
            <div className="overflow-x-auto pb-6 custom-scrollbar">
              <div className="flex gap-4 md:gap-8 lg:gap-12 px-4 md:px-6 min-w-max justify-center">
                {activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-2 md:gap-3 min-w-[80px] md:min-w-[100px] activity-item group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon name={activity.icon as any} size={18} className="md:w-5 md:h-5 text-accent/70 group-hover:text-accent transition-all duration-300 group-hover:scale-110" strokeWidth={1} />
                    <p className="text-[10px] md:text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{activity.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-card/30 relative z-10 fade-section opacity-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ЧЛЕНСТВО</h3>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12 px-2">
            Членство в GLOSSA CLUB открывает доступ к эксклюзивным мероприятиям, 
            готовой программе на месяц и сообществу единомышленников.
          </p>

        </div>
      </section>

      <section id="admission" className="py-12 md:py-24 lg:py-32 px-4 md:px-6 relative z-10 fade-section opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-light mb-12 md:mb-16 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ПРОЦЕСС ВСТУПЛЕНИЯ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl text-accent/60 mb-4 md:mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>{step.number}</div>
                <h5 className="text-lg md:text-xl mb-3 md:mb-4 font-light tracking-wide">{step.title}</h5>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-card/30 relative z-10 fade-section opacity-0">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 text-center" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.1em' }}>ОСТАВИТЬ ЗАЯВКУ</h3>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-xs md:text-sm px-2">
            Заполните форму, и мы вышлем вам анкету, программу клуба и условия членства
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <Input
                placeholder="Имя и фамилия"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                className={`bg-background/50 border-border/50 h-12 ${errors.name ? 'border-red-500/50' : ''}`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`bg-background/50 border-border/50 h-12 ${errors.email ? 'border-red-500/50' : ''}`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                className={`bg-background/50 border-border/50 h-12 ${errors.phone ? 'border-red-500/50' : ''}`}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
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
              className="w-full h-11 md:h-12 text-xs md:text-sm tracking-wider rounded-none hover:opacity-70 transition-opacity duration-300 relative overflow-visible"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#e8d5c4' }}
            >
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </form>

          <div className="mt-8 md:mt-12 text-center text-[10px] md:text-xs text-muted-foreground px-4">
            <p>Отправляя заявку, вы соглашаетесь на обработку персональных данных</p>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-border/50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <a href="https://t.me/+n4ws0Zyg-qI3Yzdi" target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent transition-colors group">
              <Icon name="Send" size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
            </a>
            <p className="text-xs md:text-sm tracking-[0.3em] text-center font-light text-muted-foreground/80">GLOSSA CLUB</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;