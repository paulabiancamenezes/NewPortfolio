import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sistema de Agendamento de horários",
    subtitle:"Em desenvolvimento",
    description: "Aplicação de agendamento de horários e controle de usuários inicialmente para barbearias/salões de beleza.",
    image: "/minha-barbearia.jpg",
    technologies: ["Node.js", "Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/paulabiancamenezes/minha-barbearia",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 2,
    title: "API de Gerenciamento de Artistas e Músicas",
    subtitle:"Em desenvolvimento",
    description: "Sistema de gerenciamento permitindo criar, listar, atualizar e deletar registros de forma simples e eficiente, com busca inteligente por nome.",
    image: "/API-REST-I.jpg",
    technologies: ["Node.js", "Express", "Sequelize", "PostgreSQL", "Neon"],
    githubUrl: "https://github.com/paulabiancamenezes/MelodyAPI",
    liveUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em Node.js e desenvolvimento back-end
            </p>
          </div>

          {featuredProjects.length > 0 ? (
            <>
              {/* Projetos em destaque */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Código
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver Projeto
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground mb-16">
              <p className="text-lg">Em desenvolvimento, por favor aguarde...</p>
            </div>
          )}

          {/* Outros projetos */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Outros Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-md transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-700 dark:text-green-400">
                          {project.subtitle}
                        </span>
                      </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
