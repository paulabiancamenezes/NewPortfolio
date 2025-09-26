import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sobre */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Sobre Mim</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvedora back-end apaixonada por criar soluções eficientes e escaláveis usando Node.js e
                tecnologias modernas.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <nav className="space-y-2">
                <a href="#sobre" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Sobre
                </a>
                <a
                  href="#experiencias"
                  className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Experiências
                </a>
                <a href="#projetos" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Projetos
                </a>
                <a href="#habilidades" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Habilidades
                </a>
                <a href="#contato" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                  Contato
                </a>
              </nav>
            </div>

            {/* Redes sociais */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Conecte-se</h3>
              <div className="flex gap-3">
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
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              Feito com <Heart className="h-4 w-4 text-purple-500 fill-current" /> usando Next.js e shadcn/ui
            </p>
            <p className="text-muted-foreground text-xs mt-2">© 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
