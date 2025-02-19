import { useState, useEffect, MouseEvent } from 'react';

function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/orgs/Hydrion-Tools/repos'
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="mt-20 relative border-b border-neutral-800 min-h-[800px]">
      <h3 className="text-3xl sm:text-4xl text-center lg:text-5xl tracking-wide">
        <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text">
          Our GitHub Projects
        </span>
      </h3>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-80 h-48 bg-black rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center relative overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${project.owner.avatar_url})`,
                clipPath:
                  hoveredProject === project.id
                    ? `circle(100px at ${hoverPosition.x}px ${hoverPosition.y}px)`
                    : 'circle(0 at 50% 50%)',
              }}
            />
            <div className="relative z-10 text-center">
              <h4 className="text-lg font-semibold text-white">
                {project.name}
              </h4>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/Hydrion-Tools"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-button px-6 py-3 rounded-md text-white font-semibold text-lg"
        >
          Visit Our GitHub Organization
        </a>
      </div>
    </div>
  );
}

export default Projects;
