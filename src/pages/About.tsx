import { motion } from 'framer-motion';
import { Briefcase, Award, Heart } from 'lucide-react';
import { personalInfo, experience, skills, personality } from '@/data/portfolio-data';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {'<About Me />'}
        </h1>
        <p className="text-lg text-muted-foreground">
          Get to know me better
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            {personalInfo.bio.split('\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="px-4 py-2 bg-muted rounded-lg">
              📍 {personalInfo.location}
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg">
              📧 {personalInfo.email}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Personality Traits */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Personality</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {personality.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-3 bg-muted rounded-lg text-center text-sm font-medium text-foreground"
              >
                {trait}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                
                <div className="mb-1">
                  <span className="text-sm text-primary font-mono">
                    {exp.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                
                <p className="text-secondary font-medium mb-2">
                  {exp.company}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
