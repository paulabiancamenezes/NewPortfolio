import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted border-4 border-accent/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/perfil.jpg"
                alt="My profile photo"
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Desenvolvedora <span className="text-accent">Back-end</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
              Focada em evoluir com Node.js e desenvolvimento de APIs robustas
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Graduando Engenharia de computação, sou determinada por criar soluções eficientes e escaláveis. Focada em clean code, performance e boas práticas
              de desenvolvimento back-end.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#projetos" className="flex items-center gap-2">
                Ver Projetos
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>

            <div className="flex gap-4">
              <Link href="https://github.com/paulabiancamenezes" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/paula-bianca-menezes-068563279/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Button variant="outline" size="icon" asChild>
                  <a href="mailto:manitinhu@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Node.js</h3>
              <p className="text-muted-foreground text-sm">Desenvolvimento de APIs REST</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Databases</h3>
              <p className="text-muted-foreground text-sm">MongoDB, PostgreSQL, MySQL</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">DevOps</h3>
              <p className="text-muted-foreground text-sm">Docker, AWS, CI/CD</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
