import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-secondary">
              Главная
            </Link>
            <Link to="/projects" className="px-3 py-2 rounded-md hover:bg-secondary">
              Проекты
            </Link>
            <Link to="/experience" className="px-3 py-2 rounded-md hover:bg-secondary">
              Опыт
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-secondary">
              Контакты
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle className="mr-2" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-secondary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Проекты
            </Link>
            <Link
              to="/experience"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Опыт
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}