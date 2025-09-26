import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Linguagens & Frameworks",
    skills: [
      { name: "JavaScript/TypeScript" },
      { name: "Node.js" },
      { name: "Express.js/Fastify" },
      { name: "React/Next.JS" },
    ],
  },
  {
    title: "Bancos de Dados",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ],
  },
  {
    title: "DevOps & Ferramentas",
    skills: [
      { name: "Docker" },
      { name: "Git/GitHub" },
      { name: "AWS" },
      { name: "CI/CD" },
    ],
  },
]

const additionalSkills = [
  "REST APIs",
  "GraphQL",
  "JWT Authentication",
  "WebSockets",
  "Microservices",
  "Test-Driven Development",
  "Agile/Scrum",
  "API Documentation",
  "Performance Optimization",
  "Security Best Practices",
  "Clean Code",
  "Design Patterns",
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo no desenvolvimento de soluções back-end e intenciono meus estudos.
            </p>
          </div>

          {/* Skills com níveis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills adicionais */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">Conhecimentos a serem aprimorados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
