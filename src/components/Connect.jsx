import { Github, Linkedin, Mail, FileText } from 'lucide-react'

function Connect() {
  // Update these links with your actual social media profiles and email
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/alek3000', // ← Replace with: https://github.com/YOUR_USERNAME
      label: 'GitHub', 
      type: 'link' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/aleksandar-filipovic1', // ← Replace with: https://linkedin.com/in/YOUR_PROFILE
      label: 'LinkedIn', 
      type: 'link' 
    },
    { 
      icon: Mail, 
      href: 'mailto:aleksandarfilipovic.ece@gmail.com', // ← Replace with your actual email
      label: 'Email', 
      type: 'link' 
    },
    { 
      icon: FileText, 
      href: '/resume.pdf', // ← Make sure resume.pdf is in the public/ folder
      label: 'Resume', 
      type: 'download' 
    },
  ]

  const handleLinkClick = (e, href, type) => {
    if (type === 'download') {
      e.preventDefault()
      // Open PDF in new tab
      window.open(href, '_blank', 'noopener,noreferrer')
    } else if (type === 'link' && !href.startsWith('mailto:')) {
      // For non-mailto links, ensure they open in new tab
      e.preventDefault()
      window.open(href, '_blank', 'noopener,noreferrer')
    }
    // mailto: links will use default behavior (open email client)
  }

  return (
    <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-text mb-8">
          Let's Connect
        </h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part
          of your visions. Feel free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map(({ icon: Icon, href, label, type }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              onClick={(e) => handleLinkClick(e, href, type)}
              download={type === 'download' ? 'resume.pdf' : undefined}
              className="group flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-background-alt rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-primary"
            >
              <Icon size={24} className="sm:size-[28px] mb-1 sm:mb-2 text-primary group-hover:text-white transition-colors" />
              <span className="text-xs sm:text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Connect

