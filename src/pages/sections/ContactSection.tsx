import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'E-mail corporativo inválido.' }),
  subject: z.string().min(1, { message: 'Selecione um assunto.' }),
  message: z.string().min(10, { message: 'A mensagem deve ser mais descritiva.' }),
})

export function ContactSection() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'Solicitação Enviada',
      description: 'Nossa equipe de especialistas entrará em contato em breve.',
    })
    form.reset()
  }

  return (
    <section id="contact" className="py-24 bg-brand-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-brand-primary">
                Vamos Discutir <br /> sua Estratégia.
              </h2>
              <p className="text-lg text-brand-primary/70 max-w-md leading-relaxed">
                Entre em contato para agendar uma consultoria privada com nossos especialistas em
                Direito Tributário.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-brand-muted">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-primary/50 font-bold mb-2">
                  Escritório Central
                </p>
                <p className="text-brand-primary font-medium">Av. Paulista, 2000 — 10º Andar</p>
                <p className="text-brand-primary/70 text-sm">São Paulo, SP | Brasil</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-brand-primary/50 font-bold mb-2">
                  Canais de Atendimento
                </p>
                <p className="text-brand-primary font-bold text-lg">+55 (11) 3040-5000</p>
                <p className="text-brand-primary/70 text-sm">contato@meloadvogados.com.br</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-brand-primary/70 font-bold">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="bg-transparent border-0 border-b border-brand-primary/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-brand-primary/70 font-bold">
                          E-mail Corporativo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu@empresa.com"
                            {...field}
                            className="bg-transparent border-0 border-b border-brand-primary/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-brand-primary/70 font-bold">
                        Assunto
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border-0 border-b border-brand-primary/20 rounded-none px-0 focus:ring-0 focus:border-brand-primary">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="consultoria">Consultoria Tributária</SelectItem>
                          <SelectItem value="contencioso">Contencioso Fiscal</SelectItem>
                          <SelectItem value="auditoria">Compliance & Auditoria</SelectItem>
                          <SelectItem value="outros">Outros Assuntos</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-brand-primary/70 font-bold">
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Como podemos ajudar sua empresa?"
                          className="resize-none bg-transparent border-0 border-b border-brand-primary/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-brand-primary min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-none h-14 text-sm font-bold tracking-widest uppercase mt-4"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
