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
    { id: 'accessories', name: 'Расходные материалы', icon: 'Package' }
  ];

  const products = [
    {
      id: 1,
      name: 'Дрель ударная профессиональная',
      category: 'power-tools',
      price: 8900,
      oldPrice: 12000,
      image: '/img/fd0cc75c-a830-488a-a794-fe2518fe9c04.jpg',
      rating: 4.8,
      inStock: true,
      discount: 25
    },
    {
      id: 2,
      name: 'Бензопила STIHL MS 180',
      category: 'chainsaws', 
      price: 15500,
      oldPrice: 18000,
      image: '/img/c8a886ee-48c7-4022-a347-9cc5da2dc52f.jpg',
      rating: 4.9,
      inStock: true,
      discount: 14
    },
    {
      id: 3,
      name: 'Комплект расходников для ремонта',
      category: 'accessories',
      price: 2300,
      oldPrice: null,
      image: '/img/15eda842-5c24-4d88-9685-80339dee35df.jpg',
      rating: 4.6,
      inStock: true,
      discount: null
    },
    {
      id: 4,
      name: 'Болгарка угловая 125мм',
      category: 'power-tools',
      price: 4200,
      oldPrice: 5500,
      image: '/img/fd0cc75c-a830-488a-a794-fe2518fe9c04.jpg',
      rating: 4.7,
      inStock: false,
      discount: 24
    },
    {
      id: 5,
      name: 'Цепь для бензопилы 18"',
      category: 'accessories',
      price: 890,
      oldPrice: null,
      image: '/img/15eda842-5c24-4d88-9685-80339dee35df.jpg',
      rating: 4.5,
      inStock: true,
      discount: null
    },
    {
      id: 6,
      name: 'Перфоратор SDS-plus 800Вт',
      category: 'power-tools',
      price: 6700,
      oldPrice: 8900,
      image: '/img/fd0cc75c-a830-488a-a794-fe2518fe9c04.jpg',
      rating: 4.8,
      inStock: true,
      discount: 25
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
            <h1 className="text-xl font-bold text-foreground">ИнструментСервис</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
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
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-50 to-orange-50 py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Всё для ремонта 
              <span className="text-primary"> электроинструмента</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Профессиональные инструменты, запчасти и расходные материалы для ремонта электроинструмента, бензопил и садовой техники
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                Перейти в каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block opacity-10">
          <div className="grid grid-cols-2 gap-4 h-full p-8">
            <Icon name="Drill" className="h-16 w-16 text-primary" />
            <Icon name="Wrench" className="h-16 w-16 text-orange-600" />
            <Icon name="Zap" className="h-16 w-16 text-blue-600" />
            <Icon name="Settings" className="h-16 w-16 text-green-600" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 bg-background">
        <div className="container">
          <h3 className="text-3xl font-bold text-center mb-12">Каталог товаров</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? "default" : "outline"}
                onClick={() => setCurrentCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Icon name={category.icon as any} className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        -{product.discount}%
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary">Нет в наличии</Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.rating})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    {product.inStock ? 'В корзину' : 'Нет в наличии'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-muted-foreground">Доставим заказ по Москве за 1-2 дня, по России до 7 дней</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-muted-foreground">Официальная гарантия на все товары от производителя</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Техподдержка 24/7</h4>
              <p className="text-muted-foreground">Консультации специалистов по подбору и ремонту</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <span className="text-lg">info@instrumentservice.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span className="text-lg">Москва, ул. Инструментальная, 15</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  <span className="text-lg">Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">Обратная связь</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Ваш вопрос" 
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button className="w-full">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="h-6 w-6" />
                <span className="font-bold">ИнструментСервис</span>
              </div>
              <p className="text-gray-300">Профессиональный ремонт и запчасти для электроинструмента</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Электроинструмент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бензопилы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Расходные материалы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стяжное оборудование</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@instrumentservice.ru</p>
                <p>Москва, ул. Инструментальная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ИнструментСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;