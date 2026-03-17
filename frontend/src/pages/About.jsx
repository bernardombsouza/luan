import { useTranslation } from 'react-i18next';
import { Award, CheckCircle2, TrendingUp } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      title: t('about.iso'),
      description: t('about.isoText'),
      score: '2023',
      icon: Award,
    },
    {
      title: t('about.tuv'),
      description: t('about.tuvText'),
      score: '99/100',
      icon: TrendingUp,
    },
    {
      title: t('about.entrion'),
      description: t('about.entrionText'),
      score: '95.44%',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600221574280-9bcd5d108100?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxvZmZzaG9yZSUyMHBsYXRmb3JtfGVufDB8fHx8MTc3Mzc2MDg5MXww&ixlib=rb-4.1.0&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 to-[#004E89]/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            100% Brasileira | Tradição | Qualidade | Experiência
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2D3748] mb-6">
                {t('about.history')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about.historyText')}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-[#004E89]/5 rounded-lg">
                  <div className="text-4xl font-bold text-[#004E89] mb-2">20+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="p-6 bg-[#004E89]/5 rounded-lg">
                  <div className="text-4xl font-bold text-[#004E89] mb-2">30+</div>
                  <div className="text-sm text-gray-600">Profissionais Qualificados</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzczNzYwOTE3fDA&ixlib=rb-4.1.0&q=85"
                alt="Facility"
                className="rounded-lg shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#004E89] mb-4">
                {t('about.mission')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#004E89] mb-4">
                {t('about.vision')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#004E89] mb-4">
                {t('about.values')}
              </h3>
              <ul className="space-y-3">
                {t('about.valuesList', { returnObjects: true }).map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#004E89] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
              {t('about.certifications')}
            </h2>
            <p className="text-xl text-gray-600">
              Compromisso com excelência e padrões internacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border-2 border-gray-200 hover:border-[#004E89] transition-all duration-300 hover:shadow-xl"
              >
                <div className="bg-[#004E89]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#004E89] transition-colors">
                  <cert.icon className="h-8 w-8 text-[#004E89] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="text-3xl font-bold text-[#004E89]">{cert.score}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#004E89] to-[#2D3748] rounded-lg text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Fornecedora Constellation</h3>
                <p className="text-gray-200">
                  Fornecedora de serviços críticos da Constellation desde 2024, 
                  demonstrando nossa capacidade técnica e comprometimento com a qualidade.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Área Classificada</h3>
                <p className="text-gray-200">
                  Infraestrutura completa incluindo área classificada para produtos 
                  químicos, garantindo segurança e conformidade nas operações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
