import { LineChart, Scale, ShieldCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Planejamento Tributário',
    description:
      'Estratégias preventivas para otimização da carga fiscal, garantindo conformidade e eficiência financeira.',
    icon: LineChart,
  },
  {
    title: 'Contencioso Fiscal',
    description:
      'Representação técnica em esferas administrativa e judicial, defendendo os interesses da sua empresa com rigor.',
    icon: Scale,
  },
  {
    title: 'Compliance & Auditoria',
    description:
      'Monitoramento constante das obrigações acessórias e gestão de riscos fiscais em tempo real.',
    icon: ShieldCheck,
  },
]

export function ServicesSection() {
  return (
    <section id="practice-areas" className="py-24 bg-brand-surface">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">
            Especialidades
          </p>
          <h2 className="text-4xl md:text-5xl text-brand-primary">Direito Tributário</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-10 transition-all duration-500 hover:bg-brand-bg hover:shadow-elevation border border-transparent hover:border-brand-muted flex flex-col h-full"
            >
              <div className="mb-8">
                <service.icon className="w-8 h-8 text-brand-primary transition-colors duration-300 group-hover:text-brand-gold stroke-[1.5]" />
              </div>

              <h3 className="text-2xl font-display text-brand-primary mb-4 font-semibold">
                {service.title}
              </h3>

              <p className="text-brand-primary/70 mb-8 flex-1 leading-relaxed">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:text-brand-gold transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
