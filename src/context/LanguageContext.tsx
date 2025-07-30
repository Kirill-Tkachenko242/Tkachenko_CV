import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language } from '../types';
import { getInitialLanguage } from '../lib/utils';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    nav: {
      home: 'Главная',
      projects: 'Проекты',
      experience: 'Опыт',
      contact: 'Контакты'
    },
    home: {
      greeting: 'Привет! Я, Ткаченко Кирилл',
      position: 'Frontend Developer & DevOps Engineer',
      description: 'Занимаюсь созданием удобных, современных и красивых интерфейсов, а также изучаю процессы развертывания и автоматизации. Уже имею небольшой опыт в разработке и стремлюсь постоянно прокачивать свои навыки.',
      viewWork: 'Мои работы',
      contact: 'Контакты'
    },
    projects: {
      title: 'Проекты',
      techStack: 'Стек технологий',
      project1: {
        title: 'Настройка CI/CD процесса',
        description: 'Автоматизация сборки и деплоя с использованием Jenkins, Ansible и Groovy.'
      },
      project2: {
        title: 'To-Do приложение',
        description: 'Простое приложение на React с использованием хуков и компонентного подхода.'
      },
      project3: {
        title: 'Этот сайт-резюме',
        description: 'Личный сайт-портфолио с фильтрами, стилями и адаптивным интерфейсом.'
      },
      project4: {
        title: 'Telegram Mini App (диплом)',
        description: 'Справочное веб-приложение для образовательного учреждения на платформе Telegram.'
      },
      project5: {
        title: 'Вкладка "Помощь"',
        description: 'Функциональность раздела справки с отображением вложенных уровней и изображений.'
      }
    },
    experience: {
      workTitle: 'Опыт работы',
      educationTitle: 'Образование',
      company: 'ЛУКОЙЛ-Технологии',
      position: 'Стажер',
      duration: 'июнь 2024 - апрель 2025',
      devopsTasks: '🛠 DevOps задачи:',
      frontendTasks: '💻 Frontend задачи:',
      task1: 'Настроил автоматическую сборку и деплой кода с использованием Jenkins и Ansible.',
      task2: 'Внедрил автоматическую проверку кода при каждом коммите.',
      task3: 'Разработал и оптимизировал Groovy-скрипты для Jenkins.',
      task4: 'Углубил знания в администрировании Linux и Windows серверов.',
      task5: 'Реализовал вкладку «Помощь» в веб-приложении.',
      task6: 'Создал to-do приложение с использованием React Hooks и компонентов.',
      task7: 'Использовал Ant Design для создания адаптивного интерфейса.',
      university: 'РГУ нефти и газа (НИУ) имени И.М. Губкина',
      degree: 'Интегрированные информационные автоматизированные системы',
      eduDuration: '2021 - 2025',
      eduDescription: 'После университета я получил крепкие фундаментальные знания о' +
      'программировании, попробовал различные технологии и языки, что позволило мне понять, как устроена разработка на разных уровнях.' +
      'Помимо технических навыков, я научился добиваться своих целей, независимо от сложности задач.'
    },
    contact: {
      title: 'Ссылки для связи',
      contactInfo: 'Контактная Информация',
      phone: 'Телефон',
      email: 'Почта',
      telegram: 'Telegram',
      resume: 'Резюме',
      downloadPdf: 'Скачать PDF',
      locationAvailability: 'Местоположение и доступность',
      location: 'Местоположение',
      locationValue: 'Москва, Россия',
      timezone: 'Часовой пояс',
      timezoneValue: 'UTC+3 (Moscow Time)',
      availability: 'Доступность',
      availabilityValue: 'Понедельник - Пятница, 9:00 - 18:00',
      professionalProfiles: 'Professional Profiles',
      github: 'GitHub',
      githubDesc: 'Ознакомтесь с мои GitHub профилем',
      linkedin: 'LinkedIn',
      linkedinDesc: 'Моя страница на LinkedIn',
      contactInfoTitle: 'Информация о связи',
      contactInfoDesc: 'Лучший способ связаться со мной — через Telegram или email. Я стараюсь отвечать как можно быстрее, но в крайнем случае отвечаю в течение нескольких часов в рабочие дни.',
      collaborationTitle: 'По вопросам сотрудничества',
      collaborationDesc: 'Активно ищу работу и открыт для всех предложений. Рассмотрю возможности сотрудничества в разных форматах – буду рад обсудить детали.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    home: {
      greeting: 'Hello! I\'m Kirill Tkachenko',
      position: 'Frontend Developer & DevOps Engineer',
      description: 'I create convenient, modern and beautiful interfaces, and also study deployment and automation processes. I already have some experience in development and strive to constantly improve my skills.',
      viewWork: 'View My Work',
      contact: 'Contact'
    },
    projects: {
      title: 'Projects',
      techStack: 'Tech Stack',
      project1: {
        title: 'CI/CD Process Setup',
        description: 'Build and deployment automation using Jenkins, Ansible and Groovy.'
      },
      project2: {
        title: 'To-Do Application',
        description: 'Simple React application using hooks and component approach.'
      },
      project3: {
        title: 'This Resume Website',
        description: 'Personal portfolio website with filters, styles and responsive interface.'
      },
      project4: {
        title: 'Telegram Mini App (thesis)',
        description: 'Reference web application for educational institution on Telegram platform.'
      },
      project5: {
        title: 'Help Tab',
        description: 'Help section functionality with nested levels and images display.'
      }
    },
    experience: {
      workTitle: 'Work Experience',
      educationTitle: 'Education',
      company: 'LUKOIL-Technologies',
      position: 'Intern',
      duration: 'June 2024 - April 2025',
      devopsTasks: '🛠 DevOps tasks:',
      frontendTasks: '💻 Frontend tasks:',
      task1: 'Set up automatic code build and deployment using Jenkins and Ansible.',
      task2: 'Implemented automatic code checking on every commit.',
      task3: 'Developed and optimized Groovy scripts for Jenkins.',
      task4: 'Deepened knowledge in Linux and Windows server administration.',
      task5: 'Implemented the "Help" tab in the web application.',
      task6: 'Created a to-do application using React Hooks and components.',
      task7: 'Used Ant Design to create responsive interface.',
      university: 'Gubkin Russian State University of Oil and Gas (National Research University)',
      degree: 'Integrated Information Automated Systems',
      eduDuration: '2021 - 2025',
      eduDescription: 'After graduating, I acquired strong foundational knowledge in ' +
      'programming and explored various technologies and languages, which helped me understand software development at different levels' +
      'Beyond technical skills, I learned to achieve my goals, regardless of the complexity of the tasks.'
    },
    contact: {
      title: 'Contact Links',
      contactInfo: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      telegram: 'Telegram',
      resume: 'Resume',
      downloadPdf: 'Download PDF',
      locationAvailability: 'Location and Availability',
      location: 'Location',
      locationValue: 'Dublin, Ireland',
      timezone: 'Timezone',
      timezoneValue: 'UTC+1 (Dublin Time)',
      availability: 'Availability',
      availabilityValue: 'Monday - Friday, 9:00 - 18:00',
      professionalProfiles: 'Professional Profiles',
      github: 'GitHub',
      githubDesc: 'Check out my GitHub profile',
      linkedin: 'LinkedIn',
      linkedinDesc: 'My LinkedIn page',
      contactInfoTitle: 'Contact Information',
      contactInfoDesc: 'The best way to contact me is via Telegram or email. I try to respond as quickly as possible, but at most I respond within a few hours on business days.',
      collaborationTitle: 'Collaboration Inquiries',
      collaborationDesc: 'Actively looking for work and open to all offers. I will consider cooperation opportunities in different formats - I will be happy to discuss the details.'
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}