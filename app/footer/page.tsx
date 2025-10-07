import { Dribbble, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-6 lg:mt-12 px-4 lg:px-0">
      <div className="max-w-custom mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
          {/* Left side - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600">
              2025 | Designed by <span className="font-medium text-gray-900">Gunal M</span>
            </p>
          </div>
          
          {/* Right side - Social Icons */}
          <div className="flex items-center gap-8">
            <a 
              href="https://www.linkedin.com/in/gunal-m-a35458241/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.youtube.com/@GunalDesigns" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.instagram.com/gunal.uiux/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://dribbble.com/gunaldesigns01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Dribbble"
            >
              <Dribbble size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
