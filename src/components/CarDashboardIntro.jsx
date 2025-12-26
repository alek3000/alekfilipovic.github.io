import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fuel, Thermometer } from 'lucide-react'

// Reusable Gauge Component
function Gauge({ 
  value, 
  max, 
  centerText, 
  unitLabel, 
  subText, 
  bottomText,
  size = 200,
  startAngle = 180, // Start at 180° (left side)
  arcSpan = 270, // Open arc spanning 270 degrees
  showTicks = true
}) {
  // Use a base size for calculations, but render responsively
  const baseSize = 200
  const radius = baseSize / 2 - 10
  const center = baseSize / 2
  const progress = Math.min(value / max, 1)
  
  // Calculate end angle (clockwise from startAngle)
  const endAngle = startAngle + (progress * arcSpan)
  const endAngleRad = (endAngle * Math.PI) / 180
  const startAngleRad = (startAngle * Math.PI) / 180
  
  // Calculate angle difference for large arc flag
  const angleDiff = endAngle - startAngle
  const largeArc = angleDiff > 180 ? 1 : 0
  
  // Arc path
  const startX = center + radius * Math.cos(startAngleRad)
  const startY = center + radius * Math.sin(startAngleRad)
  const endX = center + radius * Math.cos(endAngleRad)
  const endY = center + radius * Math.sin(endAngleRad)
  
  return (
    <div className="relative overflow-visible w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px]">
      <svg
        width="100%"
        height="100%"
        viewBox={`-30 -30 ${baseSize + 60} ${baseSize + 60}`}
        className="absolute inset-0 w-full h-full"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Radial gradient for gauge background */}
          <radialGradient id={`gauge-bg-${centerText}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#8b0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
          
          {/* Linear gradient for arc - brighter at ends */}
          <linearGradient id={`arc-gradient-${centerText}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4500" stopOpacity="1" />
            <stop offset="50%" stopColor="#ff4500" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff4500" stopOpacity="1" />
          </linearGradient>
          
          {/* Glow filter with expanded region */}
          <filter id={`glow-${centerText}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Removed background circle to prevent black rectangle cutting glow */}
        
        {/* Tick marks */}
        {showTicks && Array.from({ length: 9 }, (_, i) => {
          const tickValue = (i / 8) * max
          const tickProgress = tickValue / max
          const tickAngle = startAngle + (tickProgress * arcSpan)
          const tickRad = (tickAngle * Math.PI) / 180
          const tickLength = 8
          
          const x1 = center + (radius - tickLength) * Math.cos(tickRad)
          const y1 = center + (radius - tickLength) * Math.sin(tickRad)
          const x2 = center + radius * Math.cos(tickRad)
          const y2 = center + radius * Math.sin(tickRad)
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.4"
            />
          )
        })}
        
        {/* Glowing arc - thicker and brighter at ends */}
        <path
          d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`}
          fill="none"
          stroke={`url(#arc-gradient-${centerText})`}
          strokeWidth="12"
          strokeLinecap="round"
          filter={`url(#glow-${centerText})`}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 69, 0, 1)) drop-shadow(0 0 16px rgba(255, 69, 0, 0.8)) drop-shadow(0 0 24px rgba(255, 69, 0, 0.4))'
          }}
        />
      </svg>
      
      {/* Center text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {unitLabel && (
          <div className="text-xs text-white/70 uppercase tracking-wider mb-1" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            {unitLabel}
          </div>
        )}
        {centerText && (
          <div 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1" 
            style={{ 
              fontFamily: 'Roboto Condensed, sans-serif',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
          >
            {centerText}
          </div>
        )}
        {subText && (
          <div className="text-xs text-primary uppercase tracking-wider mb-1" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            {subText}
          </div>
        )}
        {bottomText && (
          <div className="text-xs text-white/60 uppercase tracking-wider mt-1" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            {bottomText}
          </div>
        )}
      </div>
    </div>
  )
}

// Small Gauge Component (for Fuel and Temperature)
function SmallGauge({ value, max, icon: Icon, label, size = 80 }) {
  const radius = size / 2 - 8
  const center = size / 2
  const progress = Math.min(value / max, 1)
  
  // Small arc: 180° span starting from bottom-left
  const startAngle = 135
  const arcSpan = 180
  const endAngle = startAngle + (progress * arcSpan)
  const endAngleRad = (endAngle * Math.PI) / 180
  const startAngleRad = (startAngle * Math.PI) / 180
  
  const startX = center + radius * Math.cos(startAngleRad)
  const startY = center + radius * Math.sin(startAngleRad)
  const endX = center + radius * Math.cos(endAngleRad)
  const endY = center + radius * Math.sin(endAngleRad)
  
  // Create unique ID based on icon name to avoid conflicts
  const uniqueId = Icon.name || `gauge-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="relative overflow-visible" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={`small-arc-${uniqueId}`}>
            <stop offset="0%" stopColor="#ff4500" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff4500" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Arc */}
        {progress > 0 && (
          <path
            d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${progress > 0.5 ? 1 : 0} 1 ${endX} ${endY}`}
            fill="none"
            stroke={`url(#small-arc-${uniqueId})`}
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 69, 0, 0.8))'
            }}
          />
        )}
      </svg>
      
      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={20} className="text-white/60" />
      </div>
      
      {/* Label */}
      {label && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[8px] text-white/50 uppercase" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
          {label}
        </div>
      )}
    </div>
  )
}

