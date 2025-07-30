import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center lg:text-left">
          {/* Измените имя и должность здесь */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">{t('home.greeting')}</span>
            <span className="block text-primary mt-2">{t('home.position')}</span>
          </h1>
          {/* Измените описание здесь */}
          <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
            {t('home.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t('home.viewWork')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-secondary"
            >
              {t('home.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}