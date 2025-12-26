import { useState, useEffect } from 'react'

function FooterClock() {
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
  const hourAngle = (hours % 12) * 30 + minutes * 0.5
  const minuteAngle = minutes * 6 + seconds * 0.1
  const secondAngle = seconds * 6

  // Convert number to Roman numerals
  const toRoman = (num) => {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ]

    let result = ''
    for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
        result += numeral
        num -= value
      }
    }
    return result
  }

  return (
    <div className="flex items-center gap-2">
      {/* Very Small Clock */}
      <div className="relative w-6 h-6">
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
          {[12, 3, 6, 9].map((hour) => {
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

      {/* Year in Roman Numerals */}
      <div className="text-text-secondary text-sm">
        {toRoman(currentYear)}
      </div>
    </div>
  )
}

export default FooterClock

