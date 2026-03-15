import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  X,
  Code2,
  LayoutTemplate,
  Search,
  Briefcase,
  Sparkles,
  Globe,
  ShieldCheck,
  Clock,
  Star,
  MessageCircle,
  CreditCard,
  CheckCircle,
  Server,
  Lock,
} from "lucide-react";
import React, { useState, useEffect } from "react";
const Typewriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
    const typingSpeed = isDeleting ? 30 : 80;
    const currentWord = words[currentWordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setIsPaused(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(
          currentWord.substring(0, currentText.length + (isDeleting ? -1 : 1)),
        );
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, isPaused]);
  return (
    <span className="inline">
      {" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563e8] to-blue-400 py-1">
        {" "}
        {currentText}{" "}
      </span>{" "}
      <span className="text-[#2563e8] font-light">|</span>{" "}
    </span>
  );
}; 

// --- Data --- 
const services = [ { title:"Лендинги", desc:"Одностраничные сайты с высокой конверсией для ваших товаров или услуг.", icon: <LayoutTemplate size={20} />, tags: ["Дизайн","Верстка","Конверсия"], stats:"Быстрый запуск" }, { title:"Корпоративные сайты", desc:"Многостраничные сайты для бизнеса, формирующие доверие и имидж.", icon: <Briefcase size={20} />, tags: ["Многостраничность","CMS","Каталог"], stats:"Лицо компании" }, { title:"Хостинг и Домен", desc:"Предоставляем 30 дней бесплатного хостинга и домен в подарок.", icon: <Server size={20} />, tags: ["Бесплатно 30 дней","Домен в подарок"], stats:"Всё включено" }, { title:"SEO-оптимизация", desc:"Базовая настройка сайта для успешного продвижения в Яндекс и Google.", icon: <Search size={20} />, tags: ["Мета-теги","Скорость","Индексация"], stats:"Органический рост" } ]; 
const process = [ { num:"01", title:"Обсуждение", desc:"Связываемся с вами, обсуждаем детали, цели и задачи вашего будущего сайта.", icon: <MessageCircle size={18} /> }, { num:"02", title:"Предоплата", desc:"Утверждаем план работ, и вы вносите предоплату для старта.", icon: <CreditCard size={18} /> }, { num:"03", title:"Разработка", desc:"Создаем уникальный дизайн, верстаем и программируем сайт под ваши нужды.", icon: <Code2 size={18} /> }, { num:"04", title:"Правки и Финал", desc:"Показываем готовый сайт, вносим ваши правки, тестируем и запускаем проект.", icon: <CheckCircle size={18} /> } ]; 
const portfolio = [ { title:"Сайт строительной компании", client:"СтройИнвест", category:"Корпоративный", year:"2026", img:"https://picsum.photos/seed/construction/800/600", projectUrl:"/#/project/construction", domain:"stroyinvest.ru", tech: ["Уникальный дизайн","SEO","CMS"] }, { title:"Лендинг фитнес-клуба", client:"IronFir", category:"Лендинг", year:"2025", img:"https://picsum.photos/seed/fitness/800/600", projectUrl:"/#/project/fitness", domain:"ironfir.com", tech: ["Анимации","Формы","Адаптив"] }, { title:"Сайт ресторана", client:"Gourmet", category:"Сайт-визитка", year:"2026", img:"https://picsum.photos/seed/restaurant/800/600", projectUrl:"/#/project/restaurant", domain:"gourmet-rest.ru", tech: ["Меню","Бронь","Дизайн"] }, { title:"Магазин эко-товаров", client:"EcoStore", category:"E-commerce", year:"2025", img:"https://picsum.photos/seed/ecostore/800/600", projectUrl:"/#/project/ecostore", domain:"ecostore.shop", tech: ["Каталог","Корзина","Оплата"] } ]; 
const pricing = [ { title:"Сайт под ключ", price:"15 000 ₽", time:"от 2 дней", features: ["Уникальный дизайн","Адаптивная верстка (ПК и мобильные)","Базовая SEO-оптимизация","Домен в подарок","30 дней хостинга бесплатно"], popular: true }, { title:"Индивидуальная разработка", price:"По запросу", time:"от 7 дней", features: ["Сложный корпоративный сайт или магазин","Интеграция с CRM и сервисами","Панель управления (CMS)","Расширенная аналитика","Уникальные анимации и функционал"] } ]; 
const faqs = [ { q:"Что входит в стоимость сайта за 15 000 руб?", a:"В эту стоимость входит полноценный лендинг или сайт-визитка: уникальный дизайн, адаптивная верстка под все устройства, настройка форм обратной связи, базовая SEO-оптимизация, а также домен в подарок и месяц бесплатного хостинга." }, { q:"Как происходит процесс оплаты?", a:"Мы работаем по прозрачной схеме: после обсуждения проекта вы вносите предоплату 50%. Оставшиеся 50% оплачиваются только после того, как вы примете готовую работу и мы внесем все финальные правки." }, { q:"Сайт будет нормально работать на телефоне?", a:"Да, абсолютно все сайты, которые мы создаем, имеют адаптивную верстку. Они будут идеально выглядеть и быстро работать как на компьютерах, так и на смартфонах и планшетах." }, { q:"Вы предоставляете хостинг и домен?", a:"Да! Для тарифа «Сайт под ключ» мы дарим доменное имя на 1 год и предоставляем 30 дней бесплатного хостинга, чтобы вы могли сразу запустить проект без лишних забот." } ];


