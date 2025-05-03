import React from 'react';

type ExperienceTask = {
  type: 'devops' | 'frontend';
  text: string;
};

type Experience = {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: ExperienceTask[];
};

type Education = {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: '1',
    company: 'ЛУКОЙЛ-Технологии',
    position: 'Стажер',
    duration: 'июнь 2024 - апрель 2025',
    description: [
      {
        type: 'devops',
        text: 'Настроил автоматическую сборку и деплой кода с использованием Jenkins и Ansible.',
      },
      {
        type: 'devops',
        text: 'Внедрил автоматическую проверку кода при каждом коммите.',
      },
      {
        type: 'devops',
        text: 'Разработал и оптимизировал Groovy-скрипты для Jenkins.',
      },
      {
        type: 'devops',
        text: 'Углубил знания в администрировании Linux и Windows серверов.',
      },
      {
        type: 'frontend',
        text: 'Реализовал вкладку «Помощь» в веб-приложении.',
      },
      {
        type: 'frontend',
        text: 'Создал to-do приложение с использованием React Hooks и компонентов.',
      },
      {
        type: 'frontend',
        text: 'Использовал Ant Design для создания адаптивного интерфейса.',
      }
    ]
  }
];

const education: Education[] = [
  {
    id: '1',
    institution: 'РГУ нефти и газа (НИУ) имени И.М. Губкина',
    degree: 'Интегрированные информационные автоматизированные системы',
    duration: '2021 - 2025',
    description: `После университета я получил крепкие фундаментальные знания о программировании, попробовал различные 
    технологии и языки, что позволило мне понять, как устроена разработка на
    разных уровнях. Помимо технических навыков, я научился добиваться своих целей, независимо от сложности задач.`
  }
];

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Опыт работы</h2>
        <div className="space-y-8">
          {experiences.map((exp) => {
            const devopsTasks = exp.description.filter((item) => item.type === 'devops');
            const frontendTasks = exp.description.filter((item) => item.type === 'frontend');

            return (
              <div key={exp.id} className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-primary mt-1">{exp.position}</p>
                <p className="text-sm text-foreground/70 mt-1">{exp.duration}</p>

                {devopsTasks.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium mb-2">🛠 DevOps задачи:</p>
                    <ul className="space-y-2">
                      {devopsTasks.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {frontendTasks.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium mb-2">💻 Frontend задачи:</p>
                    <ul className="space-y-2">
                      {frontendTasks.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Образование</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-primary mt-1">{edu.degree}</p>
              <p className="text-sm text-foreground/70 mt-1">{edu.duration}</p>
              <p className="mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
