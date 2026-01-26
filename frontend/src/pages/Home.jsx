import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const profileImage = "https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/3jlewvd3_efe62cd4-6ee9-4106-a55a-34a2c979de14.jpeg";

  const skills = {
    programming: ['Python', 'Java', 'JavaScript', 'Swift', 'SQL'],
    frameworks: ['React', 'Node.js', 'NumPy', 'Pandas', 'LangChain'],
    cloud: ['AWS', 'Bedrock', 'Lambda', 'DynamoDB'],
    databases: ['MySQL', 'DynamoDB', 'SQL'],
    tools: ['Agile', 'Scrum', 'Git', 'Streamlit', 'Unit Testing']
  };

  const experiences = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'August 2024 - Present',
      description: [
        'Assisted professors in delivering undergraduate and graduate-level courses',
        'Supported students with programming, data analysis, and core computer science concepts',
        'Guided students through Python, Java, SQL, and data structures assignments',
        'Improved students understanding of problem-solving and analytical thinking'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'Wynswell Global',
      location: 'Bengaluru, India',
      period: 'March 2024 - May 2024',
      description: [
        'Analyzed and processed large datasets using Python (Pandas, NumPy) to uncover trends',
        'Built interactive dashboards and visualizations using Streamlit',
        'Wrote optimized SQL queries for relational and NoSQL databases',
        'Collaborated with cross-functional teams to translate business requirements'
      ]
    }
  ];

  const projects = [
    {
      title: 'Unified Student Analytics and Management Platform',
      description: 'Developed a unified web-based platform to manage student, hostel, and academic data with integrated analytics capabilities.',
      technologies: ['React', 'Node.js', 'Python', 'SQL', 'Pandas', 'AWS', 'REST APIs'],
      highlights: [
        'Built scalable REST APIs for data management',
        'Analyzed data to generate actionable insights',
        'Deployed backend components on AWS',
        'Followed Agile development practices'
      ]
    },
    {
      title: 'Data Analytics and Software Project',
      description: 'Designed an end-to-end data analytics project involving data collection, preprocessing, analysis, and insight presentation.',
      technologies: ['Python', 'SQL', 'Pandas', 'Data Visualization'],
      highlights: [
        'Cleaned and transformed complex datasets',
        'Created clear reports and visualizations',
        'Focused on accuracy and reproducibility',
        'Implemented Agile development methodology'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'Expected May 2026',
      gpa: '3.667',
      coursework: ['Analysis of Algorithms', 'Software Engineering', 'Database Systems', 'Mobile Development']
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'New Horizon College of Engineering',
      location: 'Bengaluru, India',
      period: '2020 - 2024',
      gpa: '3.6',
      coursework: ['Web Frameworks', 'Data Mining and Machine Learning', 'Object-Oriented Programming', 'Cloud Computing']
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pranith Bhukya
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-cyan-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-cyan-400 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-1">
                  Available for Full-Time Opportunities
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Software Engineer &
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Data Analyst
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                2+ years of experience in data analysis, software development, and academic research. 
                Skilled in Python, SQL, and cloud technologies with a passion for building scalable solutions.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-lg"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-lg"
                  onClick={() => window.open('https://www.linkedin.com/in/pranith-bhukya/', '_blank')}
                >
                  View LinkedIn
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
                <img 
                  src={profileImage} 
                  alt="Pranith Bhukya" 
                  className="relative w-80 h-80 object-cover rounded-2xl border-2 border-slate-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate Software Engineer and Data Analyst with over 2 years of experience in building 
                data-driven solutions and scalable software systems. Currently pursuing my Master's in Computer Science 
                at the University of Houston Clear Lake while serving as a Graduate Teaching Assistant.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                My expertise spans across full-stack development, data analytics, and cloud computing. I've successfully 
                delivered projects involving REST APIs, data visualization, and AWS deployments. I thrive in collaborative 
                environments and am driven by the challenge of turning complex problems into elegant solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm actively seeking full-time opportunities where I can leverage my technical skills and analytical 
                mindset to contribute to innovative projects and drive business value through technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <CardTitle className="text-white">Programming Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-cyan-400" />
                  <CardTitle className="text-white">Frameworks & Libraries</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-cyan-400" />
                  <CardTitle className="text-white">Cloud & AWS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill) => (
                    <Badge key={skill} className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-cyan-400" />
                  <CardTitle className="text-white">Databases</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <CardTitle className="text-white">Tools & Methodologies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-500/10 p-3 rounded-lg">
                        <Briefcase className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-cyan-400 text-lg">{exp.company}</CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-slate-700 text-slate-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2 text-sm">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-cyan-400 text-lg">{edu.institution}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <span>{edu.period}</span>
                        <span className="text-cyan-400 font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-slate-400 font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} className="bg-slate-700 text-slate-200">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-400 mb-12">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:pranithbhukya09@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                  pranithbhukya09@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a href="tel:+13464902475" className="text-cyan-400 hover:text-cyan-300">
                  +1 (346) 490-2475
                </a>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardContent className="p-6">
                <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/pranith-bhukya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  linkedin.com/in/pranith-bhukya
                </a>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-cyan-400">Houston, TX</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Pranith Bhukya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;