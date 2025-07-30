import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialTheme(): 'light' | 'dark' {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
  if (savedTheme) return savedTheme;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getInitialLanguage(): 'ru' | 'en' {
  const savedLanguage = localStorage.getItem('language') as 'ru' | 'en';
  if (savedLanguage) return savedLanguage;
  
  const browserLanguage = navigator.language.toLowerCase();
  return browserLanguage.startsWith('ru') ? 'ru' : 'en';
}