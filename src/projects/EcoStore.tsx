import React, { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  User,
  Heart,
  MapPin,
  Star,
  Percent,
  ChevronRight,
  Plus,
  Flame,
  Clock,
  ShieldCheck,
  Instagram,
  Facebook,
} from "lucide-react";
export default function EcoStore() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const allProducts = [
    {
      name: "Томаты Бакинские розовые сладкие",
      category: "Овощи",
      price: "450 ₽",
      oldPrice: "550 ₽",
      weight: "1 кг",
      badge: "-18%",
      badgeColor: "bg-red-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/400px-Tomato_je.jpg",
      rating: 4.9,
      reviews: 128,
    },
    {
      name: "Сыр Камамбер с белой плесенью",
      category: "Молочные",
      price: "320 ₽",
      oldPrice: null,
      weight: "150 г",
      badge: "Новинка",
      badgeColor: "bg-blue-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/400px-Cheese_platter.jpg",
      rating: 5.0,
      reviews: 45,
    },
    {
      name: "Хлеб ремесленный на закваске",
      category: "Хлеб",
      price: "180 ₽",
      oldPrice: null,
      weight: "400 г",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/400px-Korb_mit_Br%C3%B6tchen.JPG",
      rating: 4.8,
      reviews: 312,
    },
    {
      name: "Говядина вырезка охлажденная",
      category: "Мясо",
      price: "1 200 ₽",
      oldPrice: "1 500 ₽",
      weight: "1 кг",
      badge: "-20%",
      badgeColor: "bg-red-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Standing-rib-roast.jpg/400px-Standing-rib-roast.jpg",
      rating: 4.7,
      reviews: 89,
    },
    {
      name: "Молоко цельное фермерское 3.2-4.5%",
      category: "Молочные",
      price: "120 ₽",
      oldPrice: null,
      weight: "1 л",
      badge: "Фермерское",
      badgeColor: "bg-green-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/400px-Glass_of_Milk_%2833657535532%29.jpg",
      rating: 4.9,
      reviews: 504,
    },
    {
      name: "Мед цветочный натуральный",
      category: "Другое",
      price: "650 ₽",
      oldPrice: null,
      weight: "500 г",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/400px-Runny_hunny.jpg",
      rating: 4.9,
      reviews: 201,
    },
    {
      name: "Курица домашняя (целая)",
      category: "Мясо",
      price: "550 ₽",
      oldPrice: null,
      weight: "1.5 кг",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg/400px-Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg",
      rating: 4.8,
      reviews: 156,
    },
    {
      name: "Творог 9% фермерский",
      category: "Молочные",
      price: "210 ₽",
      oldPrice: null,
      weight: "300 г",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Cottagecheese200px.jpg/400px-Cottagecheese200px.jpg",
      rating: 4.7,
      reviews: 98,
    },
    {
      name: "Яблоки Гренни Смит",
      category: "Овощи",
      price: "150 ₽",
      oldPrice: "200 ₽",
      weight: "1 кг",
      badge: "-25%",
      badgeColor: "bg-red-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Granny_smith_and_cross_section.jpg/400px-Granny_smith_and_cross_section.jpg",
      rating: 4.5,
      reviews: 234,
    },
    {
      name: "Сметана 20% фермерская",
      category: "Молочные",
      price: "130 ₽",
      oldPrice: null,
      weight: "250 г",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bowl_of_chili_with_sour_cream_and_cheese.jpg/400px-Bowl_of_chili_with_sour_cream_and_cheese.jpg",
      rating: 4.9,
      reviews: 76,
    },
    {
      name: "Огурцы короткоплодные",
      category: "Овощи",
      price: "190 ₽",
      oldPrice: null,
      weight: "600 г",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/400px-ARS_cucumber.jpg",
      rating: 4.8,
      reviews: 62,
    },
    {
      name: "Свинина шея без кости",
      category: "Мясо",
      price: "580 ₽",
      oldPrice: "650 ₽",
      weight: "1 кг",
      badge: "-10%",
      badgeColor: "bg-red-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Schweinebauch-2.jpg/400px-Schweinebauch-2.jpg",
      rating: 4.6,
      reviews: 41,
    },
    {
      name: "Картофель молодой",
      category: "Овощи",
      price: "85 ₽",
      oldPrice: null,
      weight: "1 кг",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/400px-Patates.jpg",
      rating: 4.7,
      reviews: 156,
    },
    {
      name: "Масло сливочное 82.5%",
      category: "Молочные",
      price: "240 ₽",
      oldPrice: "290 ₽",
      weight: "200 г",
      badge: "-17%",
      badgeColor: "bg-red-500",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/400px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
      rating: 4.9,
      reviews: 345,
    },
    {
      name: "Багет французский",
      category: "Хлеб",
      price: "95 ₽",
      oldPrice: null,
      weight: "250 г",
      badge: null,
      badgeColor: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/400px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg",
      rating: 4.8,
      reviews: 89,
    },
  ];
  const filteredProducts =
    activeFilter === "Все"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans overflow-x-hidden">
      {" "}
      {/* 1. Header (Marketplace Style) */}{" "}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {" "}
        {/* Top Bar */}{" "}
        <div className="bg-gray-100 text-gray-500 text-xs py-1.5 px-4 hidden md:block">
          {" "}
          <div className="max-w-[1600px] mx-auto flex justify-between items-center">
            {" "}
            <div className="flex items-center gap-6">
              {" "}
              <span className="flex items-center gap-1 cursor-pointer">
                <MapPin size={12} /> Москва и область
              </span>{" "}
              <span className="flex items-center gap-1">
                <Clock size={12} /> Доставка от 30 минут
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-4">
              {" "}
              <a href="#">Стать продавцом</a> <a href="#">Помощь</a>{" "}
              <a href="#">8 (800) 555-35-35</a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Main Header */}{" "}
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between gap-4 md:gap-8">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <button className="md:hidden text-gray-700">
              {" "}
              <Menu size={24} />{" "}
            </button>{" "}
            <div className="text-2xl md:text-3xl font-black tracking-tight text-green-600 flex items-center gap-1">
              {" "}
              <LeafIcon /> ФЕРМЕР
              <span className="text-orange-500">МАРКЕТ</span>{" "}
            </div>{" "}
          </div>{" "}
          <a
            href="#catalog"
            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold shrink-0"
          >
            {" "}
            <Menu size={20} /> Каталог{" "}
          </a>{" "}
          <div className="flex-1 hidden md:flex relative">
            {" "}
            <input
              type="text"
              placeholder="Найти свежие продукты, фермеров, бренды..."
              className="w-full bg-gray-100 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl py-2.5 pl-4 pr-12 outline-none"
            />{" "}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {" "}
              <Search size={20} />{" "}
            </button>{" "}
          </div>{" "}
          <div className="flex items-center gap-2 md:gap-6 shrink-0">
            {" "}
            <a
              href="#login"
              className="hidden md:flex flex-col items-center text-gray-500"
            >
              {" "}
              <User size={24} />{" "}
              <span className="text-[10px] font-medium mt-1">Войти</span>{" "}
            </a>{" "}
            <a
              href="#favorites"
              className="hidden md:flex flex-col items-center text-gray-500 relative"
            >
              {" "}
              <Heart size={24} />{" "}
              <span className="text-[10px] font-medium mt-1">Избранное</span>{" "}
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>{" "}
            </a>{" "}
            <a
              href="#cart"
              className="flex flex-col items-center text-gray-500 relative"
            >
              {" "}
              <ShoppingCart
                size={24}
                className="text-gray-800 md:text-gray-500"
              />{" "}
              <span className="text-[10px] font-medium mt-1 hidden md:block">
                Корзина
              </span>{" "}
              <span className="absolute -top-1 -right-1 md:-right-2 bg-green-600 text-white text-[10px] font-bold px-1.5 h-4 rounded-full flex items-center justify-center">
                1 250 ₽
              </span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* Mobile Search */}{" "}
        <div className="md:hidden px-4 pb-3">
          {" "}
          <div className="relative">
            {" "}
            <input
              type="text"
              placeholder="Поиск продуктов..."
              className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 outline-none text-sm"
            />{" "}
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      {/* Promo Marquee */}
      <div className="bg-green-600 py-2 overflow-hidden border-y border-green-700">
        <div className="flex whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white/90 animate-[marquee_30s_linear_infinite]">
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Бесплатная доставка от 2000 ₽
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Только свежие продукты
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Прямо с грядки
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Поддержка фермеров
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Бесплатная доставка от 2000 ₽
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Только свежие продукты
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Прямо с грядки
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Flame size={12} /> Поддержка фермеров
          </span>
        </div>
      </div>
      <main className="max-w-[1600px] mx-auto px-4 py-6">
        {" "}
        {/* 2. Hero Banners Grid */}{" "}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {" "}
          <div className="md:col-span-2 bg-green-100 rounded-2xl p-6 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[200px] md:min-h-[300px]">
            {" "}
            <div className="relative z-10 max-w-sm bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/40 shadow-xl shadow-green-900/5">
              {" "}
              <span className="bg-orange-500 text-white text-[10px] md:text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block">
                Сезонное предложение
              </span>{" "}
              <h2 className="text-2xl md:text-5xl font-black text-green-900 mb-3 md:mb-4 leading-tight">
                Свежие овощи
                <br />с грядки
              </h2>{" "}
              <p className="text-green-800 mb-4 md:mb-6 font-medium text-sm md:text-base">
                Скидки до 30% на урожай этой недели от локальных фермеров.
              </p>{" "}
              <a
                href="#catalog"
                className="inline-block text-center bg-green-600 text-white px-6 py-3 rounded-xl font-bold w-full md:w-fit text-sm md:text-base"
              >
                {" "}
                Заказать сейчас{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col gap-4">
            {" "}
            <div className="bg-orange-100 rounded-2xl p-6 relative overflow-hidden flex-1 flex flex-col justify-center">
              {" "}
              <div className="relative z-10 max-w-[60%]">
                {" "}
                <h3 className="text-xl font-black text-orange-900 mb-2">
                  Фермерское мясо
                </h3>{" "}
                <p className="text-orange-800 text-sm font-medium">
                  Свежая поставка каждый день
                </p>{" "}
              </div>{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/FoodMeat.jpg/400px-FoodMeat.jpg"
                alt="Meat"
                className="absolute -right-4 -bottom-4 w-1/2 h-full object-cover opacity-90 rounded-tl-full"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />{" "}
            </div>{" "}
            <div className="bg-blue-100 rounded-2xl p-6 relative overflow-hidden flex-1 flex flex-col justify-center">
              {" "}
              <div className="relative z-10 max-w-[60%]">
                {" "}
                <h3 className="text-xl font-black text-blue-900 mb-2">
                  Молочные продукты
                </h3>{" "}
                <p className="text-blue-800 text-sm font-medium">
                  От коров на свободном выпасе
                </p>{" "}
              </div>{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/400px-Glass_of_Milk_%2833657535532%29.jpg"
                alt="Milk"
                className="absolute -right-4 -bottom-4 w-1/2 h-full object-cover opacity-90 rounded-tl-full"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 3. Categories (Horizontal Scroll) */}{" "}
        <section id="catalog" className="mb-12">
          {" "}
          <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
            Популярные категории{" "}
            <ChevronRight size={24} className="text-gray-400" />
          </h2>{" "}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
            {" "}
            {[
              {
                name: "Овощи и зелень",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Marketvegetables.jpg/200px-Marketvegetables.jpg",
                color: "bg-green-100",
              },
              {
                name: "Фрукты и ягоды",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Fruit_Platter-_Seasonal_Fruits.jpg/200px-Fruit_Platter-_Seasonal_Fruits.jpg",
                color: "bg-red-100",
              },
              {
                name: "Мясо и птица",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/FoodMeat.jpg/200px-FoodMeat.jpg",
                color: "bg-orange-100",
              },
              {
                name: "Молоко и сыр",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/200px-Glass_of_Milk_%2833657535532%29.jpg",
                color: "bg-blue-100",
              },
              {
                name: "Хлеб и выпечка",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/200px-Korb_mit_Br%C3%B6tchen.JPG",
                color: "bg-yellow-100",
              },
              {
                name: "Рыба и икра",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg/200px-Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
                color: "bg-cyan-100",
              },
              {
                name: "Бакалея",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Westside_Market_in_Manhattan%2C_NYC_IMG_5615.JPG/200px-Westside_Market_in_Manhattan%2C_NYC_IMG_5615.JPG",
                color: "bg-amber-100",
              },
              {
                name: "Напитки",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/200px-Glass_of_Milk_%2833657535532%29.jpg",
                color: "bg-purple-100",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 min-w-[100px] md:min-w-[120px] snap-start cursor-pointer group"
              >
                {" "}
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${c.color} p-1 overflow-hidden `}
                >
                  {" "}
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />{" "}
                </div>{" "}
                <span className="text-xs md:text-sm font-medium text-center leading-tight">
                  {c.name}
                </span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 4. Products Grid (Hits) */}{" "}
        <section id="hits" className="mb-16">
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
            {" "}
            <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2">
              <Flame className="text-orange-500" /> Хиты продаж
            </h2>{" "}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {" "}
              {["Все", "Овощи", "Мясо", "Молочные", "Хлеб"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 border rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === f ? "bg-green-600 border-green-600 text-white" : "bg-white border-gray-200 text-gray-700 "}`}
                >
                  {" "}
                  {f}{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {" "}
            {filteredProducts.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 5. Features / Trust */}{" "}
        <section className="mb-16 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {" "}
            {[
              {
                icon: <ShieldCheck size={32} className="text-green-500 mb-4" />,
                title: "Строгий контроль",
                desc: "Проверяем сертификаты и качество каждой партии",
              },
              {
                icon: <Clock size={32} className="text-blue-500 mb-4" />,
                title: "Свежесть гарантирована",
                desc: "Прямые поставки от фермеров каждое утро",
              },
              {
                icon: <Percent size={32} className="text-orange-500 mb-4" />,
                title: "Честные цены",
                desc: "Работаем без посредников, напрямую с производителями",
              },
              {
                icon: <Heart size={32} className="text-red-500 mb-4" />,
                title: "Возврат без проблем",
                desc: "Вернем деньги, если вас не устроит качество",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="pt-6 md:pt-0 md:px-6 first:pt-0 first:px-0"
              >
                {" "}
                {f.icon}{" "}
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>{" "}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 6. Products Grid (Discounts) */}{" "}
        <section id="discounts" className="mb-16">
          {" "}
          <div className="flex justify-between items-end mb-6">
            {" "}
            <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2">
              <Percent className="text-red-500" /> Выгодно сегодня
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {" "}
            {[
              {
                name: "Авокадо Хасс спелое",
                price: "390 ₽",
                oldPrice: "590 ₽",
                weight: "2 шт",
                badge: "-33%",
                badgeColor: "bg-red-500",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/400px-Persea_americana_fruit_2.JPG",
                rating: 4.8,
                reviews: 215,
              },
              {
                name: "Яйцо куриное С0 (Деревенское)",
                price: "110 ₽",
                oldPrice: "140 ₽",
                weight: "10 шт",
                badge: "-21%",
                badgeColor: "bg-red-500",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Fried_Egg_2.jpg/400px-Fried_Egg_2.jpg",
                rating: 4.9,
                reviews: 840,
              },
              {
                name: "Клубника свежая (Краснодар)",
                price: "450 ₽",
                oldPrice: "600 ₽",
                weight: "500 г",
                badge: "-25%",
                badgeColor: "bg-red-500",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/400px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
                rating: 4.6,
                reviews: 112,
              },
              {
                name: "Масло сливочное 82.5%",
                price: "240 ₽",
                oldPrice: "290 ₽",
                weight: "200 г",
                badge: "-17%",
                badgeColor: "bg-red-500",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/400px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
                rating: 4.9,
                reviews: 345,
              },
              {
                name: "Форель радужная охлажденная",
                price: "890 ₽",
                oldPrice: "1 100 ₽",
                weight: "1 кг",
                badge: "-19%",
                badgeColor: "bg-red-500",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg/400px-Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_%2844856596864%29.jpg",
                rating: 4.7,
                reviews: 67,
              },
            ].map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 7. Brands / Farmers */}{" "}
        <section id="brands" className="mb-16">
          {" "}
          <h2 className="text-2xl font-black mb-6">
            Наши фермеры и бренды
          </h2>{" "}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {" "}
            {[
              "Фермерское хозяйство «Родные просторы»",
              "Агрохолдинг «Эко-Мир»",
              "Молочная ферма «Зеленый луг»",
              "Сырная мастерская «Альпийские луга»",
              "Мясной двор «Фермерский»",
              "Сады Подмосковья",
            ].map((brand, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-24 cursor-pointer group"
              >
                {" "}
                <span className="font-bold text-gray-400 text-center">
                  {brand}
                </span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      {/* 8. Footer */}{" "}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        {" "}
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {" "}
          <div className="lg:col-span-2">
            {" "}
            <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1 mb-6">
              {" "}
              <LeafIcon /> ФЕРМЕР
              <span className="text-orange-500">МАРКЕТ</span>{" "}
            </div>{" "}
            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              {" "}
              Маркетплейс натуральных продуктов. Мы объединяем локальных
              фермеров и покупателей, ценящих качество и свежесть.{" "}
            </p>{" "}
            <div className="flex gap-4">
              {" "}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
                <Instagram size={18} />
              </div>{" "}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
                <Facebook size={18} />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-white font-bold mb-6">Покупателям</h4>{" "}
            <ul className="space-y-3 text-sm">
              {" "}
              <li>
                <a href="#">Как сделать заказ</a>
              </li>{" "}
              <li>
                <a href="#">Оплата и доставка</a>
              </li>{" "}
              <li>
                <a href="#">Возврат продуктов</a>
              </li>{" "}
              <li>
                <a href="#">Программа лояльности</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-white font-bold mb-6">Партнерам</h4>{" "}
            <ul className="space-y-3 text-sm">
              {" "}
              <li>
                <a href="#">Стать поставщиком</a>
              </li>{" "}
              <li>
                <a href="#">Правила площадки</a>
              </li>{" "}
              <li>
                <a href="#">Реклама на сайте</a>
              </li>{" "}
              <li>
                <a href="#">Личный кабинет</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-white font-bold mb-6">Контакты</h4>{" "}
            <ul className="space-y-3 text-sm">
              {" "}
              <li className="text-xl font-bold text-white">
                8 (800) 555-35-35
              </li>{" "}
              <li className="text-gray-500 text-xs mb-4">
                Ежедневно с 8:00 до 22:00
              </li>{" "}
              <li>
                <a href="mailto:support@farmmarket.ru">support@farmmarket.ru</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-[1600px] mx-auto px-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          {" "}
          <div>© 2026 ФермерМаркет. Все права защищены.</div>{" "}
          <div className="flex gap-6">
            {" "}
            <a href="#">Политика конфиденциальности</a>{" "}
            <a href="#">Пользовательское соглашение</a>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
} // Helper Components
function LeafIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"
        fill="currentColor"
      />{" "}
    </svg>
  );
}
function ProductCard({
  product,
  key,
}: {
  product: any;
  key?: number | string;
}) {
  return (
    <div className="bg-white rounded-2xl p-3 md:p-4 border border-gray-100 relative group flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-green-100">
      {" "}
      {product.badge && (
        <div
          className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-md z-10`}
        >
          {" "}
          {product.badge}{" "}
        </div>
      )}{" "}
      <button className="absolute top-3 right-3 text-gray-300 z-10 hover:text-red-500 transition-colors">
        {" "}
        <Heart size={20} />{" "}
      </button>{" "}
      <div className="aspect-square mb-3 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-2">
        {" "}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />{" "}
      </div>{" "}
      <div className="flex-1 flex flex-col">
        {" "}
        <div className="flex items-center gap-1 text-yellow-400 mb-1">
          {" "}
          <Star size={12} fill="currentColor" />{" "}
          <span className="text-xs font-bold text-gray-700">
            {product.rating}
          </span>{" "}
          <span className="text-[10px] text-gray-400">
            ({product.reviews})
          </span>{" "}
        </div>{" "}
        <h3 className="text-sm font-medium text-gray-900 leading-snug mb-1 line-clamp-2 flex-1">
          {" "}
          {product.name}{" "}
        </h3>{" "}
        <div className="text-xs text-gray-500 mb-3">{product.weight}</div>{" "}
        <div className="mt-auto">
          {" "}
          <div className="flex items-baseline gap-2 mb-3">
            {" "}
            <span className="text-lg md:text-xl font-black text-gray-900">
              {product.price}
            </span>{" "}
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.oldPrice}
              </span>
            )}{" "}
          </div>{" "}
          <a
            href="#cart"
            className="w-full bg-gray-100 text-green-600 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-95"
          >
            {" "}
            <Plus size={18} /> В корзину{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
