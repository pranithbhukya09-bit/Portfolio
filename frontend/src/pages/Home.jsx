import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap, MapPin, BookOpen, FileText, Calendar, Phone, Download } from 'lucide-react';
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
    'Python': { icon: '🐍', bg: 'bg-blue-50' },
    'Java': { icon: '☕', bg: 'bg-blue-50' },
    'JavaScript': { icon: '⚡', bg: 'bg-blue-50' },
    'Swift': { icon: '🔶', bg: 'bg-blue-50' },
    'SQL': { icon: '📊', bg: 'bg-blue-50' },
    'React': { icon: '⚛️', bg: 'bg-blue-50' },
    'Node.js': { icon: '🟢', bg: 'bg-blue-50' },
    'NumPy': { icon: '🔢', bg: 'bg-blue-50' },
    'Pandas': { icon: '🐼', bg: 'bg-blue-50' },
    'LangChain': { icon: '🔗', bg: 'bg-blue-50' },
    'Streamlit': { icon: '🎯', bg: 'bg-blue-50' },
    'AWS': { icon: '☁️', bg: 'bg-blue-50' },
    'Bedrock': { icon: '🧱', bg: 'bg-blue-50' },
    'Lambda': { icon: '⚡', bg: 'bg-blue-50' },
    'DynamoDB': { icon: '💾', bg: 'bg-blue-50' },
    'EC2': { icon: '🖥️', bg: 'bg-blue-50' },
    'S3': { icon: '🪣', bg: 'bg-blue-50' },
    'MySQL': { icon: '🐬', bg: 'bg-blue-50' },
    'MongoDB': { icon: '🍃', bg: 'bg-blue-50' },
    'PostgreSQL': { icon: '🐘', bg: 'bg-blue-50' },
    'Agile': { icon: '🔄', bg: 'bg-blue-50' },
    'Scrum': { icon: '🏉', bg: 'bg-blue-50' },
    'Git': { icon: '📦', bg: 'bg-blue-50' },
    'Unit Testing': { icon: '✅', bg: 'bg-blue-50' },
    'CI/CD': { icon: '🔁', bg: 'bg-blue-50' },
    'REST APIs': { icon: '🌐', bg: 'bg-blue-50' }
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
      description: 'Built an AI-powered desktop application using Python, GPT-4, and LangChain to generate concise summaries from long-form text. The system leverages advanced natural language processing techniques to extract key information while maintaining context and coherence.',
      technologies: ['Python', 'GPT-4', 'LangChain', 'OpenAI API', 'Prompt Engineering'],
      highlights: [
        'Designed structured prompt engineering strategies for optimal summary generation',
        'Integrated GPT-4 via OpenAI API with comprehensive error handling and rate limiting',
        'Applied ROUGE benchmarking methodology for quality assessment',
        'Impact: Reduced document review time by 75% for end users'
      ],
      period: '2024'
    },
    {
      title: 'Training and Placement Management System',
      description: 'Designed and implemented a production-grade relational database using PostgreSQL with advanced SQL features. This comprehensive system streamlines the entire placement process from student registration to job offers.',
      technologies: ['PostgreSQL', 'SQL', 'PL/pgSQL', 'Database Design', 'ER Modeling'],
      highlights: [
        'Complete ER modeling and normalized schema design following 3NF principles',
        'Index optimization achieving 60% improvement in query performance',
        'PL/pgSQL stored functions for intelligent job-candidate matching algorithms',
        'Impact: Automated placement workflows reducing manual processing by 80%'
      ],
      period: '2023 - 2024'
    },
    {
      title: 'Ethical Implications of Big Data Analytics',
      description: 'Conducted comprehensive research analyzing ethical risks in Big Data analytics across major platforms including Meta, TikTok, and X (Twitter). Developed frameworks for responsible AI governance and algorithmic accountability.',
      technologies: ['Research', 'Data Ethics', 'AI Governance', 'Policy Analysis'],
      highlights: [
        'Developed a 4-parameter evaluation model for ethical assessment',
        'Proposed novel Algorithmic Transparency Index for platform accountability',
        'Cross-cultural regulatory comparison across US, EU, and Asian markets',
        'Impact: Contributed to AI accountability framework discussions'
      ],
      period: '2024'
    },
    {
      title: 'Student Analytics Platform',
      description: 'Full-stack web platform built using React, Node.js, Python, SQL, and AWS. The system provides comprehensive analytics for student performance tracking, course management, and institutional reporting.',
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'SQL'],
      highlights: [
        'Built scalable REST APIs handling 1000+ concurrent requests',
        'Backend analytics pipeline using Pandas for real-time data processing',
        'AWS deployment with auto-scaling and load balancing',
        'Impact: Streamlined administrative workflows for 500+ users'
      ],
      period: '2023 - 2024'
    },
    {
      title: 'Data Analytics Pipeline',
      description: 'End-to-end data workflow solution handling collection, transformation, analysis, and visualization. Built robust ETL processes with automated quality checks and interactive dashboards.',
      technologies: ['Python', 'SQL', 'Pandas', 'ETL', 'Data Visualization'],
      highlights: [
        'Automated quality checks with 99.5% data integrity assurance',
        'Statistical analysis modules for trend detection and anomaly identification',
        'Interactive dashboards for business intelligence reporting',
        'Impact: 60% faster data processing compared to legacy systems'
      ],
      period: '2024'
    },
    {
      title: 'Algorithmic Trading Simulator',
      description: 'Comprehensive backtesting platform for developing and testing quantitative trading strategies. Features risk management, portfolio optimization, and detailed performance analytics.',
      technologies: ['Python', 'Pandas', 'Financial Modeling', 'NumPy', 'Statistics'],
      highlights: [
        'Multiple trading algorithm implementations including momentum and mean reversion',
        'Portfolio optimization using Modern Portfolio Theory',
        'Comprehensive performance analytics with Sharpe ratio and drawdown metrics',
        'Impact: Enabled risk-free strategy testing saving potential losses'
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
      link: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/q4rkrdqh_Screenshot%202026-02-15%20at%204.12.43%E2%80%AFPM.png'
    },
    {
      title: 'UI/UX Design Level 1',
      issuer: 'HashJob',
      date: 'Mar 2024',
      link: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/lr97j9ba_Certificate1709815108205.png'
    },
    {
      title: 'Journey to Cloud: Envisioning Your Solution',
      issuer: 'AWS',
      date: 'Apr 2024',
      link: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/ibm0gc02_Journey_to_Cloud__Envisioning_Your_Solution_Badge20240418-40-9stp0w.pdf'
    },
    {
      title: 'Python Basic Certificate',
      issuer: 'HackerRank',
      date: '2024',
      link: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/4zal8f8r_python_basic%20certificate.pdf'
    },
    {
      title: 'Neo Codeathon Certificate',
      issuer: 'Neo',
      date: '2024',
      link: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/9t3e7ljx_Neo%20codeathon.pdf'
    },
    {
      title: 'Operating Systems Short Course',
      issuer: 'Singapore Global IT Academy',
      date: 'December 2022',
      link: 'https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/q08uua7t_WhatsApp%20Image%202026-02-15%20at%204.33.17%20PM.jpeg'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      } border-b border-gray-200`}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Pranith Bhukya</div>
            <div className="hidden md:flex gap-6">
              {['About', 'Projects', 'Experience', 'Publications', 'Certifications', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium hover-underline ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
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
      <section className="pt-36 pb-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/3jlewvd3_efe62cd4-6ee9-4106-a55a-34a2c979de14.jpeg"
              alt="Pranith Bhukya" 
              className="w-72 h-72 object-cover rounded-3xl shadow-xl border border-gray-200"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">Software Engineer</h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                AI & Data Systems Engineer • Published Researcher • Student Leader
              </p>
              <div className="flex flex-wrap gap-6 text-base">
                <a href="mailto:pranithbhukya09@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
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
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Download className="w-5 h-5" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
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
          <section id="projects" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs font-medium">{project.period}</Badge>
                    </div>
                    <CardDescription className="text-gray-600 text-base leading-relaxed mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-100 text-gray-700 border-gray-200 text-xs font-medium">{tech}</Badge>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                          <span className="text-blue-600 mt-0.5">•</span>
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
          <section id="experience" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Experience</h2>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative pl-6 border-l-2 ${
                  exp.featured ? 'border-blue-500' : 'border-gray-300'
                }`}>
                  <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-2 ${
                    exp.featured ? 'bg-blue-500 border-blue-400' : 'bg-gray-400 border-gray-300'
                  }`}></div>
                  <h3 className={`text-xl font-bold ${
                    exp.featured ? 'text-blue-600' : 'text-gray-900'
                  }`}>{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1 flex-wrap">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    {exp.current && <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">Current</Badge>}
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">{skill}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section id="publications" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Publications</h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg text-gray-900">{pub.title}</CardTitle>
                        <p className="text-blue-600 mt-1">{pub.venue} · {pub.year}</p>
                      </div>
                      {pub.url && (
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
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
          <section id="certifications" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="bg-white border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 h-full cursor-pointer group">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <CardTitle className="text-base text-gray-900 group-hover:text-blue-600 transition-colors mt-3">{cert.title}</CardTitle>
                      <CardDescription className="text-gray-500 text-sm">
                        {cert.issuer} {cert.date && `· ${cert.date}`}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Technical Skills</h2>
            <Card className="bg-white border-gray-200">
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
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
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
                          const skillData = skillIcons[skill] || { icon: '💻', bg: 'bg-blue-50' };
                          return (
                            <div key={skill} className={`${skillData.bg} border border-gray-200 rounded-lg p-3 text-center hover:border-blue-400 hover:shadow-md transition-all`}>
                              <div className="text-2xl mb-1">{skillData.icon}</div>
                              <div className="text-gray-800 text-xs font-medium">{skill}</div>
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
          <section id="education" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium">{edu.institution}</CardDescription>
                        <p className="text-gray-500 mt-1">{edu.location} · {edu.period} · GPA: {edu.gpa}</p>
                      </div>
                      {edu.current && <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">In Progress</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">{course}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Open to discussing opportunities, projects, or collaborations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-5">
                  <Mail className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:pranithbhukya09@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm">
                    pranithbhukya09@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-5">
                  <Phone className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+13464902475" className="text-blue-600 hover:text-blue-700 text-sm">
                    +1 (346) 490-2475
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-5">
                  <Linkedin className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                    linkedin.com/in/pranith-bhukya
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-5">
                  <MapPin className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 text-sm">Houston, TX</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Pranith Bhukya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
