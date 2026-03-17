import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Wrench, Cog, Flame, PaintBucket, Ship, FileText } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    {
      icon: FileText,
      title: 'Engenharia e Projetos',
      items: [
        'Elaboração de Projeto de Engenharia',
        'Cálculos Estruturais',
        'Full Assessment',
        'Análise de Cálculo Estrutural',
        'Desenho, Criação e Revisão de AS-Built',
        'Projetos de vaso de pressão e trocadores de calor',
        'Teste de Carga',
        'Teste Hidrostático',
      ],
    },
    {
      icon: Cog,
      title: 'Fabricação Onshore & Offshore',
      items: [
        'Estruturas Metálicas',
        'Ferramentas e Equipamentos Topside e Subsea',
        'Linhas de dutos e gasodutos',
        'Cestas padrão DNV',
        'Racks para transporte de tubos',
        'Spools',
      ],
    },
    {
      icon: Wrench,
      title: 'Usinagem Industrial',
      items: [
        'Torno Vertical - Placa de 1400mm x 5 Ton',
        'Furadeira Radial Rocco ISO 60',
        'Fresadora Ferramenteira Pinnacle ISO 40',
        'Mesa de Plasma CNC 3000 x 7000mm',
        'Torno Romi Imor',
        'Usinagem de precisão para equipamentos industriais',
      ],
    },
    {
      icon: Flame,
      title: 'Soldagem e Caldeiraria',
      items: [
        'Soldagem Offshore certificada',
        'Soldagem Onshore',
        'Caldeiraria pesada',
        'Soldadores classificados BV',
        'Inspeções de END',
        'Databook completo',
      ],
    },
    {
      icon: PaintBucket,
      title: 'Revestimento',
      items: [
        'Galvanização a quente',
        'Galvanização a frio',
        'Revestimento em FBE',
        'Pintura Epoxy',
        'Preparação de superfície',
        'Jateamento',
      ],
    },
    {
      icon: Ship,
      title: 'Serviços Offshore',
      items: [
        'Fornecimento de Mão de Obra Especializada',
        'Mecânica',
        'Inspeção',
        'Solda & Caldeiraria',
        'Pintura',
        'Usinagem',
        'Montagem e Desmontagem de Andaime',
        'Reparo de Equipamentos Subsea',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1561536441-01351ded5ffd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZ3xlbnwwfHx8fDE3NzM3NjA5MDl8MA&ixlib=rb-4.1.0&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 to-[#004E89]/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gradient-to-br from-[#004E89]/5 to-white rounded-lg border-2 border-[#004E89]/20">
              <h3 className="text-xl font-bold text-[#004E89] mb-3">
                {t('services.engineering.title')}
              </h3>
              <p className="text-gray-700">{t('services.engineering.description')}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#004E89]/5 to-white rounded-lg border-2 border-[#004E89]/20">
              <h3 className="text-xl font-bold text-[#004E89] mb-3">
                {t('services.fabrication.title')}
              </h3>
              <p className="text-gray-700">{t('services.fabrication.description')}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#004E89]/5 to-white rounded-lg border-2 border-[#004E89]/20">
              <h3 className="text-xl font-bold text-[#004E89] mb-3">
                {t('services.machining.title')}
              </h3>
              <p className="text-gray-700">{t('services.machining.description')}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#004E89]/5 to-white rounded-lg border-2 border-[#004E89]/20">
              <h3 className="text-xl font-bold text-[#004E89] mb-3">
                {t('services.welding.title')}
              </h3>
              <p className="text-gray-700">{t('services.welding.description')}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#004E89]/5 to-white rounded-lg border-2 border-[#004E89]/20">
              <h3 className="text-xl font-bold text-[#004E89] mb-3">
                {t('services.coating.title')}
              </h3>
              <p className="text-gray-700">{t('services.coating.description')}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#004E89]/5 to-white rounded-lg border-2 border-[#004E89]/20">
              <h3 className="text-xl font-bold text-[#004E89] mb-3">
                {t('services.offshore.title')}
              </h3>
              <p className="text-gray-700">{t('services.offshore.description')}</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D3748] mb-8 text-center">
              Serviços Detalhados
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {servicesList.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#004E89] transition-colors"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#004E89]/5">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#004E89] w-12 h-12 rounded-full flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl font-bold text-[#2D3748]">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-700"
                        >
                          <span className="text-[#004E89] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/5845969/pexels-photo-5845969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Service 1"
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxtZXRhbCUyMGZhYnJpY2F0aW9ufGVufDB8fHx8MTc3Mzc2MDkxM3ww&ixlib=rb-4.1.0&q=85"
              alt="Service 2"
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Service 3"
              className="rounded-lg object-cover w-full h-64 shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
