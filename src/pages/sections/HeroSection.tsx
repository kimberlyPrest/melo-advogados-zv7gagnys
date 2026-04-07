import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Dark Red Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=classical%20library&color=black"
          alt="Classical Law Library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/80 to-brand-primary/60" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-9 space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">
              Legacy of Excellence Since 1964
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1]">
              60 Anos de <br />
              <span className="italic font-light">Excelência</span> em <br />
              Direito Tributário.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
            Tradition and Innovation in Fiscal Strategy. Navigating the complexity of the Brazilian
            tax system with six decades of mastery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              className="bg-white text-brand-primary hover:bg-white/90 rounded-none h-14 px-8 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              onClick={() => (window.location.hash = '#contact')}
            >
              Agendar Consultoria
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-brand-primary rounded-none h-14 px-8 text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-transparent"
              onClick={() => (window.location.hash = '#about-us')}
            >
              Nossa História
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-3 justify-end h-full items-end pb-12">
          <div className="flex items-center gap-4 text-white/50 animate-fade-in">
            <span className="writing-vertical-rl transform rotate-180 uppercase tracking-[0.3em] text-xs font-semibold">
              Melo Advogados & Associados
            </span>
            <div className="w-px h-24 bg-white/30" />
          </div>
        </div>
      </div>

      <a
        href="#about-us"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
