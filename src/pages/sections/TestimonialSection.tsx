import { Quote } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section className="py-32 bg-brand-muted relative overflow-hidden flex items-center justify-center">
      {/* Abstract structural texture overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-multiply"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #2c0001 0, #2c0001 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <Quote className="w-12 h-12 mx-auto text-brand-gold mb-10 opacity-80" />

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-brand-primary leading-tight mb-12">
          "Encontramos na Melo Advogados não apenas suporte jurídico, mas um parceiro estratégico
          que entende a alma do nosso negócio e protege nosso patrimônio com maestria."
        </h3>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-primary/70 mb-1">
            Diretoria Executiva
          </p>
          <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
            Grupo Industrial Multinacional
          </p>
        </div>
      </div>
    </section>
  )
}
