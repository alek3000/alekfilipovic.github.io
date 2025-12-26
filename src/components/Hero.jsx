import { useRef, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'

function Hero() {
  const imgRef = useRef(null)
  const imageSrc = '/profile.JPG'

  // Preload and cache the image to ensure it persists
  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => {
      // Image is cached, ensure it stays loaded
      if (imgRef.current) {
        imgRef.current.src = imageSrc
      }
    }
    img.onerror = () => {
      // Try lowercase version
      const img2 = new Image()
      img2.src = '/profile.jpg'
      img2.onload = () => {
        if (imgRef.current) {
          imgRef.current.src = '/profile.jpg'
        }
      }
    }
    
    // Force image to stay in cache
    return () => {
      // Keep image reference alive
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text mb-4 sm:mb-6 px-2">
          Hi, I'm{' '}
          <span className="text-primary">Alek Filipovic</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Frontend Developer & Creative Problem Solver
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <button
            onClick={() => {
              const element = document.getElementById('projects')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('connect')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="w-full sm:w-auto px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>

        {/* Photo Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 px-4">
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-8 border-primary/50 shadow-2xl">
              <img
                ref={imgRef}
                src={imageSrc}
                alt="Alek Filipovic"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                style={{ 
                  imageRendering: 'high-quality',
                  WebkitImageRendering: 'high-quality',
                  minWidth: '100%',
                  minHeight: '100%'
                }}
                onError={(e) => {
                  // Try lowercase if uppercase fails
                  if (e.target.src.includes('profile.JPG')) {
                    e.target.src = '/profile.jpg'
                  } else if (e.target.src.includes('profile.jpg')) {
                    // Final fallback
                    e.target.src = 'https://via.placeholder.com/600x600/1a1a1a/ff4500?text=AF'
                  }
                }}
                onLoad={() => {
                  // Ensure image stays loaded
                  if (imgRef.current) {
                    imgRef.current.style.display = 'block'
                  }
                }}
              />
            </div>
            {/* Decorative border glow */}
            <div className="absolute inset-0 rounded-lg border-8 border-primary/20 blur-xl -z-10" />
          </div>
          
          {/* Scroll Indicator - aligned with photo */}
          <button
            onClick={scrollToContent}
            className="mt-6 sm:mt-8 animate-bounce text-text-secondary hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} className="sm:size-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

