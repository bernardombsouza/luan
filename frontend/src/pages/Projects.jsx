import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Badge } from '../components/ui/badge';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    // FABRICAÇÃO (10 fotos)
    {
      title: 'Cavalete de Tubos',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/neqg672v_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20CAVALETE%20DE%20TUBOS.jpeg',
    },
    {
      title: 'Drop Sheed ADMarine',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/4gw4iexn_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20DROP%20SHEED.jpeg',
    },
    {
      title: 'Dutos de Ventilação',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/t07m6g69_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20DUTOS%20DE%20VENTILA%C3%87%C3%83O.png',
    },
    {
      title: 'Ferramenta Lift-Sub',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/275pvkdw_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20FERRAMENTA%20LIFT%20SUB.png',
    },
    {
      title: 'Hands Free',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/n6py74fq_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20HANDS%20FREE.jpeg',
    },
    {
      title: 'Passarela PRS Drill Floor',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/hnufjitn_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20PASSARELA.png',
    },
    {
      title: 'Sheave House',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/zw6hj7fp_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20SHEAVE%20HOUSE.png',
    },
    {
      title: 'Spools Industriais',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/kzro25p9_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20SPOOLS.png',
    },
    {
      title: 'Stop Collar',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/9o8krwnh_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20STOP%20COLLOR.jpeg',
    },
    {
      title: 'Suporte da Polia do Guindaste',
      category: 'fabrication',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/dgwgfmwy_PROJETOS%20-%20FABRICA%C3%87%C3%83O%20-%20SUPORTE%20DA%20POLIA%20DO%20GUINDASTE.png',
    },
    // MÃO DE OBRA (8 fotos)
    {
      title: 'Adequação NR-13',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/tcbzm8qs_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20ADEQUA%C3%87%C3%83O%20NR%2013.jpeg',
    },
    {
      title: 'Caldeiraria',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/g3x6n5hk_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20CALDEIRARIA.jpeg',
    },
    {
      title: 'Dutos de Refrigeração',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/z830qayg_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20DUTOS%20DE%20REFRIGERA%C3%87%C3%83O.jpeg',
    },
    {
      title: 'Manutenção de Dampers',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/v25n9tep_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20MANUTEN%C3%87%C3%83O%20DE%20DAMPERS.jpeg',
    },
    {
      title: 'Mecânica',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/quqasq98_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20MECANICA.jpeg',
    },
    {
      title: 'Pintura de Preservação',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/9fgtr1gv_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20PINTURA%20DE%20PRESERVA%C3%87%C3%83O.jpeg',
    },
    {
      title: 'Solda de Estrutura',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/m87pxnii_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20SOLDA%20DE%20ESTRUTURA.jpeg',
    },
    {
      title: 'Substituição de Dutos',
      category: 'workforce',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/9d5b78tt_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20SUBSTITUI%C3%87%C3%83O%20DE%20DUTOS.jpeg',
    },
    // REPARO (6 fotos)
    {
      title: 'Crossover',
      category: 'repair',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/a0vuhqth_PROJETOS%20-%20REPARO%20-%20CROSSOVER.png',
    },
    {
      title: 'Flanges Especiais',
      category: 'repair',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/dyhcal68_PROJETOS%20-%20REPARO%20-%20FLANGES.png',
    },
    {
      title: 'Lift Frame',
      category: 'repair',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/g6s0ss7r_PROJETOS%20-%20REPARO%20-%20LIFT%20FRAME.png',
    },
    {
      title: 'Moitão do Guindaste',
      category: 'repair',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/qh52i57p_PROJETOS%20-%20REPARO%20-%20MOIT%C3%83O%20DO%20GUINDASTE.png',
    },
    {
      title: 'Pistão',
      category: 'repair',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/or8gwsyo_PROJETOS%20-%20REPARO%20-%20PIST%C3%83O.png',
    },
    {
      title: 'Vaso de Pressão (NR-13)',
      category: 'repair',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/1tfkxmez_PROJETOS%20-%20REPARO%20-%20VASO%20DE%20PRESS%C3%83O.png',
    },
    // USINAGEM (6 fotos)
    {
      title: 'Adaptadores de Bronze',
      category: 'machining',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/m3jepjr6_PROJETOS%20-%20USINAGEM%20-%20ADAPTADORES%20DE%20BRONZE.jpeg',
    },
    {
      title: 'Adaptador de Polia',
      category: 'machining',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/ebg8zxab_PROJETOS%20-%20USINAGEM%20-%20ADPATADOR.png',
    },
    {
      title: 'Esticador',
      category: 'machining',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/bj9ngo29_PROJETOS%20-%20USINAGEM%20-%20ESTICADOR.jpeg',
    },
    {
      title: 'Ferramenta de BOP 18.3/4"',
      category: 'machining',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/07442jxb_PROJETOS%20-%20USINAGEM%20-%20FERRAMENTA%20DO%20BOP.png',
    },
    {
      title: 'Gabaritos de Precisão',
      category: 'machining',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/cp07nwxk_PROJETOS%20-%20USINAGEM%20-%20GABARITOS.png',
    },
    {
      title: 'Pino Riser',
      category: 'machining',
      image: 'https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/b5l3f4wa_PROJETOS%20-%20USINAGEM%20-%20PINO%20RISER.png',
    },
  ];

  const filters = [
    { value: 'all', label: 'Todos os Projetos' },
    { value: 'fabrication', label: t('projects.fabrication') },
    { value: 'workforce', label: 'Mão de Obra' },
    { value: 'repair', label: t('projects.repair') },
    { value: 'machining', label: t('projects.machining') },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_oil-gas-solutions-1/artifacts/9d5b78tt_PROJETOS%20-%20M%C3%83O%20DE%20OBRA%20-%20SUBSTITUI%C3%87%C3%83O%20DE%20DUTOS.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 to-[#004E89]/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedFilter === filter.value
                    ? 'bg-[#004E89] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-3 border-[#004E89] text-[#004E89]"
                  >
                    {project.category === 'fabrication' && t('projects.fabrication')}
                    {project.category === 'workforce' && 'Mão de Obra'}
                    {project.category === 'repair' && t('projects.repair')}
                    {project.category === 'machining' && t('projects.machining')}
                  </Badge>
                  <h3 className="text-xl font-bold text-[#2D3748]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#004E89] mb-2">12+</div>
              <div className="text-gray-600 font-medium">Projetos em Destaque</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#004E89] mb-2">11+</div>
              <div className="text-gray-600 font-medium">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#004E89] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#004E89] mb-2">20+</div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
