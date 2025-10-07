import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio-data';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
          <Rocket className="w-5 h-5 text-primary animate-float" />
          <span className="text-sm font-medium text-primary">Projects</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {'<My Work />'}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I've built, ranging from web applications to
          open-source contributions. Each project showcases different skills and technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>

      {/* Empty State Message */}
      {projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Projects Coming Soon
          </h3>
          <p className="text-muted-foreground">
            I'm working on some exciting projects. Check back later!
          </p>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Let's Talk
          </a>
        </div>
      </motion.div>
    </div>
  );
}
