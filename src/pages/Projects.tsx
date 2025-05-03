import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type TechStack = {
  category: string;
  skills: string[];
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Настройка CI/CD процесса',
    description: 'Автоматизация сборки и деплоя с использованием Jenkins, Ansible и Groovy.',
    technologies: ['Jenkins', 'Ansible', 'Groovy', 'Linux']
  },
  {
    id: '2',
    title: 'To-Do приложение',
    description: 'Простое приложение на React с использованием хуков и компонентного подхода.',
    technologies: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: '3',
    title: 'Этот сайт-резюме',
    description: 'Личный сайт-портфолио с фильтрами, стилями и адаптивным интерфейсом.',
    technologies: ['React', 'Vite', 'Tailwind', 'Lucide Icons']
  },
  {
    id: '4',
    title: 'Telegram Mini App (диплом)',
    description: 'Справочное веб-приложение для образовательного учреждения на платформе Telegram.',
    technologies: ['Telegram WebApp', 'React', 'TypeScript', 'Node.js']
  },
  {
    id: '5',
    title: 'Вкладка "Помощь"',
    description: 'Функциональность раздела справки с отображением вложенных уровней и изображений.',
    technologies: ['React', 'TypeScript', 'Ant Design']
  }
];

const techStack: TechStack[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Vite', 'Ant Design']
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Linux', 'Nginx', 'Ansible', 'Groovy']
  },
  {
    category: 'Инструменты',
    skills: ['Git', 'VS Code', 'Postman', 'Figma', 'GitHub Desktop']
  }
];

export function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tech Stack Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Code2 className="mr-2" />
          Стек технологий
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category) => (
            <div key={category.category} className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-background"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-primary"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
