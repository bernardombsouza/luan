import { useTranslation } from 'react-i18next';
import { Factory, Package, Building2, Container } from 'lucide-react';

const Structure = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      icon: Factory,
      title: t('structure.production'),
      size: t('structure.productionSize'),
      description: t('structure.productionText'),
      color: '#004E89',
    },
    {
      icon: Package,
      title: t('structure.storage'),
      size: t('structure.storageSize'),
      description: t('structure.storageText'),
      color: '#2D3748',
    },
    {
      icon: Building2,
      title: t('structure.office'),
      size: t('structure.officeSize'),
      description: t('structure.officeText'),
      color: '#004E89',
    },
    {
      icon: Container,
      title: t('structure.crane'),
      size: t('structure.craneCapacity'),
      description: t('structure.craneText'),
      color: '#2D3748',
    },
  ];

  const machinery = t('structure.machineryList', { returnObjects: true });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/tlshgkg7_ESTRUTURA%20-%20MAQUINARIO%20-%20MESA%20DE%20PLASMA.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 to-[#004E89]/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('structure.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {t('structure.subtitle')}
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-lg border-2 border-gray-200 hover:border-[#004E89] transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${facility.color}15` }}
                >
                  <facility.icon
                    className="h-8 w-8"
                    style={{ color: facility.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-2">
                  {facility.title}
                </h3>
                <div className="text-4xl font-bold text-[#004E89] mb-4">
                  {facility.size}
                </div>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#004E89] to-[#2D3748] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Equipe Qualificada</h3>
            <p className="text-xl text-gray-200">
              Mais de 30 profissionais qualificados e especializados em suas áreas
            </p>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
              {t('structure.machinery')}
            </h2>
            <p className="text-xl text-gray-600">
              Equipamentos de alta tecnologia para usinagem de precisão
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              {machinery.map((machine, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#004E89] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{machine}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/itn3kerp_ESTRUTURA%20-%20MAQUINARIO%20-%20FRESA.png"
                alt="Fresadora Pinnacle Bravia"
                className="rounded-lg object-contain h-48 w-full shadow-md bg-gray-100"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/88hirr5m_ESTRUTURA%20-%20MAQUINARIO%20-%20FURADEIRA.png"
                alt="Furadeira Radial Bravia"
                className="rounded-lg object-contain h-48 w-full shadow-md bg-gray-100"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/byn5xjy8_ESTRUTURA%20-%20MAQUINARIO%20-%20TORNO%20HORIZONTAL.png"
                alt="Torno Horizontal Romi"
                className="rounded-lg object-contain h-48 w-full shadow-md bg-gray-100"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/jsqivrih_ESTRUTURA%20-%20MAQUINARIO%20-%20TORNO%20VERTICAL.png"
                alt="Torno Vertical AtlasMao"
                className="rounded-lg object-contain h-48 w-full shadow-md bg-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#004E89] mb-2">8,800</div>
              <div className="text-gray-600 font-medium">m² de Área Total</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#004E89] mb-2">7</div>
              <div className="text-gray-600 font-medium">Toneladas - Ponte Rolante</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#004E89] mb-2">5</div>
              <div className="text-gray-600 font-medium">Máquinas de Alta Tecnologia</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Structure;
