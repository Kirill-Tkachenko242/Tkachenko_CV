import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {/* Cсылки на социальные сети */}
            <a
              href="https://github.com/Kirill-Tkachenko242"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kirill-tkachenko-428bb4363"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/unnamed220"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Telegram"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a
              href="mailto:kirilltkacenko37@gmail.com"
              className="hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}