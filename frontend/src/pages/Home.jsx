import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap, MapPin, BookOpen, FileText, Calendar, Phone, Download, ChevronRight, ArrowRight } from 'lucide-react';
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
    'Python': { icon: '🐍', bg: 'bg-slate-50' },
    'Java': { icon: '☕', bg: 'bg-slate-50' },
    'JavaScript': { icon: '⚡', bg: 'bg-slate-50' },
    'Swift': { icon: '🔶', bg: 'bg-slate-50' },
    'SQL': { icon: '📊', bg: 'bg-slate-50' },
    'React': { icon: '⚛️', bg: 'bg-slate-50' },
    'Node.js': { icon: '🟢', bg: 'bg-slate-50' },
    'NumPy': { icon: '🔢', bg: 'bg-slate-50' },
    'Pandas': { icon: '🐼', bg: 'bg-slate-50' },
    'LangChain': { icon: '🔗', bg: 'bg-slate-50' },
    'Streamlit': { icon: '🎯', bg: 'bg-slate-50' },
    'AWS': { icon: '☁️', bg: 'bg-slate-50' },
    'Bedrock': { icon: '🧱', bg: 'bg-slate-50' },
    'Lambda': { icon: '⚡', bg: 'bg-slate-50' },
    'DynamoDB': { icon: '💾', bg: 'bg-slate-50' },
    'EC2': { icon: '🖥️', bg: 'bg-slate-50' },
    'S3': { icon: '🪣', bg: 'bg-slate-50' },
    'MySQL': { icon: '🐬', bg: 'bg-slate-50' },
    'MongoDB': { icon: '🍃', bg: 'bg-slate-50' },
    'PostgreSQL': { icon: '🐘', bg: 'bg-slate-50' },
    'Agile': { icon: '🔄', bg: 'bg-slate-50' },
    'Scrum': { icon: '🏉', bg: 'bg-slate-50' },
    'Git': { icon: '📦', bg: 'bg-slate-50' },
    'Unit Testing': { icon: '✅', bg: 'bg-slate-50' },
    'CI/CD': { icon: '🔁', bg: 'bg-slate-50' },
    'REST APIs': { icon: '🌐', bg: 'bg-slate-50' }
  };

  const skillCategories = {
    programming: {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'Java', 'JavaScript', 'Swift', 'SQL']
    },
    frameworks: {
      title: 'Frameworks',
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
      title: 'Tools',
      icon: Award,
      skills: ['Agile', 'Scrum', 'Git', 'Unit Testing', 'CI/CD', 'REST APIs']
    }
  };

  const experiences = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'Aug 2024 - Present',
      current: true,
      featured: true,
      description: [
        'Delivered undergraduate & graduate CS courses (AI, Software Engineering, Data Modeling)',
        'Mentored students in Python, Java, SQL, and data structures',
        'Conducted office hours and grading for 50+ students'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'Wynswell Global',
      location: 'Bengaluru, India',
      period: 'Mar 2024 - May 2024',
      current: false,
      featured: true,
      description: [
        'Analyzed large datasets using Python (Pandas, NumPy) to uncover business trends',
        'Built interactive Streamlit dashboards for stakeholder insights',
        'Optimized SQL queries, improving performance by 40%'
      ]
    },
    {
      title: 'President',
      company: 'Indian Student Association - UHCL',
      location: 'Houston, TX',
      period: 'Jan 2026 - Present',
      current: true,
      featured: false,
      description: [
        'Lead strategic planning and organizational development',
        'Coordinate events to enhance member engagement'
      ]
    },
    {
      title: 'Vice President',
      company: 'Indian Student Association - UHCL',
      location: 'Houston, TX',
      period: 'May 2025 - Dec 2025',
      current: false,
      featured: false,
      description: [
        'Supported organizational leadership and strategic initiatives',
        'Coordinated student engagement activities'
      ]
    }
  ];

  const projects = [
    {
      title: 'AI-Based Content Summarization System',
      impact: 'Reduced document review time by 75% for enterprise users.',
      tech: ['Python', 'GPT-4', 'LangChain', 'OpenAI API'],
      problem: [
        'Manual document review consuming excessive time',
        'Inconsistent summary quality across teams'
      ],
      solution: [
        'Built desktop app with GPT-4 integration via LangChain',
        'Implemented structured prompt engineering for optimal output',
        'Added ROUGE benchmarking for quality assurance'
      ],
      outcome: '75% reduction in document review time with consistent, high-quality summaries'
    },
    {
      title: 'Training & Placement Management System',
      impact: 'Automated 80% of manual placement workflows.',
      tech: ['PostgreSQL', 'SQL', 'PL/pgSQL', 'ER Modeling'],
      problem: [
        'Manual student-job matching process',
        'Slow query performance on large datasets'
      ],
      solution: [
        'Designed normalized schema following 3NF principles',
        'Created PL/pgSQL stored functions for intelligent matching',
        'Implemented index optimization strategies'
      ],
      outcome: '60% query performance improvement and 80% reduction in manual processing'
    },
    {
      title: 'Ethical Implications of Big Data Analytics',
      impact: 'Developed framework adopted in AI governance discussions.',
      tech: ['Research', 'Data Ethics', 'AI Governance', 'Policy Analysis'],
      problem: [
        'Lack of standardized ethical assessment frameworks',
        'Inconsistent platform accountability measures'
      ],
      solution: [
        'Analyzed Meta, TikTok, and X for ethical risks',
        'Developed 4-parameter evaluation model',
        'Proposed Algorithmic Transparency Index'
      ],
      outcome: 'Cross-cultural regulatory comparison framework for US, EU, and Asian markets'
    },
    {
      title: 'Student Analytics Platform',
      impact: 'Streamlined workflows for 500+ university users.',
      tech: ['React', 'Node.js', 'Python', 'AWS'],
      problem: [
        'Fragmented student performance data',
        'Limited real-time analytics capabilities'
      ],
      solution: [
        'Built full-stack platform with REST APIs',
        'Implemented real-time analytics with Pandas',
        'Deployed on AWS with auto-scaling'
      ],
      outcome: 'Handles 1000+ concurrent requests with seamless administrative experience'
    },
    {
      title: 'Data Analytics Pipeline',
      impact: '60% faster processing than legacy systems.',
      tech: ['Python', 'SQL', 'Pandas', 'ETL'],
      problem: [
        'Slow legacy data processing workflows',
        'Data quality inconsistencies'
      ],
      solution: [
        'Built end-to-end ETL pipeline',
        'Implemented automated quality checks',
        'Created statistical analysis modules'
      ],
      outcome: '99.5% data integrity with 60% processing speed improvement'
    },
    {
      title: 'Algorithmic Trading Simulator',
      impact: 'Enabled risk-free strategy testing for quantitative analysis.',
      tech: ['Python', 'Pandas', 'NumPy', 'Financial Modeling'],
      problem: [
        'High-risk live market testing',
        'Limited strategy backtesting capabilities'
      ],
      solution: [
        'Built backtesting platform with multiple algorithms',
        'Implemented Modern Portfolio Theory optimization',
        'Added Sharpe ratio and drawdown metrics'
      ],
      outcome: 'Comprehensive strategy validation without capital risk'
    }
  ];

  const education = [
    {
      degree: 'M.S. Computer Science',
      institution: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'Expected May 2026',
      gpa: '3.667',
      current: true,
      coursework: ['Algorithms', 'Software Engineering', 'Database Systems', 'Mobile Development']
    },
    {
      degree: 'B.S. Computer Science',
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
      summary: 'Systematic review of IoT architectures, protocols, and emerging applications across industries.',
      url: 'https://ijsrcseit.com/home/issue/view/article.php?id=CSEIT239811'
    },
    {
      title: 'Navigating Online Aisles: Collaborative Filtering For Personalised Grocery Suggestions',
      venue: 'IEEE Conference',
      year: '2024',
      summary: 'Novel recommendation system using collaborative filtering for personalized grocery e-commerce.',
      url: 'https://customer-assets.emergentagent.com/job_1545e344-117d-46c3-ba93-cf345fe031fc/artifacts/meuly63w_Certificate%20for%20paper%20publishing.pdf'
    }
  ];

  const certifications = [
    {
      title: 'Databricks Generative AI Fundamentals',
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
      date: 'Dec 2022',
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      } border-b border-gray-100`}>
        <div className="max-w-6xl mx-auto px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-[#0F172A] tracking-tight">Pranith Bhukya</div>
            <div className="hidden md:flex gap-8">
              {['About', 'Projects', 'Experience', 'Publications', 'Certifications', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-[#2563EB]' 
                      : 'text-[#0F172A]/60 hover:text-[#0F172A]'
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
      <section className="pt-40 pb-28 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/3jlewvd3_efe62cd4-6ee9-4106-a55a-34a2c979de14.jpeg"
              alt="Pranith Bhukya" 
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] mb-5 tracking-tight">
                Software Engineer
              </h1>
              <p className="text-xl text-[#0F172A]/60 mb-10 font-medium">
                AI & Data Systems • Published Researcher • Student Leader
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:pranithbhukya09@gmail.com" 
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/pranith-bhukya/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-[#0F172A] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
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
                  className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-[#0F172A] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-24">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* About */}
          <section id="about" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">About</h2>
              <p className="text-[#0F172A]/70 leading-relaxed text-lg max-w-4xl">
                Software Engineer specializing in <span className="text-[#0F172A] font-medium">AI & Data Systems</span>, building scalable backend architectures, Generative AI applications, and production-grade databases. Published researcher with expertise in AI governance, system design, and data analytics. Experienced in React, Node.js, Python, AWS, and SQL-based data engineering. Passionate about responsible AI and solving complex engineering challenges.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Projects</h2>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all"
                  >
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{project.title}</h3>
                      <p className="text-[#2563EB] font-medium">{project.impact}</p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium text-[#0F172A]/70 bg-white rounded-full border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Problem | Solution | Impact Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Problem */}
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide mb-3">Problem</h4>
                        <ul className="space-y-2">
                          {project.problem.map((p, i) => (
                            <li key={i} className="text-sm text-[#0F172A]/60 flex items-start gap-2">
                              <span className="text-gray-300 mt-0.5">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide mb-3">Solution</h4>
                        <ul className="space-y-2">
                          {project.solution.map((s, i) => (
                            <li key={i} className="text-sm text-[#0F172A]/60 flex items-start gap-2">
                              <span className="text-gray-300 mt-0.5">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide mb-3">Impact</h4>
                        <p className="text-sm text-[#0F172A]/60">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Experience</h2>
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-white ${
                      exp.featured ? 'border-[#2563EB]' : 'border-gray-300'
                    }`}></div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-lg font-bold text-[#0F172A]">{exp.title}</h3>
                      {exp.current && (
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Current</span>
                      )}
                    </div>
                    <p className="text-[#2563EB] font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-[#0F172A]/50 mb-4">{exp.location} · {exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-[#0F172A]/60 flex items-start gap-2">
                          <span className="text-gray-300 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Publications */}
          <section id="publications" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Publications</h2>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-[#0F172A] mb-2">{pub.title}</h3>
                        <p className="text-sm text-[#2563EB] font-medium mb-2">{pub.venue} · {pub.year}</p>
                        <p className="text-sm text-[#0F172A]/60">{pub.summary}</p>
                      </div>
                      {pub.url && (
                        <a 
                          href={pub.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#2563EB] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0"
                        >
                          View
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section id="certifications" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Certifications</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-white transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <Award className="w-5 h-5 text-[#2563EB]" />
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#2563EB] transition-colors" />
                    </div>
                    <h3 className="font-medium text-[#0F172A] text-sm mb-1">{cert.title}</h3>
                    <p className="text-xs text-[#0F172A]/50">{cert.issuer} · {cert.date}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Technical Skills</h2>
              <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className="flex flex-wrap gap-2 mb-8">
                  {Object.keys(skillCategories).map((category) => {
                    const Icon = skillCategories[category].icon;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveSkillTab(category)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeSkillTab === category
                            ? 'bg-[#2563EB] text-white'
                            : 'bg-white text-[#0F172A]/60 hover:text-[#0F172A] border border-gray-200'
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
                      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                        {skillCategories[category].skills.map((skill) => {
                          const skillData = skillIcons[skill] || { icon: '💻', bg: 'bg-slate-50' };
                          return (
                            <div 
                              key={skill} 
                              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#2563EB]/30 hover:shadow-sm transition-all"
                            >
                              <div className="text-2xl mb-2">{skillData.icon}</div>
                              <div className="text-[#0F172A] text-xs font-medium">{skill}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A]">{edu.degree}</h3>
                        <p className="text-[#2563EB] font-medium">{edu.institution}</p>
                      </div>
                      {edu.current && (
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">In Progress</span>
                      )}
                    </div>
                    <p className="text-sm text-[#0F172A]/50 mb-4">{edu.location} · {edu.period} · GPA: {edu.gpa}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span key={course} className="px-2.5 py-1 text-xs font-medium text-[#0F172A]/60 bg-white rounded border border-gray-200">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-12">
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Get In Touch</h2>
              <p className="text-xl text-[#2563EB] font-medium mb-12">
                Let's build intelligent systems that scale.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <a href="mailto:pranithbhukya09@gmail.com" className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-[#2563EB]/30 hover:bg-white transition-all group">
                  <Mail className="w-5 h-5 text-[#2563EB] mb-3" />
                  <h3 className="font-medium text-[#0F172A] text-sm mb-1">Email</h3>
                  <p className="text-xs text-[#0F172A]/50 truncate">pranithbhukya09@gmail.com</p>
                </a>
                <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-[#2563EB]/30 hover:bg-white transition-all group">
                  <Linkedin className="w-5 h-5 text-[#2563EB] mb-3" />
                  <h3 className="font-medium text-[#0F172A] text-sm mb-1">LinkedIn</h3>
                  <p className="text-xs text-[#0F172A]/50">pranith-bhukya</p>
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
                  className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-[#2563EB]/30 hover:bg-white transition-all group text-left"
                >
                  <Download className="w-5 h-5 text-[#2563EB] mb-3" />
                  <h3 className="font-medium text-[#0F172A] text-sm mb-1">Resume</h3>
                  <p className="text-xs text-[#0F172A]/50">Download PDF</p>
                </button>
                <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50">
                  <MapPin className="w-5 h-5 text-[#2563EB] mb-3" />
                  <h3 className="font-medium text-[#0F172A] text-sm mb-1">Location</h3>
                  <p className="text-xs text-[#0F172A]/50">Houston, TX</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 text-center text-[#0F172A]/40 text-sm">
          <p>© 2025 Pranith Bhukya</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
