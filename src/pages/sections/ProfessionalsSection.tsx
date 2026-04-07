const professionals = [
  {
    name: 'Dr. Ricardo Melo',
    role: 'Sócio Fundador',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=4',
  },
  {
    name: 'Dra. Helena Souza',
    role: 'Sócia • Contencioso',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=8',
  },
  {
    name: 'Dr. Marcos Lima',
    role: 'Sócio • Planejamento',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=15',
  },
  {
    name: 'Dra. Beatriz Costa',
    role: 'Especialista • Tax',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=12',
  },
]

export function ProfessionalsSection() {
  return (
    <section id="professionals" className="py-24 bg-brand-bg">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-brand-muted pb-8">
          <div className="space-y-4 max-w-xl">
            <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">
              Corpo Jurídico
            </p>
            <h2 className="text-4xl md:text-5xl text-brand-primary">Liderança Especializada</h2>
          </div>
          <div className="max-w-xs">
            <p className="text-brand-primary/60 italic font-display">
              "A excelência jurídica é o resultado da união entre a experiência consolidada e a
              visão contemporânea."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((prof, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-brand-muted mb-6">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-display text-brand-primary font-bold mb-1">
                {prof.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-brand-primary/50 font-semibold">
                {prof.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
