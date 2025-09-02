import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 3]);
  
  const lessons = [
    {
      id: 1,
      title: "Основы русского языка",
      description: "Изучение фонетики, морфологии и синтаксиса",
      duration: "45 мин",
      difficulty: "Легко",
      category: "Грамматика",
      icon: "BookOpen"
    },
    {
      id: 2, 
      title: "Пословицы и поговорки",
      description: "Мудрость народа в кратких выражениях",
      duration: "30 мин",
      difficulty: "Средне",
      category: "Культура",
      icon: "Quote"
    },
    {
      id: 3,
      title: "Сочинение: искусство слова",
      description: "Учимся выражать мысли красиво и точно",
      duration: "60 мин", 
      difficulty: "Сложно",
      category: "Творчество",
      icon: "PenTool"
    },
    {
      id: 4,
      title: "Литературные жанры",
      description: "От эпоса до лирики: многообразие форм",
      duration: "40 мин",
      difficulty: "Средне", 
      category: "Литература",
      icon: "Library"
    }
  ];

  const overallProgress = (completedLessons.length / lessons.length) * 100;

  const toggleLessonComplete = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легко': return 'bg-emerald text-white';
      case 'Средне': return 'bg-yellow-500 text-white';
      case 'Сложно': return 'bg-burgundy text-white';
      default: return 'bg-academic-gray text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-serif">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold font-sans text-primary">
                ОБРАЗОВАТЕЛЬНЫЙ ПОРТАЛ
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-academic-gray hover:text-primary transition-colors">
                Уроки
              </a>
              <a href="#" className="text-academic-gray hover:text-primary transition-colors">
                Прогресс
              </a>
              <a href="#" className="text-academic-gray hover:text-primary transition-colors">
                Профиль
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4 font-sans">
            Добро пожаловать в мир знаний
          </h2>
          <p className="text-lg text-academic-gray max-w-2xl mx-auto leading-relaxed">
            Изучайте русский язык через интерактивные уроки с отслеживанием прогресса. 
            Как гласит пословица: "Хорошая речь слаще мёда" — откройте для себя красоту родного языка.
          </p>
        </div>

        {/* Progress Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-sans">
                <Icon name="TrendingUp" size={24} className="text-secondary" />
                <span>Ваш прогресс обучения</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Общий прогресс</span>
                    <span className="text-sm text-academic-gray">{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-emerald/10 rounded-lg">
                    <div className="text-2xl font-bold text-emerald">{completedLessons.length}</div>
                    <div className="text-sm text-academic-gray">Завершено уроков</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{lessons.length - completedLessons.length}</div>
                    <div className="text-sm text-academic-gray">Осталось уроков</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-sans">
                <Icon name="Award" size={24} className="text-yellow-500" />
                <span>Достижения</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Первые шаги</p>
                    <p className="text-sm text-academic-gray">Завершен первый урок</p>
                  </div>
                </div>
                
                {completedLessons.length >= 2 && (
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Star" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Прилежный ученик</p>
                      <p className="text-sm text-academic-gray">Завершено 2+ урока</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lessons Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6 font-sans">Доступные уроки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <Card 
                  key={lesson.id} 
                  className={`transition-all duration-300 hover:shadow-lg animate-fade-in ${
                    isCompleted ? 'ring-2 ring-emerald/20' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg ${isCompleted ? 'bg-emerald' : 'bg-primary'}`}>
                          <Icon 
                            name={lesson.icon as any} 
                            size={24} 
                            className="text-white" 
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-sans">{lesson.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {lesson.category}
                          </Badge>
                        </div>
                      </div>
                      {isCompleted && (
                        <Icon name="CheckCircle" size={24} className="text-emerald" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-academic-gray mb-4 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-academic-gray">
                        <span className="flex items-center space-x-1">
                          <Icon name="Clock" size={16} />
                          <span>{lesson.duration}</span>
                        </span>
                        <Badge className={getDifficultyColor(lesson.difficulty)}>
                          {lesson.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        className="flex-1 font-sans"
                        variant={isCompleted ? "secondary" : "default"}
                      >
                        {isCompleted ? "Повторить урок" : "Начать урок"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleLessonComplete(lesson.id)}
                      >
                        <Icon 
                          name={isCompleted ? "X" : "Check"} 
                          size={16} 
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quote Section */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white animate-fade-in">
          <CardContent className="p-8 text-center">
            <Icon name="Quote" size={48} className="mx-auto mb-4 opacity-70" />
            <blockquote className="text-2xl font-medium mb-4 italic">
              "Хорошая речь слаще мёда"
            </blockquote>
            <p className="text-lg opacity-90">
              Народная мудрость о силе красивого и правильного слова
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;