// --- Components ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const comparisonData = [
  {
    feature: "Уникальный дизайн под ваш бренд",
    us: true,
    freelancer: "50/50",
    builder: false,
  },
  {
    feature: "Соблюдение сроков по договору",
    us: true,
    freelancer: false,
    builder: true,
  },
  {
    feature: "Высокая скорость загрузки (SEO)",
    us: true,
    freelancer: "50/50",
    builder: false,
  },
  {
    feature: "Отсутствие абонентской платы",
    us: true,
    freelancer: true,
    builder: false,
  },
  {
    feature: "Комплексный подход (аналитика, текст, код)",
    us: true,
    freelancer: false,
    builder: false,
  },
  {
    feature: "Техническая поддержка после сдачи",
    us: true,
    freelancer: false,
    builder: false,
  },
];
const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${className}`}
  >
    {" "}
    {children}{" "}
  </span>
);
export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#2563e8] selection:text-white overflow-x-hidden relative">
      {" "}
      {/* Global Background Pattern */}{" "}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none z-0" />{" "}
      {/* Navbar */}{" "}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        {" "}
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
          {" "}
          <div className="flex items-center gap-4 md:gap-8">
            {" "}
            <div className="flex flex-col items-start justify-center">
              {" "}
              <div className="font-display font-bold text-2xl md:text-3xl tracking-[-0.05em] text-gray-900 leading-none">
                {" "}
                Tebve{" "}
              </div>{" "}
              <div className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                {" "}
                Разработка сайтов под ключ{" "}
              </div>{" "}
            </div>{" "}
            <div className="hidden lg:flex items-center gap-1">
              {" "}
              <Badge className="bg-blue-50 text-[#2563e8] border-blue-200 flex items-center gap-1.5">
                {" "}
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563e8]" />{" "}
                Готовы к новым проектам{" "}
              </Badge>{" "}
            </div>{" "}
          </div>{" "}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {" "}
            <a href="#services" className="hover:text-[#2563e8] transition-colors">Услуги</a>{" "}
            <a href="#process" className="hover:text-[#2563e8] transition-colors">Процесс</a>{" "}
            <a href="#portfolio" className="hover:text-[#2563e8] transition-colors">Что мы умеем</a>{" "}
            <a href="#pricing" className="hover:text-[#2563e8] transition-colors">Тарифы</a>{" "}
          </div>{" "}
          <a
            href="#contact"
            className="bg-slate-900 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg text-sm font-medium shadow-md hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            {" "}
            <span className="hidden sm:inline">Обсудить проект</span>{" "}
            <span className="sm:hidden">Связаться</span>{" "}
            <ArrowRight size={16} />{" "}
          </a>{" "}
        </div>{" "}
      </nav>{" "}
      <main className="relative z-10">
        {" "}
        {/* 1. Rich Hero Section */}{" "}
        <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col justify-center">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {" "}
            {/* Left: Typography & CTA */}{" "}
            <div className="lg:col-span-7 relative z-10">
              {" "}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
                {" "}
                <Badge className="bg-slate-100 text-slate-600 border-slate-200">
                  Разработка сайтов
                </Badge>{" "}
                <Badge className="bg-slate-100 text-slate-600 border-slate-200">
                  Дизайн под ключ
                </Badge>{" "}
                <span className="text-xs font-mono text-slate-400">
                  EST. 2026
                </span>{" "}
              </div>{" "}
              <h1 className="text-4xl sm:text-5xl lg:text-[5rem] leading-[1.15] md:leading-[1.05] font-display font-bold tracking-tight uppercase mb-6 md:mb-8 min-h-[160px] sm:min-h-[180px] md:min-h-[240px]">
                {" "}
                Создаем сайты,
                <br /> которые <br className="sm:hidden" />{" "}
                <Typewriter
                  words={[
                    "продают ваши услуги",
                    "приводят клиентов",
                    "выделяют вас",
                    "работают на имидж",
                    "растят ваш бизнес",
                  ]}
                />{" "}
              </h1>{" "}
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl mb-8 md:mb-10">
                {" "}
                Проектируем и разрабатываем современные корпоративные сайты и
                конверсионные лендинги. Берем на себя всё: от дизайна до
                запуска.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {" "}
                <a
                  href="#contact"
                  className="bg-[#2563e8] text-white rounded-xl px-8 py-4 flex items-center justify-center gap-3 text-lg font-medium shadow-xl shadow-blue-500/20"
                >
                  {" "}
                  Заказать сайт <ArrowRight size={20} />{" "}
                </a>{" "}
                <a
                  href="#pricing"
                  className="bg-white text-slate-900 border border-slate-200 rounded-xl px-8 py-4 flex items-center justify-center gap-3 text-lg font-medium shadow-sm"
                >
                  {" "}
                  Смотреть тарифы{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            {/* Right: Rich UI Composition */}{" "}
            <div className="lg:col-span-5 relative h-[400px] md:h-[600px] hidden lg:block">
              {" "}
              {/* Decorative background blur */}{" "}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px] pointer-events-none" />{" "}
              {/* Floating Card 1: Code Snippet */}{" "}
              <div className="absolute top-10 right-0 w-80 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden z-20">
                {" "}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  {" "}
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />{" "}
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />{" "}
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />{" "}
                  <span className="ml-2 text-[10px] font-mono text-slate-500">
                    index.html
                  </span>{" "}
                </div>{" "}
                <div className="p-4 text-xs font-mono text-blue-300 leading-relaxed">
                  {" "}
                  <span className="text-slate-400">&lt;!DOCTYPE html&gt;</span>
                  <br /> <span className="text-pink-400">&lt;html</span>{" "}
                  <span className="text-green-300">lang="ru"</span>
                  <span className="text-pink-400">&gt;</span>
                  <br /> &nbsp;&nbsp;
                  <span className="text-pink-400">&lt;head&gt;</span>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-pink-400">&lt;title&gt;</span>
                  <span className="text-slate-300">Идеальный сайт</span>
                  <span className="text-pink-400">&lt;/title&gt;</span>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-slate-500">
                    &lt;!-- SEO Optimized --&gt;
                  </span>
                  <br /> &nbsp;&nbsp;
                  <span className="text-pink-400">&lt;/head&gt;</span>
                  <br /> &nbsp;&nbsp;
                  <span className="text-pink-400">&lt;body</span>{" "}
                  <span className="text-green-300">class="fast-load"</span>
                  <span className="text-pink-400">&gt;</span>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-pink-400">&lt;h1&gt;</span>
                  <span className="text-slate-300">Высокая конверсия</span>
                  <span className="text-pink-400">&lt;/h1&gt;</span>
                  <br /> &nbsp;&nbsp;
                  <span className="text-pink-400">&lt;/body&gt;</span>
                  <br />{" "}
                  <span className="text-pink-400">&lt;/html&gt;</span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Floating Card 2: Analytics */}{" "}
              <div className="absolute bottom-20 left-0 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl p-5 z-30 backdrop-blur-xl bg-white/80">
                {" "}
                <div className="flex justify-between items-center mb-4">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563e8]">
                      {" "}
                      <Globe size={16} />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <div className="text-sm font-bold text-slate-900">
                        Посетители
                      </div>{" "}
                      <div className="text-[10px] font-mono text-slate-500 uppercase">
                        Рост трафика
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <Badge className="bg-green-50 text-green-600 border-green-200">
                    +300%
                  </Badge>{" "}
                </div>{" "}
                <div className="flex items-end gap-2 h-24 mt-4">
                  {" "}
                  {[30, 45, 40, 60, 75, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-100 rounded-t-sm relative group"
                    >
                      {" "}
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-[#2563e8] rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
              {/* Floating Card 3: Status */}{" "}
              <div className="absolute top-1/2 right-10 w-48 bg-white rounded-2xl border border-slate-200 shadow-lg p-4 z-10 flex items-center gap-4">
                {" "}
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center relative">
                  {" "}
                  <ShieldCheck size={20} className="text-[#2563e8]" />{" "}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="text-xs font-mono text-slate-500 uppercase mb-1">
                    Хостинг
                  </div>{" "}
                  <div className="text-sm font-bold text-slate-900">
                    Online 24/7
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 3. Rich Services Bento */}{" "}
        <section
          id="services"
          className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden"
        >
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            {" "}
            <div>
              {" "}
              <Badge className="bg-blue-50 text-[#2563e8] border-blue-200 mb-4">
                Наши компетенции
              </Badge>{" "}
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
                {" "}
                Комплексная
                <br />
                Разработка{" "}
              </h2>{" "}
            </div>{" "}
            <p className="max-w-md text-slate-600 font-light text-base md:text-lg">
              {" "}
              Мы создаем сайты под ключ: от идеи и дизайна до верстки, настройки
              хостинга и базового SEO-продвижения.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {services.map((srv, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-[32px] p-6 md:p-8 flex flex-col relative overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                {" "}
                {/* Decorative top border */}{" "}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563e8] to-blue-300 opacity-0" />{" "}
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  {" "}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
                    {" "}
                    {srv.icon}{" "}
                  </div>{" "}
                  <Badge className="bg-slate-50 text-slate-500 border-slate-200">
                    {" "}
                    {srv.stats}{" "}
                  </Badge>{" "}
                </div>{" "}
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase mb-3 md:mb-4 text-slate-900">
                  {srv.title}
                </h3>{" "}
                <p className="text-slate-600 mb-6 md:mb-8 flex-grow text-sm md:text-base">
                  {srv.desc}
                </p>{" "}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                  {" "}
                  {srv.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] md:text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100"
                    >
                      {" "}
                      {tag}{" "}
                    </span>
                  ))}{" "}
                </div>{" "}
              </div>
            ))}{" "}
            {/* CTA Card in Bento */}{" "}
            <div className="lg:col-span-4 bg-slate-900 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
              {" "}
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />{" "}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2563e8] rounded-full blur-[80px] opacity-40" />{" "}
              <div className="relative z-10 max-w-2xl">
                {" "}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-4">
                  Нужна нестандартная разработка?
                </h3>{" "}
                <p className="text-slate-400 text-sm md:text-base">
                  Соберем выделенную команду под ваш проект. Frontend, Backend,
                  DevOps и QA инженеры уровня Middle+ и Senior.
                </p>{" "}
              </div>{" "}
              <a
                href="#contact"
                className="relative z-10 bg-white text-slate-900 rounded-xl px-6 md:px-8 py-3 md:py-4 font-medium flex items-center gap-2 whitespace-nowrap w-full md:w-auto justify-center"
              >
                {" "}
                Обсудить задачу <ArrowRight size={18} />{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 4. Detailed Process Timeline */}{" "}
        <section
          id="process"
          className="py-20 md:py-32 bg-slate-50 border-y border-slate-200 overflow-hidden"
        >
          {" "}
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {" "}
            <div className="text-center mb-16 md:mb-20">
              {" "}
              <Badge className="bg-white text-[#2563e8] border-blue-200 mb-4 shadow-sm">
                Как мы работаем
              </Badge>{" "}
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
                Прозрачный процесс
              </h2>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              {/* Connecting Line */}{" "}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />{" "}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
                {" "}
                {process.map((step, i) => (
                  <div key={i} className="relative group">
                    {" "}
                    {/* Node */}{" "}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-slate-300 z-20" />{" "}
                    <div
                      className={`bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm ${i % 2 === 0 ? "md:mb-32" : "md:mt-32"}`}
                    >
                      {" "}
                      <div className="flex justify-between items-center mb-6">
                        {" "}
                        <div className="text-3xl md:text-4xl font-display font-bold text-slate-200">
                          {step.num}
                        </div>{" "}
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                          {" "}
                          {step.icon}{" "}
                        </div>{" "}
                      </div>{" "}
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>{" "}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 5. Rich Portfolio */}{" "}
        <section
          id="portfolio"
          className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden"
        >
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            {" "}
            <div>
              {" "}
              <Badge className="bg-blue-50 text-[#2563e8] border-blue-200 mb-4">
                Наши работы
              </Badge>{" "}
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
                Что мы
                <br />
                умеем
              </h2>{" "}
            </div>{" "}
            <p className="max-w-md text-slate-600 text-sm md:text-base leading-relaxed">
              {" "}
              <span className="font-bold text-[#2563e8]">Дисклеймер:</span>{" "}
              Представленные работы — лишь образец, разработанный, чтобы
              показать потенциальным клиентам наши возможности. Стиль и дизайн
              примеров сайтов кому-то может не понравиться, но при разработке
              ваших проектов будут учитываться ваши предпочтения и ТЗ.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {" "}
            {portfolio.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(item)}
                className="group relative rounded-[32px] overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] md:aspect-auto md:h-[500px] lg:h-[600px] cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20"
              >
                {" "}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  {" "}
                  <iframe
                    src={item.projectUrl}
                    className="w-full h-full border-none"
                    scrolling="no"
                    tabIndex={-1}
                  />{" "}
                </div>{" "}
                <div className="absolute inset-0 bg-slate-900/40/60 pointer-events-none" />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent pointer-events-none" />{" "}
                {/* Top Tags */}{" "}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 flex justify-between items-center pointer-events-none">
                  {" "}
                  <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                    {item.category}
                  </Badge>{" "}
                  <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                    {item.year}
                  </Badge>{" "}
                </div>{" "}
                {/* Bottom Content */}{" "}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 pointer-events-none">
                  {" "}
                  <div className="text-white/70 font-mono text-xs md:text-sm mb-2">
                    {item.client}
                  </div>{" "}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-4 md:mb-6">
                    {item.title}
                  </h3>{" "}
                  <div className="flex justify-between items-center opacity-0">
                    {" "}
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {item.tech.map((t, j) => (
                        <span
                          key={j}
                          className="text-[10px] md:text-xs font-mono text-white/80 bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-lg backdrop-blur-md border border-white/10"
                        >
                          {" "}
                          {t}{" "}
                        </span>
                      ))}{" "}
                    </div>{" "}
                    <div className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-900 items-center justify-center flex-shrink-0 ml-4">
                      {" "}
                      <ArrowUpRight size={20} />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 5.5. Comparison Section */}{" "}
        <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
          {" "}
          <div className="text-center mb-16 md:mb-20">
            {" "}
            <Badge className="bg-blue-50 text-[#2563e8] border-blue-200 mb-4">
              Почему мы
            </Badge>{" "}
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
              Сравнение
            </h2>{" "}
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
              {" "}
              Наглядная таблица, показывающая, почему индивидуальная разработка
              под ключ надежнее и выгоднее в долгосрочной перспективе.{" "}
            </p>{" "}
          </div>{" "}
          <div className="overflow-x-auto pb-8">
            {" "}
            <div className="min-w-[800px] bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {" "}
              <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
                {" "}
                <div className="p-6 font-medium text-slate-500 text-sm uppercase tracking-wider">
                  Критерий
                </div>{" "}
                <div className="p-6 font-bold text-slate-900 text-center border-l border-slate-200 text-lg">
                  Студия (Мы)
                </div>{" "}
                <div className="p-6 font-medium text-slate-600 text-center border-l border-slate-200">
                  Фрилансеры
                </div>{" "}
                <div className="p-6 font-medium text-slate-600 text-center border-l border-slate-200">
                  Конструкторы
                </div>{" "}
              </div>{" "}
              <div className="divide-y divide-slate-100">
                {" "}
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-4">
                    {" "}
                    <div className="p-6 flex items-center text-slate-700 font-medium">
                      {row.feature}
                    </div>{" "}
                    <div className="p-6 border-l border-slate-100 flex items-center justify-center bg-blue-50/30">
                      {" "}
                      {row.us === true ? (
                        <div className="w-8 h-8 rounded-full bg-[#2563e8] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                          {" "}
                          <Check size={18} strokeWidth={3} />{" "}
                        </div>
                      ) : (
                        <span className="text-slate-400 font-medium">
                          {row.us}
                        </span>
                      )}{" "}
                    </div>{" "}
                    <div className="p-6 border-l border-slate-100 flex items-center justify-center">
                      {" "}
                      {row.freelancer === true ? (
                        <Check size={24} className="text-slate-400" />
                      ) : row.freelancer === false ? (
                        <X size={24} className="text-slate-300" />
                      ) : (
                        <span className="text-slate-500 font-medium px-3 py-1 bg-slate-100 rounded-full text-sm">
                          {row.freelancer}
                        </span>
                      )}{" "}
                    </div>{" "}
                    <div className="p-6 border-l border-slate-100 flex items-center justify-center">
                      {" "}
                      {row.builder === true ? (
                        <Check size={24} className="text-slate-400" />
                      ) : row.builder === false ? (
                        <X size={24} className="text-slate-300" />
                      ) : (
                        <span className="text-slate-500 font-medium px-3 py-1 bg-slate-100 rounded-full text-sm">
                          {row.builder}
                        </span>
                      )}{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 6. Rich Pricing */}{" "}
        <section
          id="pricing"
          className="py-20 md:py-32 bg-slate-50 border-y border-slate-200 overflow-hidden"
        >
          {" "}
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            {" "}
            <div className="text-center mb-16 md:mb-20">
              {" "}
              <Badge className="bg-white text-[#2563e8] border-blue-200 mb-4 shadow-sm">
                Инвестиции
              </Badge>{" "}
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
                Стоимость разработки
              </h2>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {" "}
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-[40px] border ${plan.popular ? "border-[#2563e8] shadow-2xl shadow-blue-500/10" : "border-slate-200 shadow-sm"} p-8 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50`}
                >
                  {" "}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563e8] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-1.5 md:py-2 px-4 md:px-6 rounded-full shadow-lg whitespace-nowrap">
                      {" "}
                      Оптимальный выбор{" "}
                    </div>
                  )}{" "}
                  <div className="flex justify-between items-start mb-6">
                    {" "}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      {plan.title}
                    </h3>{" "}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 ml-4">
                      {" "}
                      {i === 0 ? (
                        <LayoutTemplate size={20} />
                      ) : (
                        <Code2 size={20} />
                      )}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="mb-8 pb-8 border-b border-slate-100">
                    {" "}
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                      {plan.price}
                    </div>{" "}
                    <div className="flex items-center gap-2 text-slate-500 text-xs md:text-sm">
                      {" "}
                      <Clock size={14} /> Срок: {plan.time}{" "}
                    </div>{" "}
                  </div>{" "}
                  <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow">
                    {" "}
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        {" "}
                        <div className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#2563e8]">
                          {" "}
                          <Check size={10} strokeWidth={3} />{" "}
                        </div>{" "}
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {feat}
                        </span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                  <a
                    href="#contact"
                    className={`w-full py-3 md:py-4 rounded-xl font-medium flex items-center justify-center ${plan.popular ? "bg-[#2563e8] text-white shadow-lg shadow-blue-500/25 " : "bg-slate-50 text-slate-900 border border-slate-200 "}`}
                  >
                    {" "}
                    Заказать сайт{" "}
                  </a>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 7. FAQ & Contact Footer */}{" "}
        <footer
          id="contact"
          className="bg-slate-900 text-white pt-20 md:pt-32 pb-8 md:pb-12 relative overflow-hidden"
        >
          {" "}
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />{" "}
          <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#2563e8] rounded-full blur-[150px] md:blur-[200px] opacity-20 pointer-events-none" />{" "}
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
              {" "}
              {/* FAQ Section */}{" "}
              <div>
                {" "}
                <Badge className="bg-white/10 text-white border-white/20 mb-6">
                  F.A.Q.
                </Badge>{" "}
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-8 md:mb-10">
                  Частые вопросы
                </h2>{" "}
                <div className="space-y-3 md:space-y-4">
                  {" "}
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}{" "}
                </div>{" "}
              </div>{" "}
              {/* Contact Form */}{" "}
              <div className="bg-white/5 border border-white/10 rounded-[32px] md:rounded-[40px] p-6 md:p-10 backdrop-blur-md">
                {" "}
                <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-2">
                  Начать проект
                </h2>{" "}
                <p className="text-slate-400 text-sm md:text-base mb-6 md:mb-8">
                  Оставьте заявку, обсудим задачу и рассчитаем смету.
                </p>{" "}
                <div className="w-full overflow-hidden rounded-xl bg-white/5">
                  {" "}
                  <iframe
                    src="https://forms.yandex.ru/cloud/68e6556e5056905ef4e08d8b?iframe=1"
                    frameBorder="0"
                    name="ya-form-68e6556e5056905ef4e08d8b"
                    className="w-full min-h-[600px]"
                  ></iframe>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Footer Bottom */}{" "}
            <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              {" "}
              <div className="flex flex-col items-center md:items-start gap-1">
                {" "}
                <div className="font-display font-bold text-xl md:text-2xl tracking-[-0.05em] text-white flex items-center">
                  {" "}
                  Tebve{" "}
                </div>{" "}
                <div className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {" "}
                  Разработка сайтов под ключ{" "}
                </div>{" "}
              </div>{" "}
              <div className="text-xs md:text-sm text-slate-500 text-center md:text-right">
                {" "}
                © 2026 Все права защищены.{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </footer>{" "}
      </main>{" "}
      {/* Project Modal */}{" "}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          {" "}
          <div
            className="bg-white rounded-2xl overflow-hidden w-full h-full max-w-[1400px] max-h-[90vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex justify-between items-center flex-shrink-0">
              {" "}
              <div className="flex items-center gap-3">
                {" "}
                <div className="flex gap-1.5">
                  {" "}
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>{" "}
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>{" "}
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>{" "}
                </div>{" "}
                <div className="bg-white px-3 py-1 rounded-md text-xs font-mono text-slate-500 border border-slate-200 flex items-center gap-2">
                  {" "}
                  <Lock size={12} className="text-slate-400" />{" "}
                  {selectedProject.domain}{" "}
                </div>{" "}
              </div>{" "}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600"
              >
                {" "}
                ✕{" "}
              </button>{" "}
            </div>{" "}
            <div className="flex-1 w-full relative bg-white overflow-hidden">
              {" "}
              <iframe
                src={selectedProject.projectUrl}
                className="absolute inset-0 w-full h-full border-none"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
}
const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300 hover:bg-white/10">
      {" "}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 md:px-6 py-4 md:py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors duration-300"
      >
        {" "}
        <span className="text-base md:text-lg font-medium pr-4 md:pr-8">
          {question}
        </span>{" "}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-[#2563e8] text-white rotate-180" : "bg-white/10 text-slate-400"}`}
        >
          {" "}
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />{" "}
        </div>{" "}
      </button>{" "}
      {isOpen && (
        <div className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          {" "}
          <div className="px-4 md:px-6 pb-4 md:pb-5 text-slate-400 font-light leading-relaxed border-t border-white/5 pt-3 md:pt-4 text-sm md:text-base">
            {" "}
            {answer}{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};
