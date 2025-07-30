import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "p-2 rounded-lg transition-colors flex items-center space-x-1",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        className
      )}
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-medium">
        {language.toUpperCase()}
      </span>
    </button>
  );
}