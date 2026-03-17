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
      image: 'https://images.unsplash.com/photo-1531053326607-9d349096d887?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9ufGVufDB8fHx8MTc3Mzc2MDkxM3ww&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Dutos de Ventilação',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1641893823219-38b433f736c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwd2VsZGluZ3xlbnwwfHx8fDE3NzM3NjA5MDl8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Plataforma Elevatória',
      category: 'fabrication',
      image: 'https://images.pexels.com/photos/5845969/pexels-photo-5845969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      title: 'Sinete de Mergulho',
      category: 'repair',
      image: 'https://images.unsplash.com/photo-1561536441-01351ded5ffd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZ3xlbnwwfHx8fDE3NzM3NjA5MDl8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'JUNK CATCHER',
      category: 'repair',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxtZXRhbCUyMGZhYnJpY2F0aW9ufGVufDB8fHx8MTc3Mzc2MDkxM3ww&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Spools',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzczNzYwOTE3fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Polia do Pulley In',
      category: 'machining',
      image: 'https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      title: 'Stop Collar',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjaWxpdHl8ZW58MHx8fHwxNzczNzYwOTE3fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Moitão do Guindaste',
      category: 'repair',
      image: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      title: 'Dispositivo Sacar Rotor',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1690508313456-bf8c851e8319?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxvZmZzaG9yZSUyMHBsYXRmb3JtfGVufDB8fHx8MTc3Mzc2MDg5MXww&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Mesa de Extensão DPR',
      category: 'fabrication',
      image: 'https://images.unsplash.com/photo-1600221574280-9bcd5d108100?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxvZmZzaG9yZSUyMHBsYXRmb3JtfGVufDB8fHx8MTc3Mzc2MDg5MXww&ixlib=rb-4.1.0&q=85',
    },
    {
      title: 'Ferramenta de BOP 18.3/4"',
      category: 'machining',
      image: 'https://images.pexels.com/photos/18568174/pexels-photo-18568174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
            backgroundImage: `url('https://images.unsplash.com/photo-1578356058390-f58c575337a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxvZmZzaG9yZSUyMHBsYXRmb3JtfGVufDB8fHx8MTc3Mzc2MDg5MXww&ixlib=rb-4.1.0&q=85')`,
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
