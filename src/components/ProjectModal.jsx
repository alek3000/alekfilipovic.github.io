import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background rounded-lg max-w-4xl w-full shadow-2xl border border-gray-700 my-4 sm:my-8 max-h-[95vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-background-alt hover:bg-gray-700 transition-colors border border-gray-700"
                aria-label="Close modal"
              >
                <X size={20} className="sm:size-6 text-text" />
              </button>

              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-64 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 lg:p-8 md:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 sm:mb-6">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-text-secondary uppercase mb-3 sm:mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

