import { Mail, Phone, FileText, MessageSquare, MapPin, Clock, Calendar, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Ссылки для связи</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">Контактная Информация</h2>
            <div className="space-y-6">
              <a
                href="tel:+79151004455"
                className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-foreground/70">+7 (915) 100-44-55</p>
                </div>
              </a>

              <a
                href="mailto:kirilltkacenko37@gmail.com"
                className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Почта</p>
                  <p className="text-foreground/70">kirilltkacenko37@gmail.com</p>
                </div>
              </a>

              <a
                href="https://t.me/@unnamed220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Telegram</p>
                  <p className="text-foreground/70">@unnamed220</p>
                </div>
              </a>
{/*
              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Резюме</p>
                  <p className="text-foreground/70">Скачать PDF</p>
                </div>
              </a>
*/}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Местоположение и доступность"</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="bg-background p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Местоположение</p>
                  <p className="text-foreground/70">Москва, Россия</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="bg-background p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Часовой пояс</p>
                  <p className="text-foreground/70">UTC+3 (Moscow Time)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="bg-background p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Доступность</p>
                  <p className="text-foreground/70">Понедельник - Пятница, 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Profiles */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Professional Profiles</h2>
          <div className="space-y-6">
            <a
              href="https://github.com/Kirill-Tkachenko242"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <div className="bg-background p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-foreground/70">Ознакомтесь с мои GitHub профилем</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kirill-tkachenko-428bb4363"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <div className="bg-background p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-foreground/70">Моя страница на LinkedIn</p>
              </div>
            </a>

            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="font-medium mb-4">Информация о связи</h3>
              <p className="text-foreground/70">
                Лучший способ связаться со мной — через Telegram или email. 
                Я стараюсь отвечать как можно быстрее, но в крайнем случае отвечаю в течение нескольких часов в рабочие дни.
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="font-medium mb-4">По вопросам сотрудничества</h3>
              <p className="text-foreground/70">
                Активно ищу работу и открыт для всех предложений. 
                Рассмотрю возможности сотрудничества в разных форматах – буду рад обсудить детали.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}