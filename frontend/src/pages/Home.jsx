import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap, MapPin, BookOpen, FileText, Calendar, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkillTab, setActiveSkillTab] = useState('programming');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['about', 'projects', 'experience', 'publications', 'certifications', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillIcons = {
    'Python': { icon: '🐍', bg: 'bg-slate-800/50' },
    'Java': { icon: '☕', bg: 'bg-slate-800/50' },
    'JavaScript': { icon: '⚡', bg: 'bg-slate-800/50' },
    'Swift': { icon: '🔶', bg: 'bg-slate-800/50' },
    'SQL': { icon: '📊', bg: 'bg-slate-800/50' },
    'React': { icon: '⚛️', bg: 'bg-slate-800/50' },
    'Node.js': { icon: '🟢', bg: 'bg-slate-800/50' },
    'NumPy': { icon: '🔢', bg: 'bg-slate-800/50' },
    'Pandas': { icon: '🐼', bg: 'bg-slate-800/50' },
    'LangChain': { icon: '🔗', bg: 'bg-slate-800/50' },
    'Streamlit': { icon: '🎯', bg: 'bg-slate-800/50' },
    'AWS': { icon: '☁️', bg: 'bg-slate-800/50' },
    'Bedrock': { icon: '🧱', bg: 'bg-slate-800/50' },
    'Lambda': { icon: '⚡', bg: 'bg-slate-800/50' },
    'DynamoDB': { icon: '💾', bg: 'bg-slate-800/50' },
    'EC2': { icon: '🖥️', bg: 'bg-slate-800/50' },
    'S3': { icon: '🪣', bg: 'bg-slate-800/50' },
    'MySQL': { icon: '🐬', bg: 'bg-slate-800/50' },
    'MongoDB': { icon: '🍃', bg: 'bg-slate-800/50' },
    'PostgreSQL': { icon: '🐘', bg: 'bg-slate-800/50' },
    'Agile': { icon: '🔄', bg: 'bg-slate-800/50' },
    'Scrum': { icon: '🏉', bg: 'bg-slate-800/50' },
    'Git': { icon: '📦', bg: 'bg-slate-800/50' },
    'Unit Testing': { icon: '✅', bg: 'bg-slate-800/50' },
    'CI/CD': { icon: '🔁', bg: 'bg-slate-800/50' },
    'REST APIs': { icon: '🌐', bg: 'bg-slate-800/50' }
  };

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'JavaScript', 'Swift', 'SQL']
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: ['React', 'Node.js', 'NumPy', 'Pandas', 'LangChain', 'Streamlit']
    },
    cloud: {
      title: 'Cloud & AWS',
      icon: Cloud,
      skills: ['AWS', 'Bedrock', 'Lambda', 'DynamoDB', 'EC2', 'S3']
    },
    databases: {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'DynamoDB', 'SQL', 'MongoDB', 'PostgreSQL']
    },
    tools: {
      title: 'Tools & Methodologies',
      icon: Award,
      skills: ['Agile', 'Scrum', 'Git', 'Unit Testing', 'CI/CD', 'REST APIs']
    }
  };

  const experiences = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'August 2024 - Present',
      current: true,
      featured: true,
      description: [
        'Assisted professors in delivering undergraduate and graduate-level courses in Computer Science',
        'Supported students with programming, data analysis, and core computer science concepts including AI, Software Engineering, and Data Modeling',
        'Guided students through Python, Java, SQL, and data structures assignments with hands-on mentorship',
        'Improved students understanding of problem-solving, analytical thinking, and software development best practices',
        'Conducted office hours and grading for 50+ students across multiple courses'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'Wynswell Global',
      location: 'Bengaluru, India',
      period: 'March 2024 - May 2024',
      duration: '3 mos',
      current: false,
      featured: true,
      description: [
        'Analyzed and processed large datasets using Python (Pandas, NumPy) to uncover business trends and patterns',
        'Built interactive dashboards and visualizations using Streamlit to present insights to stakeholders',
        'Wrote optimized SQL queries for relational and NoSQL databases, improving query performance by 40%',
        'Collaborated with cross-functional teams to translate business requirements into technical solutions',
        'Conducted data quality assessments and implemented automated data cleaning pipelines'
      ]
    },
    {
      title: 'President',
      company: 'Indian Student Association - University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'Jan 2026 - Present',
      duration: '2 mos',
      current: true,
      featured: false,
      description: [
        'Lead strategic planning and organizational development initiatives',
        'Oversee operations and coordinate events to enhance member engagement',
        'Guide team collaboration to achieve organizational goals'
      ],
      skills: ['Leadership', 'Event Planning', 'Team Management']
    },
    {
      title: 'Vice President',
      company: 'Indian Student Association - University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'May 2025 - Dec 2025',
      duration: '8 mos',
      current: false,
      featured: false,
      description: [
        'Supported organizational leadership and strategic initiatives',
        'Coordinated student engagement activities and community events'
      ],
      skills: ['Leadership', 'Communication']
    }
  ];

  const projects = [
    {
      title: 'AI-Based Content Summarization System',
      description: 'Built an AI-powered desktop application using Python, GPT-4, and LangChain to generate concise summaries from long-form text.',
      technologies: ['Python', 'GPT-4', 'LangChain', 'OpenAI API', 'Prompt Engineering'],
      highlights: [
        'Designed structured prompt engineering strategies',
        'Integrated GPT-4 via OpenAI API with error handling',
        'Applied ROUGE benchmarking methodology',
        'Impact: Reduced document review time by 75%'
      ],
      period: '2024'
    },
    {
      title: 'Training and Placement Management System',
      description: 'Designed production-grade relational database using PostgreSQL with advanced SQL features.',
      technologies: ['PostgreSQL', 'SQL', 'PL/pgSQL', 'Database Design'],
      highlights: [
        'Complete ER modeling and schema design',
        'Index optimization for performance',
        'PL/pgSQL stored functions for job matching',
        'Impact: Automated placement workflows'
      ],
      period: '2023 - 2024'
    },
    {
      title: 'Ethical Implications of Big Data Analytics',
      description: 'Conducted research analyzing ethical risks in Big Data analytics across Meta, TikTok, and X.',
      technologies: ['Research', 'Data Ethics', 'AI Governance'],
      highlights: [
        'Developed 4-parameter evaluation model',
        'Proposed Algorithmic Transparency Index',
        'Cross-cultural regulatory comparison',
        'Impact: AI accountability framework'
      ],
      period: '2024'
    },
    {
      title: 'Student Analytics Platform',
      description: 'Full-stack platform using React, Node.js, Python, SQL, and AWS.',
      technologies: ['React', 'Node.js', 'Python', 'AWS'],
      highlights: [
        'Built scalable REST APIs',
        'Backend analytics with Pandas',
        'AWS deployment',
        'Impact: Streamlined workflows'
      ],
      period: '2023 - 2024'
    },
    {
      title: 'Data Analytics Pipeline',
      description: 'Complete data workflow from collection to visualization.',
      technologies: ['Python', 'SQL', 'Pandas', 'ETL'],
      highlights: [
        'Automated quality checks',
        'Statistical analysis',
        'Interactive dashboards',
        'Impact: 60% faster processing'
      ],
      period: '2024'
    },
    {
      title: 'Algorithmic Trading Simulator',
      description: 'Backtesting platform for trading strategies.',
      technologies: ['Python', 'Pandas', 'Financial Modeling'],
      highlights: [
        'Multiple trading algorithms',
        'Portfolio optimization',
        'Performance analytics',
        'Impact: Risk-free testing'
      ],
      period: '2022 - 2023'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'Expected May 2026',
      gpa: '3.667',
      current: true,
      coursework: ['Algorithms', 'Software Engineering', 'Database Systems', 'Mobile Development']
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'New Horizon College of Engineering',
      location: 'Bengaluru, India',
      period: '2020 - 2024',
      gpa: '3.6',
      coursework: ['Web Frameworks', 'Machine Learning', 'OOP', 'Cloud Computing']
    }
  ];

  const publications = [
    {
      title: 'A Comprehensive Literature Review on the Internet of Things (IOT)',
      venue: 'IJSRCSEIT',
      year: '2023',
      url: 'https://ijsrcseit.com/home/issue/view/article.php?id=CSEIT239811'
    },
    {
      title: 'Navigating Online Aisles: Collaborative Filtering For Personalised Grocery Suggestions',
      venue: 'IEEE Conference 2024',
      year: '2024'
    }
  ];

  const certifications = [
    {
      title: 'Databricks Accredited Generative AI Fundamentals',
      issuer: 'Databricks Academy',
      date: 'Feb 2026',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/q4rkrdqh_Screenshot%202026-02-15%20at%204.12.43%E2%80%AFPM.png'
    },
    {
      title: 'UI/UX Design Level 1',
      issuer: 'HashJob',
      date: 'Mar 2024',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/lr97j9ba_Certificate1709815108205.png'
    },
    {
      title: 'Journey to Cloud: Envisioning Your Solution',
      issuer: 'AWS',
      date: 'Apr 2024',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/12994r3e_Journey_to_Cloud__Envisioning_Your_Solution_Badge20240418-40-9stp0w.pdf'
    },
    {
      title: 'Python Basic Certificate',
      issuer: 'HackerRank',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/l37s8r0z_python_basic%20certificate.pdf'
    },
    {
      title: 'Research Paper Publication Certificate',
      issuer: 'IEEE/Journal',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/ic859l39_Certificate%20for%20paper%20publishing.pdf'
    },
    {
      title: 'Boosting Performance Through Caching Workshop',
      issuer: 'Singapore Global IT Academy',
      date: 'July 03, 2022',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/f2aus4g9_WhatsApp%20Image%202026-02-15%20at%204.34.08%20PM.jpeg'
    },
    {
      title: 'Operating Systems Short Course',
      issuer: 'Singapore Global IT Academy',
      date: 'December 17-18, 2022',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/q08uua7t_WhatsApp%20Image%202026-02-15%20at%204.33.17%20PM.jpeg'
    },
    {
      title: 'Neo Codeathon Certificate',
      issuer: 'Neo',
      image: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/fc0vdofi_Neo%20codeathon.pdf'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${
        scrollY > 50 ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-[#0a0a0a]'
      } border-b border-gray-800`}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">Pranith Bhukya</div>
            <div className="hidden md:flex gap-6">
              {['About', 'Projects', 'Experience', 'Publications', 'Certifications', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium hover-underline ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/3jlewvd3_efe62cd4-6ee9-4106-a55a-34a2c979de14.jpeg"
              alt="Pranith Bhukya" 
              className="w-72 h-72 object-cover rounded-3xl shadow-2xl border-2 border-gray-700"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="flex-1">
              <h1 className="text-6xl font-bold text-white mb-4 leading-tight">Software Engineer</h1>
              <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
                AI & Data Systems Engineer • Published Researcher • Student Leader
              </p>
              <div className="flex flex-wrap gap-6 text-base">
                <a href="mailto:pranithbhukya09@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Pranith_Bhukya_Resume.pdf';
                    link.download = 'Pranith_Bhukya_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* About */}
          <section id="about" className="py-16">
            <h2 className="text-3xl font-bold text-white mb-6">About</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Software Engineer and AI & Data Systems Engineer with hands-on experience building Generative AI applications, 
              scalable backend systems, and production-grade databases. Published researcher with expertise in AI governance, 
              database architecture, and data analytics. Currently serving as President of the Indian Student Association at 
              the University of Houston Clear Lake, leading strategic initiatives and community engagement while pursuing a 
              Master's in Computer Science. Passionate about responsible AI development, system design, and solving complex 
              technical problems through innovative solutions. Experienced in full-stack development with React, Node.js, Python, 
              and AWS, with a strong foundation in data analysis using SQL, Pandas, and NumPy. Actively seeking full-time 
              opportunities where I can leverage my technical skills and leadership experience to contribute to impactful projects.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-[#141414] border-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-black/30 transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">{project.period}</Badge>
                    </div>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-800 text-gray-300 border-gray-700 text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative pl-6 border-l-2 ${
                  exp.featured ? 'border-blue-500' : 'border-gray-700'
                }`}>
                  <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-2 ${
                    exp.featured ? 'bg-blue-500 border-blue-400' : 'bg-gray-600 border-gray-500'
                  }`}></div>
                  <h3 className={`text-xl font-bold ${
                    exp.featured ? 'text-blue-400' : 'text-white'
                  }`}>{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    {exp.current && <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">Current</Badge>}
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} className="bg-gray-800 text-gray-400 border-gray-700 text-xs">{skill}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section id="publications" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-10">Publications</h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="bg-[#141414] border-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg text-white">{pub.title}</CardTitle>
                        <p className="text-blue-400 mt-1">{pub.venue} · {pub.year}</p>
                      </div>
                      {pub.url && (
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section id="certifications" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-10">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-[#141414] border-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-black/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-base text-white">{cert.title}</CardTitle>
                    <CardDescription className="text-gray-500">
                      {cert.issuer} {cert.date && `· ${cert.date}`}
                    </CardDescription>
                  </CardHeader>
                  {cert.image && (
                    <CardContent>
                      <a 
                        href={cert.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <img src={cert.image} alt={cert.title} className="rounded border border-gray-700 w-full hover:border-blue-500 transition-colors" />
                      </a>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-10">Technical Skills</h2>
            <Card className="bg-[#141414] border-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(skillCategories).map((category) => {
                    const Icon = skillCategories[category].icon;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveSkillTab(category)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeSkillTab === category
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {skillCategories[category].title}
                      </button>
                    );
                  })}
                </div>

                <div>
                  {Object.keys(skillCategories).map((category) => (
                    <div key={category} className={activeSkillTab === category ? 'block' : 'hidden'}>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {skillCategories[category].skills.map((skill) => {
                          const skillData = skillIcons[skill] || { icon: '💻', bg: 'bg-slate-800/50' };
                          return (
                            <div key={skill} className={`${skillData.bg} border border-gray-700 rounded-lg p-3 text-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all`}>
                              <div className="text-2xl mb-1">{skillData.icon}</div>
                              <div className="text-white text-xs font-medium">{skill}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Education */}
          <section id="education" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-10">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-[#141414] border-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl text-white">{edu.degree}</CardTitle>
                        <CardDescription className="text-blue-400 font-medium">{edu.institution}</CardDescription>
                        <p className="text-gray-500 mt-1">{edu.location} · {edu.period} · GPA: {edu.gpa}</p>
                      </div>
                      {edu.current && <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">In Progress</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} className="bg-gray-800 text-gray-400 border-gray-700 text-xs">{course}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              Open to discussing opportunities, projects, or collaborations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-[#141414] border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-5">
                  <Mail className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:pranithbhukya09@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm">
                    pranithbhukya09@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-[#141414] border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-5">
                  <Phone className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+13464902475" className="text-blue-400 hover:text-blue-300 text-sm">
                    +1 (346) 490-2475
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-[#141414] border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-5">
                  <Linkedin className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                    linkedin.com/in/pranith-bhukya
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-[#141414] border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-5">
                  <MapPin className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Houston, TX</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Pranith Bhukya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;