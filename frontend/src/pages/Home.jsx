import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap, ChevronDown, ArrowRight, Terminal, Brain, Sparkles, BookOpen, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const profileImage = "https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/3jlewvd3_efe62cd4-6ee9-4106-a55a-34a2c979de14.jpeg";
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSkillTab, setActiveSkillTab] = useState('programming');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'publications', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillIcons = {
    // Programming Languages
    'Python': { icon: '🐍', color: 'from-blue-600 to-yellow-500', bg: 'bg-blue-50' },
    'Java': { icon: '☕', color: 'from-red-600 to-orange-500', bg: 'bg-red-50' },
    'JavaScript': { icon: '⚡', color: 'from-yellow-500 to-yellow-700', bg: 'bg-yellow-50' },
    'Swift': { icon: '🔶', color: 'from-orange-600 to-red-500', bg: 'bg-orange-50' },
    'SQL': { icon: '📊', color: 'from-blue-600 to-indigo-600', bg: 'bg-blue-50' },
    
    // Frameworks & Libraries
    'React': { icon: '⚛️', color: 'from-cyan-600 to-blue-600', bg: 'bg-cyan-50' },
    'Node.js': { icon: '🟢', color: 'from-green-600 to-emerald-600', bg: 'bg-green-50' },
    'NumPy': { icon: '🔢', color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50' },
    'Pandas': { icon: '🐼', color: 'from-blue-700 to-purple-700', bg: 'bg-blue-50' },
    'LangChain': { icon: '🔗', color: 'from-purple-600 to-pink-600', bg: 'bg-purple-50' },
    'Streamlit': { icon: '🎯', color: 'from-red-600 to-pink-600', bg: 'bg-red-50' },
    
    // Cloud & AWS
    'AWS': { icon: '☁️', color: 'from-orange-600 to-yellow-600', bg: 'bg-orange-50' },
    'Bedrock': { icon: '🧱', color: 'from-gray-600 to-slate-600', bg: 'bg-gray-50' },
    'Lambda': { icon: '⚡', color: 'from-orange-600 to-amber-600', bg: 'bg-orange-50' },
    'DynamoDB': { icon: '💾', color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50' },
    'EC2': { icon: '🖥️', color: 'from-orange-600 to-red-600', bg: 'bg-orange-50' },
    'S3': { icon: '🪣', color: 'from-green-600 to-emerald-600', bg: 'bg-green-50' },
    
    // Databases
    'MySQL': { icon: '🐬', color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50' },
    'MongoDB': { icon: '🍃', color: 'from-green-600 to-emerald-600', bg: 'bg-green-50' },
    'PostgreSQL': { icon: '🐘', color: 'from-blue-600 to-indigo-600', bg: 'bg-blue-50' },
    
    // Tools & Methodologies
    'Agile': { icon: '🔄', color: 'from-purple-600 to-blue-600', bg: 'bg-purple-50' },
    'Scrum': { icon: '🏉', color: 'from-green-600 to-teal-600', bg: 'bg-green-50' },
    'Git': { icon: '📦', color: 'from-orange-600 to-red-600', bg: 'bg-orange-50' },
    'Unit Testing': { icon: '✅', color: 'from-green-600 to-emerald-600', bg: 'bg-green-50' },
    'CI/CD': { icon: '🔁', color: 'from-blue-600 to-indigo-600', bg: 'bg-blue-50' },
    'REST APIs': { icon: '🌐', color: 'from-cyan-600 to-blue-600', bg: 'bg-cyan-50' }
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

  const stats = [
    { label: 'Years Experience', value: '2+', icon: Award },
    { label: 'Projects Completed', value: '10+', icon: Terminal },
    { label: 'Technologies', value: '20+', icon: Code },
    { label: 'Publications', value: '2', icon: BookOpen }
  ];

  const experiences = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'University of Houston Clear Lake',
      location: 'Houston, TX',
      period: 'August 2024 - Present',
      current: true,
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
      current: false,
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
      title: 'AI-Based Content Summarization System',
      description: 'Built an AI-powered desktop application using Python, GPT-4, and LangChain to generate concise summaries from long-form text such as research papers and reports.',
      technologies: ['Python', 'GPT-4', 'LangChain', 'OpenAI API', 'Tkinter', 'Prompt Engineering'],
      highlights: [
        'Designed structured prompt engineering strategies for optimal summarization',
        'Integrated GPT-4 via OpenAI API with proper error handling and rate limiting',
        'Built user-friendly GUI using Tkinter for seamless document processing',
        'Implemented summarization chain architecture with context management',
        'Applied ROUGE benchmarking methodology for evaluation and quality assurance',
        'Designed lifecycle-based generative AI system (use case → model selection → alignment → evaluation → deployment)',
        'Considered caching strategies, inference optimization, and scalability patterns',
        'Impact: Reduced document review time by 75% and demonstrated applied LLM system engineering'
      ],
      featured: true,
      period: '2024'
    },
    {
      title: 'Ethical Implications of Big Data Analytics Research',
      description: 'Conducted comparative case study research analyzing ethical risks in Big Data analytics across Meta, TikTok, and X (formerly Twitter).',
      technologies: ['Research Methodology', 'Data Ethics', 'AI Governance', 'Comparative Analysis'],
      highlights: [
        'Developed 4-parameter evaluation model: Data Analytics Intensity, Consent Strength, Transparency, Privacy Breach History',
        'Proposed Algorithmic Transparency Index (ATI) for measuring AI system accountability',
        'Conducted cross-cultural regulatory comparison (GDPR, CCPA, DPDPA)',
        'Designed governance-focused AI accountability framework for enterprise deployment',
        'Analyzed explainability requirements and ethical risk modeling in production AI systems',
        'Impact: Demonstrates strong understanding of AI systems governance, explainability, and ethical risk modeling'
      ],
      featured: true,
      period: '2024'
    },
    {
      title: 'Training and Placement Management System (Database Engineering)',
      description: 'Designed and implemented a production-grade relational database system using PostgreSQL with advanced SQL features, stored procedures, triggers, and role-based access control.',
      technologies: ['PostgreSQL', 'SQL', 'PL/pgSQL', 'Database Design', 'ER Modeling', 'Indexing'],
      highlights: [
        'Complete ER modeling and normalized relational schema design with integrity constraints',
        'Many-to-many resolution tables (Student_Skill, Job_Skill) with proper junction table architecture',
        'Referential integrity with ON DELETE CASCADE and ON UPDATE CASCADE for data consistency',
        'Custom domain constraints for application and placement status management',
        'Index optimization for high-performance query execution on large datasets',
        'Role-based access control (admin, trainer, student, company) with secure permissions',
        'Analytical views: student statistics, hiring analytics, job-skill match percentages',
        'PL/pgSQL stored functions for intelligent job matching algorithms',
        'Trigger implementation to auto-update application status on interview insertion',
        'Impact: Automated placement workflows, centralized student data, built production-grade backend database logic'
      ],
      featured: true,
      period: '2023 - 2024'
    },
    {
      title: 'Unified Student Analytics & Management Platform',
      description: 'Developed a web-based full-stack platform using React, Node.js, Python, SQL, and AWS for comprehensive student data management and analytics.',
      technologies: ['React', 'Node.js', 'Python', 'SQL', 'Pandas', 'AWS', 'REST APIs'],
      highlights: [
        'Built scalable REST APIs with Express.js backend architecture',
        'Implemented backend analytics using Pandas for data processing and insights',
        'Deployed backend components on AWS with Lambda and EC2',
        'Followed Agile methodology with sprint-based development and version control best practices',
        'Impact: Streamlined administrative workflows and enabled data-driven decision making'
      ],
      featured: true,
      period: '2023 - 2024'
    },
    {
      title: 'End-to-End Data Analytics Pipeline',
      description: 'Designed and implemented a complete data analytics workflow encompassing data collection, preprocessing, transformation, analysis, and automated insight generation.',
      technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Visualization', 'ETL'],
      highlights: [
        'Data cleaning and preprocessing with automated quality checks',
        'SQL transformation logic for data normalization and aggregation',
        'Insight extraction using statistical analysis and pattern recognition',
        'Visualization-driven reporting with interactive dashboards',
        'Focused on reproducibility and actionable insights for stakeholders',
        'Impact: Reduced data processing time by 60% while improving accuracy'
      ],
      featured: false,
      period: '2024'
    },
    {
      title: 'Hostel Management System',
      description: 'Built comprehensive hostel administration platform to streamline operations including room allocation, fee management, attendance tracking, and communication systems.',
      technologies: ['Java', 'SQL', 'Spring Boot', 'REST APIs'],
      highlights: [
        'Developed automated system with modules for room allocation and fee tracking',
        'Implemented secure authentication and role-based access control',
        'Impact: Reduced administrative workload by 70% for 500+ residents'
      ],
      featured: false,
      period: 'September 2023 - January 2024'
    },
    {
      title: 'Student Information System',
      description: 'Collaborated with cross-functional team to design and implement enterprise-grade student information management system.',
      technologies: ['Java', 'MySQL', 'Object-Oriented Design', 'MVC Architecture'],
      highlights: [
        'Architected OOP-based system with modular design for registration and grading',
        'Applied design patterns for maintainable, scalable codebase',
        'Impact: Successfully deployed to manage 1000+ student records'
      ],
      featured: false,
      period: 'March 2023 - August 2023'
    },
    {
      title: 'Algorithmic Trading Simulator',
      description: 'Created sophisticated backtesting platform in Python to evaluate algorithmic trading strategies using historical market data.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Financial Modeling'],
      highlights: [
        'Built simulation engine with multiple trading algorithms',
        'Implemented portfolio optimization and risk management calculations',
        'Impact: Enabled risk-free strategy testing with performance analytics'
      ],
      featured: false,
      period: 'October 2022 - February 2023'
    },
    {
      title: 'Online Book Store System',
      description: 'Developed full-stack e-commerce platform for online book sales with complete purchase workflow.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
      highlights: [
        'Built responsive React frontend with Node.js backend',
        'Implemented search functionality, reviews, and recommendations',
        'Impact: Delivered fully functional bookstore with inventory management'
      ],
      featured: false,
      period: 'March 2022 - September 2022'
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
      coursework: ['Analysis of Algorithms', 'Software Engineering', 'Database Systems', 'Mobile Development']
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'New Horizon College of Engineering',
      location: 'Bengaluru, India',
      period: '2020 - 2024',
      gpa: '3.6',
      current: false,
      coursework: ['Web Frameworks', 'Data Mining and Machine Learning', 'Object-Oriented Programming', 'Cloud Computing']
    }
  ];

  const publications = [
    {
      title: 'A Comprehensive Literature Review on the Internet of Things (IOT): Evolution, Applications, Challenges, and Future Directions',
      type: 'Journal Article',
      venue: 'International Journal of Scientific Research in Computer Science, Engineering and Information Technology',
      year: '2023',
      url: 'https://ijsrcseit.com/home/issue/view/article.php?id=CSEIT239811',
      description: 'Conducted comprehensive analysis of IoT ecosystem evolution, examining current applications, technical challenges, and emerging trends in connected device systems.',
      impact: 'Published in peer-reviewed international journal, contributing to academic understanding of IoT infrastructure'
    },
    {
      title: 'Navigating Online Aisles: Collaborative Filtering For Personalised Grocery Suggestions',
      type: 'Conference Paper',
      venue: 'IEEE International Conference on Communications and Computer Science-2024',
      location: 'B.M.S College of Engineering, Bangalore',
      year: '2024',
      date: 'May 24, 2024',
      description: 'Developed and presented machine learning-based recommendation system using collaborative filtering algorithms to enhance e-commerce grocery shopping experience.',
      impact: 'Presented at international IEEE conference, demonstrating practical application of ML in retail optimization'
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Pranith Bhukya
            </div>
            <div className="hidden md:flex gap-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Publications', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-1.5 text-sm">
                  Available for Full-Time Opportunities
                </Badge>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Software Engineer | AI & Data Systems Engineer
                </h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Building scalable backend systems, AI-powered applications, and data-driven solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Software Engineer and Data Analyst with experience in Generative AI systems, database architecture, 
                full-stack development, and AI governance research. Published researcher with IEEE conference presentation 
                and journal publication. Passionate about responsible AI, scalable backend systems, and real-world problem solving.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-lg transition-all"
                  onClick={() => window.open('https://www.linkedin.com/in/pranith-bhukya/', '_blank')}
                >
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-lg transition-all"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Pranith_Bhukya_Resume.pdf';
                    link.download = 'Pranith_Bhukya_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Pranith Bhukya" 
                  className="w-80 h-80 object-cover object-center rounded-2xl shadow-xl border border-gray-200"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-gray-50 border-gray-200 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-10">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a Software Engineer and AI & Data Systems Engineer with hands-on experience building Generative AI 
                  applications, scalable backend systems, and production-grade databases. Currently pursuing my Master's in 
                  Computer Science at the University of Houston Clear Lake while serving as a Graduate Teaching Assistant, 
                  where I support courses in Artificial Intelligence, Software Engineering, and Data Modeling.
                </p>
                <p>
                  My technical expertise spans AI system engineering (GPT-4, LangChain, prompt engineering), backend development 
                  (Python, Java, Node.js, REST APIs), and database architecture (PostgreSQL, MySQL, DynamoDB). I've built 
                  AI-powered summarization systems, conducted ethical AI governance research, and designed enterprise-grade 
                  database systems with advanced SQL, triggers, and stored procedures.
                </p>
                <p>
                  I'm passionate about responsible AI development, scalable system design, and translating complex technical 
                  requirements into production-ready solutions. My work has been recognized through publications in international 
                  journals and IEEE conference presentations, demonstrating both technical depth and research capability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-8">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
                {Object.keys(skillCategories).map((category) => {
                  const Icon = skillCategories[category].icon;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveSkillTab(category)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                        activeSkillTab === category
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{skillCategories[category].title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {Object.keys(skillCategories).map((category) => (
                  <div
                    key={category}
                    className={`${activeSkillTab === category ? 'block' : 'hidden'}`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {skillCategories[category].skills.map((skill) => {
                        const skillData = skillIcons[skill] || { icon: '💻', color: 'from-gray-600 to-gray-800', bg: 'bg-gray-50' };
                        return (
                          <div
                            key={skill}
                            className={`group ${skillData.bg} border border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-md transition-all duration-300`}
                          >
                            {/* Icon */}
                            <div className="text-4xl mb-3">
                              {skillData.icon}
                            </div>
                            
                            {/* Skill name */}
                            <div className="text-gray-900 font-medium">
                              {skill}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-gray-900 text-xl">{exp.title}</CardTitle>
                        {exp.current && (
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-blue-600 text-lg font-medium">{exp.company}</CardDescription>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1.5">•</span>
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
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all group">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-gray-900 text-xl flex-1">
                      {project.title}
                    </CardTitle>
                    {project.period && (
                      <Badge className="bg-gray-100 text-gray-700 border-gray-200 text-xs flex-shrink-0">
                        {project.period}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-100 text-gray-700 border-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-2 text-sm">
                          <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
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

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-gray-900 text-xl leading-tight">
                          {pub.title}
                        </CardTitle>
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition-all"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                          {pub.type}
                        </Badge>
                        <span className="text-gray-600 text-sm">{pub.year}</span>
                      </div>
                      <CardDescription className="text-blue-600 text-base font-medium mb-2">
                        {pub.venue}
                      </CardDescription>
                      {pub.location && (
                        <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{pub.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        <span className="text-blue-600 font-semibold">Impact: </span>
                        {pub.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <CardTitle className="text-gray-900 text-xl">{edu.degree}</CardTitle>
                        {edu.current && (
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                            In Progress
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-blue-600 text-lg font-medium">{edu.institution}</CardDescription>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span>{edu.period}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-blue-600 font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-gray-600 font-semibold mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} className="bg-gray-100 text-gray-700 border-gray-200">
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
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:pranithbhukya09@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  pranithbhukya09@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:+13464902475" className="text-blue-600 hover:text-blue-700 transition-colors">
                  +1 (346) 490-2475
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/pranith-bhukya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  linkedin.com/in/pranith-bhukya
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Location</h3>
                <p className="text-blue-600">Houston, TX</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Pranith Bhukya. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;