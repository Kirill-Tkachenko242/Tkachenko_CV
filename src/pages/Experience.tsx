import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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
  { id: '1' }
];

const education: Education[] = [
  { id: '1' }
];

export function Experience() {
  const { t } = useLanguage();

  const getTaskText = (taskNumber: number) => t(`experience.task${taskNumber}`);
  const getTaskType = (taskNumber: number): 'devops' | 'frontend' => {
    return taskNumber <= 4 ? 'devops' : 'frontend';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">{t('experience.workTitle')}</h2>
        <div className="space-y-8">
          {experiences.map((exp) => {
            const devopsTasks = [1, 2, 3, 4].map(num => ({
              type: 'devops' as const,
              text: getTaskText(num)
            }));
            const frontendTasks = [5, 6, 7].map(num => ({
              type: 'frontend' as const,
              text: getTaskText(num)
            }));

            return (
              <div key={exp.id} className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold">{t('experience.company')}</h3>
                <p className="text-primary mt-1">{t('experience.position')}</p>
                <p className="text-sm text-foreground/70 mt-1">{t('experience.duration')}</p>

                {devopsTasks.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium mb-2">{t('experience.devopsTasks')}</p>
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
                    <p className="font-medium mb-2">{t('experience.frontendTasks')}</p>
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
        <h2 className="text-3xl font-bold mb-8">{t('experience.educationTitle')}</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-semibold">{t('experience.university')}</h3>
              <p className="text-primary mt-1">{t('experience.degree')}</p>
              <p className="text-sm text-foreground/70 mt-1">{t('experience.eduDuration')}</p>
              <p className="mt-4">{t('experience.eduDescription')}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
