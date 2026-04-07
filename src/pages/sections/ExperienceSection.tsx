import { Building2, Globe } from 'lucide-react'
import { SignatureDivider } from '@/components/SignatureDivider'

export function ExperienceSection() {
  return (
    <section id="about-us" className="py-24 bg-brand-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden bg-brand-muted">
              <img
                src="https://img.usecurling.com/p/800/1000?q=architectural%20columns&color=gray&dpr=2"
                alt="Classical architectural columns"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-brand-primary text-white p-8 shadow-2xl z-10 max-w-[200px]">
              <div className="text-4xl font-display mb-2">60+</div>
              <div className="text-xs uppercase tracking-widest text-brand-gold font-bold leading-tight">
                Years of Practice
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-brand-primary leading-tight">
                Uma Trajetória <br />
                Esculpida pela <br />
                Rigorosidade e <br />
                Confiança.
              </h2>
              <p className="text-lg text-brand-primary/70 leading-relaxed max-w-xl">
                Founded in 1964, Melo Advogados has stood as a pillar of legal stability through
                decades of economic shifts. Our reputation is built on the meticulous analysis of
                tax law, providing our clients with robust fiscal security and strategic advantages.
              </p>
            </div>

            <div className="space-y-8 pt-6 border-t border-brand-muted">
              <div className="flex gap-6 items-start">
                <div className="mt-1 bg-brand-surface p-3 rounded-sm text-brand-primary">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-primary mb-1">
                    Fundado em 1964
                  </h4>
                  <p className="text-brand-primary/60 text-sm leading-relaxed">
                    Six decades of continuous legal service and market leadership.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="mt-1 bg-brand-surface p-3 rounded-sm text-brand-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-primary mb-1">
                    Reputação Inabalável
                  </h4>
                  <p className="text-brand-primary/60 text-sm leading-relaxed">
                    Recognized by the most prestigious legal directories globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <SignatureDivider />
        </div>
      </div>
    </section>
  )
}
