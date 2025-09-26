import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    title: "Estagiária de Suporte para HelpDesk",
    company: "Prefeitura de Itanhaém",
    period: "2022 - 2024",
    description:
      "Suporte aos servidores públicos da prefeitura de Itanhaém.",
    technologies: ["Redes", "Mapeamento de impressoras", "Windows", "Resolução de problemas"],
  },
  {
    id: 2,
    title: "Analista de Suporte Técnico para TELECOM",
    company: "WSNET TELECOM",
    period: "2024 - Presente",
    description:
      "Suporte N1, N2, ágil e resolutivo a clientes e técnicos em operações de campo.",
    technologies: ["Redes", "Protocolos", "Utilitários", "Resolução de problemas", "Autenticação"],
  },
  {
    id: 3,
    title: "Freelancer",
    company: "Projetos Pessoais",
    period: "Periodicamente",
    description:
      "Desenvolvimento de pequenas aplicações web e soluções técnicas para clientes locais.",
    technologies: ["Node.js", "Postgres", "Next.JS", "CSS", "Configuração de equipamentos", "JavaScript", "Canvas"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiências Profissionais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada no desenvolvimento back-end e demais tecnologias que domino.
            </p>
          </div>

          {/* Timeline horizontal para desktop, vertical para mobile */}
          <div className="relative">
            {/* Linha da timeline */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8 gap-5 md:space-y-0 md:flex md:justify-around md:items-center">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative md:w-80">
                  {/* Ponto da timeline */}
                  <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 md:-top-2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>

                  {/* Card da experiência */}
                    <Card className="p-6 ml-8 md:ml-0">
                      <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
