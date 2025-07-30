import { Mail, Phone, FileText, MessageSquare, MapPin, Clock, Calendar, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('contact.title')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">{t('contact.contactInfo')}</h2>
            <div className="space-y-6">
              <a
                href="tel:+353 (083) 458-2403"
                className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.phone')}</p>
                  <p className="text-foreground/70">+353 (083) 458-240</p>
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
                  <p className="font-medium">{t('contact.email')}</p>
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
                  <p className="font-medium">{t('contact.telegram')}</p>
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
            <h2 className="text-xl font-semibold mb-6">{t('contact.locationAvailability')}</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="bg-background p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.location')}</p>
                  <p className="text-foreground/70">{t('contact.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="bg-background p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.timezone')}</p>
                  <p className="text-foreground/70">{t('contact.timezoneValue')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <div className="bg-background p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('contact.availability')}</p>
                  <p className="text-foreground/70">{t('contact.availabilityValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Profiles */}
        <div>
          <h2 className="text-xl font-semibold mb-6">{t('contact.professionalProfiles')}</h2>
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
                <p className="font-medium">{t('contact.github')}</p>
                <p className="text-foreground/70">{t('contact.githubDesc')}</p>
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
                <p className="font-medium">{t('contact.linkedin')}</p>
                <p className="text-foreground/70">{t('contact.linkedinDesc')}</p>
              </div>
            </a>

            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="font-medium mb-4">{t('contact.contactInfoTitle')}</h3>
              <p className="text-foreground/70">
                {t('contact.contactInfoDesc')}
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="font-medium mb-4">{t('contact.collaborationTitle')}</h3>
              <p className="text-foreground/70">
                {t('contact.collaborationDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}