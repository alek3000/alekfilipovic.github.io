import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../utils/cn'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'connect', label: 'CONNECT' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            AF
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-text hover:text-primary transition-colors duration-200 group font-semibold tracking-wide uppercase text-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-text hover:bg-background-alt hover:text-primary transition-colors font-semibold uppercase text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

