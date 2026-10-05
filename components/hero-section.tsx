import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between gap-6 px-5 py-4 md:px-8 md:py-6 bg-gradient-to-r from-[#800020]/95 to-[#a00030]/95 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Logo_website.png"
            alt="Gaana Meera Academy Hub"
            width={50}
            height={50}
            className="w-12 h-12"
          />
        </div>

        {/* Menu Items - Center */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-white text-sm font-medium hover:text-yellow-300 transition">
            About
          </a>
          <a href="#gallery" className="text-white text-sm font-medium hover:text-yellow-300 transition">
            Gallery
          </a>
          <a href="#students" className="text-white text-sm font-medium hover:text-yellow-300 transition">
            Students
          </a>
          <a href="#contact" className="text-white text-sm font-medium hover:text-yellow-300 transition">
            Contact
          </a>
        </div>

        {/* Join Now Button */}
        <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-[#800020] font-semibold transition rounded text-sm">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4 text-center py-20">
        {/* Main Heading */}
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
            Master the Art of<br />Carnatic Music
          </h1>

          {/* Explore Classes Button */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-yellow-500 text-[#800020] hover:bg-yellow-400 font-semibold transition rounded text-lg">
              Explore Classes
            </button>
          </div>
        </div>
      </section>

      {/* About the Guru Section */}
      <section id="about" className="relative z-10 py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Guru Image */}
            <div className="flex justify-center">
              <div className="w-64 h-80 relative rounded-lg overflow-hidden shadow-xl border-4 border-gray-300">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Guru Vanathy Gowreesan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Guru Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About the Guru</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Guru Vanathy Gowreesan, Founder and Director, is a passionate Carnatic music educator and visionary. She brings a thoughtful, traditional approach to every lesson while helping students build confidence and a lasting connection to music.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With years of experience, she guides students through voice culture, rhythm, repertoire, and performance, creating a welcoming space for every learner to grow.
              </p>
              <p className="font-semibold text-gray-900 text-lg pt-2">
                Guru Vanathy Gowreesan, Founder
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
