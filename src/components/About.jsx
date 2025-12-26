function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-text mb-8 text-center">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-6">
            Welcome to my portfolio! I'm a passionate frontend developer dedicated to creating
            beautiful, functional, and user-friendly web experiences.
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-6">
            With a keen eye for design and a love for clean code, I specialize in building
            modern web applications using the latest technologies and best practices.
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or working on personal creative endeavors.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

