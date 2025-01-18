import React from "react";
import "./styles.css"; 

const projectData = [
  {
    id: 1,
    name: "Hydrion Self Bot",
    description: "This is an open source self bot project built by Hydra DevX",
    backgroundImage: "https://avatars.githubusercontent.com/u/185927943?s=64&v=4",
  },

  
  {
    id: 2,
    name: "Web Developing",
    description: "This website was halfly developed by syringeedy our beloved developer",
    backgroundImage: "https://avatars.githubusercontent.com/u/194689449?v=4",
  },
  {
    id: 3,
    name: "Server Bot",
    description: "We make any type of personalized bots for your server, for a cheap price",
    backgroundImage:
      "https://imgs.search.brave.com/Z74Yt65JqBmwBTthZKUAHDK9gSWvqN6m-NfV7JU27JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NjkwNDQwOS9waG90/by9hcnRpZmljaWFs/LWludGVsbGlnZW5j/ZS1hbmQtdGVjaG5v/bG9neS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LURGaExo/U2s5YWxjNGlBTy1r/eTJrOUJNdzAxdWtk/UUVpdzBldEQ3eTRk/cz0",
  },
  {
    id: 4,
    name: "Server Management",
    description:
      "Our co-owner Yer Goat manages your server with our team so you dont need to worry about staffs.",
    backgroundImage:
      "https://cdn.discordapp.com/avatars/1213110221770072146/0b0247aaed4d11414c1bd839f0649d68?size=1024",
  },
];

function Projects() {
  return (
    <div className="mt-20 relative border-b border-neutral-800 min-h-[800px]">
      <h3 className="text-3xl sm:text-4xl text-center lg:text-5xl tracking-wide">
        <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text">
          Our Projects
        </span>
      </h3>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className={`w-80 h-48 bg-black rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-neutral-700 flex items-center justify-center relative overflow-hidden animate-pop-in`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
    
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            />
 
            <div className="relative z-10 text-center">
              <h4 className="text-lg font-semibold text-white">{project.name}</h4>
              <p className="text-sm text-gray-400 mt-2 px-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;