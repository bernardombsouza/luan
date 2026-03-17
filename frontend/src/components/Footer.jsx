import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/structure', label: t('nav.structure') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-[#2D3748] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BRAVIA</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t('footer.aboutText')}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#004E89] rounded-full flex items-center justify-center hover:bg-[#003D6B] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#004E89] rounded-full flex items-center justify-center hover:bg-[#003D6B] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#004E89] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Rua Realengo, N.48, Cabiúnas<br />
                  Macaé, RJ - CEP: 27.977-320
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#004E89]" />
                <a
                  href="tel:+5522998262171"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +55 22 99826-2171
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#004E89]" />
                <a
                  href="mailto:comercial@bravia.ind.br"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  comercial@bravia.ind.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">ISO 9001:2015</h4>
            <p className="text-sm text-gray-300 mb-4">
              Certificada pela RINA/IQNET
            </p>
            <p className="text-sm text-gray-300">
              {t('footer.cnpj')}: 43.189.309/0001-84
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Bravia Engenharia. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
