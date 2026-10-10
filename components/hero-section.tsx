import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-12 animate-fade-in">
          {/* Logo without background circle */}
          <Image
            src="/images/Logo_website.png"
            alt="Gaana Meera School of Fine Arts"
            width={200}
            height={200}
            className="relative mx-auto z-10"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up">
          {/* Coming Soon Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-balance">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md font-light text-balance">
              Stay tuned for something extraordinary
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-16 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4 drop-shadow-md">
                Get in Touch
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-white/90">
                  <Phone className="w-5 h-5 text-yellow-300" />
                  <span className="text-lg drop-shadow-md">+1 (416) 558-7596</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/90">
                  <Mail className="w-5 h-5 text-yellow-300" />
                  <span className="text-lg drop-shadow-md">
                    gaanameerafinearts@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </main>
  )
}
