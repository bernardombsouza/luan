import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { ArrowRight, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: TrendingUp, label: t('hero.experience'), value: '20+' },
    { icon: Users, label: t('hero.clients'), value: '11+' },
    { icon: Award, label: t('hero.certification'), value: 'ISO 9001' },
  ];

  const services = [
    {
      icon: '🏗️',
      title: t('services.engineering.title'),
      description: t('services.engineering.description'),
    },
    {
      icon: '⚙️',
      title: t('services.fabrication.title'),
      description: t('services.fabrication.description'),
    },
    {
      icon: '🔧',
      title: t('services.machining.title'),
      description: t('services.machining.description'),
    },
    {
      icon: '🔥',
      title: t('services.welding.title'),
      description: t('services.welding.description'),
    },
    {
      icon: '🎨',
      title: t('services.coating.title'),
      description: t('services.coating.description'),
    },
    {
      icon: '🚢',
      title: t('services.offshore.title'),
      description: t('services.offshore.description'),
    },
  ];

  const clients = [
    'CONSTELLATION',
    'OCYAN',
    'BAKER HUGHES',
    'GRANENERGIA',
    'NTS',
    'NOV',
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Bravia Engenharia | Soluções em Petróleo e Gás - ISO 9001:2015"
        description="Empresa 100% brasileira com +20 anos em engenharia para petróleo e gás. Fabricação offshore, subsea, usinagem industrial, soldagem certificada. ISO 9001:2015. Macaé-RJ."
        keywords="bravia engenharia, petróleo e gás, offshore brasil, fabricação subsea, estruturas metálicas, usinagem industrial, soldagem offshore, ISO 9001, Macaé, Constellation, caldeiraria"
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/m87pxnii_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20SOLDA%20DE%20ESTRUTURA.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 via-[#2D3748]/85 to-[#004E89]/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white pt-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('hero.subtitle')}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#004E89] hover:bg-[#003D6B] text-white text-lg px-8 py-6 h-auto"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <stat.icon className="h-8 w-8 mb-3 text-[#004E89]" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-[#004E89] transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3 group-hover:text-[#004E89] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white"
              >
                {t('services.title')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#2D3748] to-[#004E89] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                {t('about.historyText')}
              </p>
              <ul className="space-y-4">
                {t('about.valuesList', { returnObjects: true }).map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#004E89] bg-white rounded-full mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{value}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-block mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#004E89]"
                >
                  {t('nav.about')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/h2bafgig_HOME%20-%20SOBRE%20A%20BRAVIA%20-%20BASE.png"
                alt="Parque Fabril Bravia"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/8dalkc4m_HOME%20-%20SOBRE%20A%20BRAVIA%20-%20PROJETOS.png"
                alt="Projetos de Engenharia"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/ngqn5xu2_HOME%20-%20SOBRE%20A%20BRAVIA%20-%20SERVI%C3%87O%20DE%20BASE.png"
                alt="Soldagem Bravia"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/fva8v4lq_HOME%20-%20SOBRE%20A%20BRAVIA%20-%20SERVI%C3%87O%20DE%20MAO%20DE%20OBRA.jpeg"
                alt="Serviços Offshore Bravia"
                className="rounded-lg object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
              {t('clients.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('clients.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-bold text-[#2D3748] text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004E89] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#004E89] hover:bg-gray-100 text-lg px-8 py-6 h-auto"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
