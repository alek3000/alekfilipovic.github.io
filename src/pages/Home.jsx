import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Connect from '../components/Connect'
import CarDashboardIntro from '../components/CarDashboardIntro'

function Home() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    // Ensure page is at top when intro completes
    window.scrollTo(0, 0)
    setShowIntro(false)
  }

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <CarDashboardIntro key="intro" onComplete={handleIntroComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Hero />
            <About />
            <Projects />
            <Connect />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home

