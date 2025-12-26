import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  // Calculate angles for clock hands
  const hourAngle = (hours % 12) * 30 + minutes * 0.5 // 30 degrees per hour, 0.5 per minute
  const minuteAngle = minutes * 6 + seconds * 0.1 // 6 degrees per minute, 0.1 per second
  const secondAngle = seconds * 6 // 6 degrees per second

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Clock */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
        >
          {/* Clock face */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ff4500"
            strokeWidth="2"
            opacity="0.3"
          />
          
          {/* Hour markers */}
          {[12, 3, 6, 9].map((hour, index) => {
            const angle = (hour * 30 - 90) * (Math.PI / 180)
            const x1 = 50 + 40 * Math.cos(angle)
            const y1 = 50 + 40 * Math.sin(angle)
            const x2 = 50 + 35 * Math.cos(angle)
            const y2 = 50 + 35 * Math.sin(angle)
            return (
              <line
                key={hour}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#ff4500"
                strokeWidth="2"
              />
            )
          })}

          {/* Hour hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 20 * Math.cos((hourAngle - 90) * (Math.PI / 180))}
            y2={50 + 20 * Math.sin((hourAngle - 90) * (Math.PI / 180))}
            stroke="#ff4500"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 30 * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
            y2={50 + 30 * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
            stroke="#ff4500"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 35 * Math.cos((secondAngle - 90) * (Math.PI / 180))}
            y2={50 + 35 * Math.sin((secondAngle - 90) * (Math.PI / 180))}
            stroke="#ff4500"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Center dot */}
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="#ff4500"
          />
        </svg>
      </div>

      {/* Time display */}
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}
        </div>
        <div className="text-lg sm:text-xl font-semibold text-text-secondary">
          {currentYear}
        </div>
      </div>
    </div>
  )
}

export default Clock

