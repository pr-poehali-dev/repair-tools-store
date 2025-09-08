import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'power-tools', name: 'Электроинструмент', icon: 'Zap' },
    { id: 'chainsaws', name: 'Бензопилы', icon: 'TreePine' },
    { id: 'hoses', name: 'Шланги', icon: 'Cable' },
    { id: 'belts', name: 'Ремни', icon: 'Link' },
    { id: 'rigging', name: 'Стяжное оборудование', icon: 'Anchor' }
  ];

  const products = [
    {
      id: 1,
      name: 'Щётки угольные для дрели',
      category: 'power-tools',
      price: 450,
      oldPrice: 650,
      image: '/img/2f39aa7f-3371-4bb7-8d6a-8e65d43f22b0.jpg',
      rating: 4.8,
      inStock: true,
      discount: 31,
      description: 'Универсальные щётки для большинства дрелей'
    },
    {
      id: 2,
      name: 'Цепь для бензопилы 18"',
      category: 'chainsaws', 
      price: 1200,
      oldPrice: 1500,
      image: '/img/5465e64d-2250-4b56-8f98-e439d1a84eb6.jpg',
      rating: 4.9,
      inStock: true,
      discount: 20,
      description: 'Профессиональная цепь для пил STIHL, Husqvarna'
    },
    {
      id: 3,
      name: 'Шланг высокого давления 10м',
      category: 'hoses',
      price: 2800,
      oldPrice: null,
      image: '/img/3370e379-3881-4b69-a763-8281a3592a07.jpg',
      rating: 4.6,
      inStock: true,
      discount: null,
      description: 'Армированный шланг для моек высокого давления'
    },
    {
      id: 4,
      name: 'Ремень приводной для УШМ',
      category: 'belts',
      price: 380,
      oldPrice: 520,
      image: '/img/2f39aa7f-3371-4bb7-8d6a-8e65d43f22b0.jpg',
      rating: 4.7,
      inStock: true,
      discount: 27,
      description: 'Клиновидный ремень для угловых шлифмашин'
    },
    {
      id: 5,
      name: 'Стропа текстильная 2т, 3м',
      category: 'rigging',
      price: 890,
      oldPrice: null,
      image: '/img/5465e64d-2250-4b56-8f98-e439d1a84eb6.jpg',
      rating: 4.9,
      inStock: true,
      discount: null,
      description: 'Полиэстеровая стропа с защитными чехлами'
    },
    {
      id: 6,
      name: 'Статор для перфоратора',
      category: 'power-tools',
      price: 3200,
      oldPrice: 4500,
      image: '/img/2f39aa7f-3371-4bb7-8d6a-8e65d43f22b0.jpg',
      rating: 4.8,
      inStock: true,
      discount: 29,
      description: 'Статор для популярных моделей перфораторов'
    },
    {
      id: 7,
      name: 'Шина для бензопилы 16"',
      category: 'chainsaws',
      price: 1650,
      oldPrice: 2100,
      image: '/img/5465e64d-2250-4b56-8f98-e439d1a84eb6.jpg',
      rating: 4.7,
      inStock: false,
      discount: 21,
      description: 'Направляющая шина Oregon, совместимость с STIHL'
    },
    {
      id: 8,
      name: 'Шланг воздушный спиральный 15м',
      category: 'hoses',
      price: 1200,
      oldPrice: null,
      image: '/img/3370e379-3881-4b69-a763-8281a3592a07.jpg',
      rating: 4.5,
      inStock: true,
      discount: null,
      description: 'Полиуретановый шланг для пневмоинструмента'
    },
    {
      id: 9,
      name: 'Талреп крюк-кольцо М12',
      category: 'rigging',
      price: 650,
      oldPrice: 850,
      image: '/img/5465e64d-2250-4b56-8f98-e439d1a84eb6.jpg',
      rating: 4.8,
      inStock: true,
      discount: 24,
      description: 'Талреп с оцинковкой для стяжных работ'
    }
  ];

  const filteredProducts = currentCategory === 'all' 
    ? products 
    : products.filter(p => p.category === currentCategory);

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Wrench" className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-foreground">ИнструментПро</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Search" className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <Icon name="ShoppingCart" className="h-4 w-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 text-xs p-0 flex items-center justify-center">
                  {cartItems}
                </Badge>
              )}
            </Button>
            <Button size="sm">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Всё для ремонта
              <span className="text-orange-400"> инструмента</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Профессиональные запчасти и расходники для электроинструмента, бензопил, стяжного оборудования. 
              Быстрый ремонт, качественные детали, гарантия результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700">
                Перейти в каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-5 hidden lg:block">
          <img 
            src="/img/3370e379-3881-4b69-a763-8281a3592a07.jpg" 
            alt="Tools background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Каталог товаров</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент запчастей и расходных материалов для профессионального ремонта
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? "default" : "outline"}
                onClick={() => setCurrentCategory(category.id)}
                className="flex items-center gap-2 text-base px-6 py-3"
              >
                <Icon name={category.icon as any} className="h-5 w-5" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.discount && (
                      <Badge className="absolute top-3 left-3 bg-red-600 text-white font-semibold px-2 py-1">
                        -{product.discount}%
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="text-lg px-4 py-2">Нет в наличии</Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {(product as any).description}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {product.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full text-base py-3" 
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    {product.inStock ? 'В корзину' : 'Нет в наличии'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наши услуги</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию инструмента
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Ремонт электроинструмента</h4>
              <p className="text-muted-foreground">Дрели, УШМ, перфораторы, лобзики и другой электроинструмент</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TreePine" className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Ремонт бензопил</h4>
              <p className="text-muted-foreground">Профессиональный ремонт всех марок бензопил и мотокос</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Settings" className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Техническое обслуживание</h4>
              <p className="text-muted-foreground">Регулярное ТО для продления срока службы инструмента</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Выездной ремонт</h4>
              <p className="text-muted-foreground">Ремонт крупногабаритного оборудования на объекте</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <h3 className="text-4xl font-bold text-center mb-16">Почему выбирают нас</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Быстрый ремонт</h4>
              <p className="text-muted-foreground text-lg">Стандартный ремонт за 2-3 дня, срочный — в течение дня</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Гарантия 6 месяцев</h4>
              <p className="text-muted-foreground text-lg">Официальная гарантия на все виды работ и запчасти</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Опыт 15+ лет</h4>
              <p className="text-muted-foreground text-lg">Команда профессионалов с большим опытом работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold mb-8">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-slate-400">Звонки принимаем круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold">info@instrumentpro.ru</div>
                    <div className="text-slate-400">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold">Москва, ул. Промышленная, 25</div>
                    <div className="text-slate-400">Работаем Пн-Пт: 8:00-20:00, Сб: 9:00-17:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h4 className="text-2xl font-semibold mb-6 text-slate-900">Заказать обратный звонок</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900"
                />
                <input 
                  type="tel" 
                  placeholder="Номер телефона" 
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900"
                />
                <textarea 
                  placeholder="Опишите проблему с инструментом" 
                  rows={4}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-slate-900"
                ></textarea>
                <Button className="w-full text-lg py-4 bg-orange-600 hover:bg-orange-700">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Заказать звонок
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Wrench" className="h-8 w-8 text-orange-400" />
                <span className="text-xl font-bold">ИнструментПро</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Профессиональный ремонт и продажа запчастей для всех видов инструмента
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-lg">Каталог</h5>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Электроинструмент</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Бензопилы</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Шланги</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Ремни</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Стяжное оборудование</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-lg">Услуги</h5>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Ремонт электроинструмента</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Ремонт бензопил</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Техобслуживание</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Выездной ремонт</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-lg">Контакты</h5>
              <div className="space-y-3 text-slate-300">
                <p className="text-lg">+7 (495) 123-45-67</p>
                <p>info@instrumentpro.ru</p>
                <p>Москва, ул. Промышленная, 25</p>
                <p className="text-sm">Пн-Пт: 8:00-20:00, Сб: 9:00-17:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ИнструментПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;