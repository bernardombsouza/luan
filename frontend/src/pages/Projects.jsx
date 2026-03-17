import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Badge } from '../components/ui/badge';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      title: 'Ferramenta Lift-Sub',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff',
    },
    {
      title: 'Dutos de Ventilação',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1739117296710-6f1fb589cc08',
    },
    {
      title: 'Plataforma Elevatória',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1749073668528-38ab64575f5d',
    },
    {
      title: 'Sinete de Mergulho',
      category: 'repair',
      image: 'https://images.unsplash.com/photo-1770201524930-ad59cfacef16',
    },
    {
      title: 'JUNK CATCHER',
      category: 'repair',
      image: 'https://images.unsplash.com/photo-1582635081932-3406d309f746',
    },
    {
      title: 'Spools',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1561536441-01351ded5ffd',
    },
    {
      title: 'Polia do Pulley In',
      category: 'machining',
      image: 'https://images.unsplash.com/photo-1740362381367-09cb98b4e1c6',
    },
    {
      title: 'Stop Collar',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1682453945111-7c41592181a6',
    },
    {
      title: 'Moitão do Guindaste',
      category: 'repair',
      image: 'https://images.unsplash.com/photo-1739862824352-db9f3120057d',
    },
    {
      title: 'Dispositivo Sacar Rotor',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1690508313456-bf8c851e8319',
    },
    {
      title: 'Mesa de Extensão DPR',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1749073668528-38ab64575f5d',
    },
    {
      title: 'Ferramenta de BOP 18.3/4"',
      category: 'machining',
      image: 'https://images.unsplash.com/photo-1547186577-a3f4fa07c2ef',
    },
  ];

  const filters = [
    { value: 'all', label: 'Todos os Projetos' },
    { value: 'fabrication', label: t('projects.fabrication') },
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
            backgroundImage: `url('https://images.unsplash.com/photo-1749073668528-38ab64575f5d')`,
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-3 border-[#004E89] text-[#004E89]"
                  >
                    {project.category === 'fabrication' && t('projects.fabrication')}
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