function CarDashboardIntro({ onComplete }) {
  const [kph, setKph] = useState(0)
  const [rpm, setRpm] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [time, setTime] = useState('')
  const [trip, setTrip] = useState(123.4)
  const [temp, setTemp] = useState(21.5)

  // Update time to current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }
    
    // Set initial time
    updateTime()
    
    // Update every minute
    const interval = setInterval(updateTime, 60000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Prevent scrolling during intro and hide footer
    document.body.style.overflow = 'hidden'
    document.body.setAttribute('data-intro-active', 'true')
    
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = 'unset'
      document.body.removeAttribute('data-intro-active')
    }
  }, [])

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const targetKph = 84 // Match the image
    const maxRpm = 7000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Accelerate to 84 kph linearly
      const currentKph = targetKph * progress
      setKph(Math.floor(currentKph))

      // RPM animation - realistic car behavior
      if (progress < 0.3) {
        // Initial acceleration - RPM rises to ~5000
        setRpm(Math.floor(5000 * (progress / 0.3)))
      } else if (progress < 0.5) {
        // First shift - RPM drops
        const shiftProgress = (progress - 0.3) / 0.2
        setRpm(Math.floor(5000 - (shiftProgress * 2000))) // Drop to ~3000
      } else if (progress < 0.7) {
        // Second acceleration phase
        const accelProgress = (progress - 0.5) / 0.2
        setRpm(Math.floor(3000 + (accelProgress * 2500))) // Rise to ~5500
      } else if (progress < 0.85) {
        // Second shift
        const shiftProgress = (progress - 0.7) / 0.15
        setRpm(Math.floor(5500 - (shiftProgress * 1500))) // Drop to ~4000
      } else {
        // Final phase - stabilize around 1500-2000
        const finalProgress = (progress - 0.85) / 0.15
        setRpm(Math.floor(4000 - (finalProgress * 2000))) // Stabilize
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // When animation completes, transition out smoothly
        window.scrollTo(0, 0)
        // Wait a moment to show final state, then fade out
        setTimeout(() => {
          setIsVisible(false)
          // Wait for fade out animation to complete before showing main content
          setTimeout(() => {
            document.body.style.overflow = 'unset'
            window.scrollTo(0, 0)
            onComplete()
          }, 800) // Match the exit transition duration
        }, 300)
      }
    }

    requestAnimationFrame(animate)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
          style={{ fontFamily: 'Roboto Condensed, sans-serif' }}
        >
          <div className="relative w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 overflow-visible">
            {/* Dashboard Container */}
            <div className="relative overflow-visible">
              {/* Main Gauges Row */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end gap-4 sm:gap-2 lg:gap-4 overflow-visible">
                {/* Small Gauges Row - Mobile: show above, Desktop: show on sides */}
                <div className="flex sm:hidden justify-center gap-4 w-full mb-2">
                  <SmallGauge
                    value={1}
                    max={1}
                    icon={Fuel}
                    label=""
                  />
                  <SmallGauge
                    value={0.3}
                    max={1}
                    icon={Thermometer}
                    label=""
                  />
                </div>
                
                {/* Far Left: Fuel Gauge - Desktop only */}
                <div className="hidden sm:block">
                  <SmallGauge
                    value={1}
                    max={1}
                    icon={Fuel}
                    label=""
                  />
                </div>
                
                {/* Center-Left: Speedometer */}
                <Gauge
                  value={kph}
                  max={260}
                  centerText={kph.toString()}
                  unitLabel="km/h"
                  size={240}
                  startAngle={180}
                  arcSpan={270}
                />
                
                {/* Center: Negative space with faint horizontal red glow - Desktop only */}
                <div className="hidden lg:block flex-1 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-4" />
                
                {/* Center-Right: Tachometer */}
                <Gauge
                  value={rpm}
                  max={7000}
                  centerText="M3"
                  unitLabel="1/min x 1000"
                  subText="SPORT+"
                  bottomText="M3"
                  size={240}
                  startAngle={180}
                  arcSpan={270}
                />
                
                {/* Far Right: Temperature Gauge - Desktop only */}
                <div className="hidden sm:block">
                  <SmallGauge
                    value={0.3}
                    max={1}
                    icon={Thermometer}
                    label=""
                  />
                </div>
              </div>
              
              {/* Bottom Info Strip */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 lg:gap-8 text-text/80 text-xs sm:text-sm" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Time</span>
                  <span>{time}</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-text/20" />
                <div className="flex items-center gap-2">
                  <span className="text-primary">Trip</span>
                  <span>{trip.toFixed(1)} km</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-text/20" />
                <div className="flex items-center gap-2">
                  <span className="text-primary">Temp</span>
                  <span>+{temp.toFixed(1)}°C</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CarDashboardIntro
