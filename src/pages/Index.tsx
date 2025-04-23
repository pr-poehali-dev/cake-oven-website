import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Utensils } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD] py-10">
      {/* Заголовок */}
      <header className="container mx-auto text-center mb-8">
        <h1 className="text-5xl font-bold text-[#8B5CF6] mb-2">Как испечь идеальный пирог</h1>
        <p className="text-xl text-[#6E59A5]">Простой рецепт для начинающих пекарей</p>
      </header>

      <div className="container mx-auto max-w-4xl">
        {/* Общая информация */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#7E69AB]" />
            <span>Время приготовления: 60 минут</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#7E69AB]" />
            <span>Сложность: легкая</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#7E69AB]" />
            <span>Порций: 8</span>
          </div>
        </div>

        {/* Ингредиенты */}
        <Card className="mb-8 shadow-lg border-[#D6BCFA]">
          <CardHeader className="bg-[#E5DEFF] rounded-t-lg">
            <CardTitle className="text-2xl text-[#1A1F2C]">Ингредиенты</CardTitle>
            <CardDescription>Все что вам понадобится</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="grid gap-2 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">1</span>
                <span>200 г муки</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">2</span>
                <span>100 г сливочного масла</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">3</span>
                <span>150 г сахара</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">4</span>
                <span>2 яйца</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">5</span>
                <span>1 чайная ложка разрыхлителя</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">6</span>
                <span>щепотка соли</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">7</span>
                <span>ваниль по вкусу</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#9b87f5] flex items-center justify-center text-white">8</span>
                <span>начинка по выбору (фрукты, ягоды)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Инструкция */}
        <Card className="mb-8 shadow-lg border-[#D6BCFA]">
          <CardHeader className="bg-[#E5DEFF] rounded-t-lg">
            <CardTitle className="text-2xl text-[#1A1F2C]">Шаги приготовления</CardTitle>
            <CardDescription>Следуйте инструкции для идеального результата</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-6">
              <li>
                <div className="font-medium text-lg mb-1 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#9b87f5] flex items-center justify-center text-white mr-2">1</span>
                  Подготовка ингредиентов
                </div>
                <p className="text-gray-600 ml-10">Достаньте все ингредиенты из холодильника за 30 минут до начала. Масло должно быть мягким.</p>
              </li>
              
              <Separator className="bg-[#FDE1D3]" />
              
              <li>
                <div className="font-medium text-lg mb-1 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#9b87f5] flex items-center justify-center text-white mr-2">2</span>
                  Приготовление теста
                </div>
                <p className="text-gray-600 ml-10">Смешайте масло с сахаром до образования кремообразной массы. Добавьте яйца, взбивая после каждого.</p>
              </li>
              
              <Separator className="bg-[#FDE1D3]" />
              
              <li>
                <div className="font-medium text-lg mb-1 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#9b87f5] flex items-center justify-center text-white mr-2">3</span>
                  Добавление сухих ингредиентов
                </div>
                <p className="text-gray-600 ml-10">Смешайте муку, разрыхлитель и соль, затем постепенно добавляйте в масляную смесь.</p>
              </li>
              
              <Separator className="bg-[#FDE1D3]" />
              
              <li>
                <div className="font-medium text-lg mb-1 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#9b87f5] flex items-center justify-center text-white mr-2">4</span>
                  Выпекание
                </div>
                <p className="text-gray-600 ml-10">Выложите тесто в смазанную форму. Выпекайте при 180°C примерно 35-40 минут, проверяя готовность деревянной шпажкой.</p>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Советы */}
        <Card className="mb-8 shadow-lg border-[#D6BCFA]">
          <CardHeader className="bg-[#E5DEFF] rounded-t-lg">
            <CardTitle className="text-2xl text-[#1A1F2C]">Полезные советы</CardTitle>
            <CardDescription>Маленькие хитрости для идеального пирога</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#9b87f5] text-xl">✨</span>
                <span>Не открывайте духовку первые 20 минут выпекания, чтобы пирог не осел</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b87f5] text-xl">✨</span>
                <span>Для более влажного пирога можно добавить 2-3 столовые ложки сметаны или йогурта</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b87f5] text-xl">✨</span>
                <span>Перед нарезкой дайте пирогу полностью остыть</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Подвал */}
        <footer className="text-center text-sm text-[#8E9196] mt-12">
          <p>Приятного аппетита! 🍰</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
