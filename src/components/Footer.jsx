import FooterClock from './FooterClock'

function Footer() {
  return (
    <footer className="bg-background-alt border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Tesla Quote */}
          <p className="text-text-secondary text-sm sm:text-base text-center md:text-left italic max-w-3xl">
            "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration." - Nikola Tesla
          </p>

          {/* Clock */}
          <FooterClock />
        </div>
      </div>
    </footer>
  )
}

export default Footer

