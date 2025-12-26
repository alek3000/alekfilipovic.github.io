import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Placeholder projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript.',
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Project+1',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An e-commerce platform with advanced filtering and search.',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Project+2',
      technologies: ['Next.js', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A real-time collaboration tool for teams.',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Project+3',
      technologies: ['Vue.js', 'WebSockets', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A mobile-first responsive design system.',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Project+4',
      technologies: ['React Native', 'Figma', 'Storybook'],
    },
  ]

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-text mb-12 text-center">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                {/* Project card - no image, just content */}
                <div className="relative bg-background-alt rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.01] border border-gray-700 hover:border-primary/50">
                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    {/* Technologies preview */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-text-secondary text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

export default Projects

