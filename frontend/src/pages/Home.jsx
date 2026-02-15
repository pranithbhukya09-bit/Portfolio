import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkillTab, setActiveSkillTab] = useState('programming');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['about', 'projects', 'publications', 'experience', 'skills', 'contact'];
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
    'Java': { icon: '☕', bg: 'bg-red-50' },
    'JavaScript': { icon: '⚡', bg: 'bg-yellow-50' },
    'Swift': { icon: '🔶', bg: 'bg-orange-50' },
    'SQL': { icon: '📊', bg: 'bg-blue-50' },
    'React': { icon: '⚛️', bg: 'bg-cyan-50' },
    'Node.js': { icon: '🟢', bg: 'bg-green-50' },
    'NumPy': { icon: '🔢', bg: 'bg-blue-50' },
    'Pandas': { icon: '🐼', bg: 'bg-blue-50' },
    'LangChain': { icon: '🔗', bg: 'bg-purple-50' },
    'Streamlit': { icon: '🎯', bg: 'bg-red-50' },
    'AWS': { icon: '☁️', bg: 'bg-orange-50' },
    'Bedrock': { icon: '🧱', bg: 'bg-gray-50' },
    'Lambda': { icon: '⚡', bg: 'bg-orange-50' },
    'DynamoDB': { icon: '💾', bg: 'bg-blue-50' },
    'EC2': { icon: '🖥️', bg: 'bg-orange-50' },
    'S3': { icon: '🪣', bg: 'bg-green-50' },
    'MySQL': { icon: '🐬', bg: 'bg-blue-50' },
    'MongoDB': { icon: '🍃', bg: 'bg-green-50' },
    'PostgreSQL': { icon: '🐘', bg: 'bg-blue-50' },
    'Agile': { icon: '🔄', bg: 'bg-purple-50' },
    'Scrum': { icon: '🏉', bg: 'bg-green-50' },
    'Git': { icon: '📦', bg: 'bg-orange-50' },
    'Unit Testing': { icon: '✅', bg: 'bg-green-50' },
    'CI/CD': { icon: '🔁', bg: 'bg-blue-50' },
    'REST APIs': { icon: '🌐', bg: 'bg-cyan-50' }
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
        'Implemented summarization chain architecture with context management',
        'Applied ROUGE benchmarking methodology for evaluation and quality assurance',
        'Designed lifecycle-based generative AI system (use case → model selection → alignment → evaluation → deployment)',
        'Impact: Reduced document review time by 75% and demonstrated applied LLM system engineering'
      ],
      period: '2024'
    },
    {
      title: 'Training and Placement Management System',
      description: 'Designed and implemented a production-grade relational database system using PostgreSQL with advanced SQL features, stored procedures, triggers, and role-based access control.',
      technologies: ['PostgreSQL', 'SQL', 'PL/pgSQL', 'Database Design', 'ER Modeling', 'Indexing'],
      highlights: [
        'Complete ER modeling and normalized relational schema design with integrity constraints',
        'Many-to-many resolution tables with proper junction table architecture',
        'Referential integrity with ON DELETE CASCADE and ON UPDATE CASCADE for data consistency',
        'Index optimization for high-performance query execution on large datasets',
        'PL/pgSQL stored functions for intelligent job matching algorithms',
        'Trigger implementation to auto-update application status on interview insertion',
        'Impact: Automated placement workflows, centralized student data, built production-grade backend database logic'
      ],
      period: '2023 - 2024'
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
        'Impact: Demonstrates strong understanding of AI systems governance, explainability, and ethical risk modeling'
      ],
      period: '2024'
    },
    {
      title: 'Unified Student Analytics & Management Platform',
      description: 'Developed a web-based full-stack platform using React, Node.js, Python, SQL, and AWS for comprehensive student data management and analytics.',
      technologies: ['React', 'Node.js', 'Python', 'SQL', 'Pandas', 'AWS', 'REST APIs'],
      highlights: [
        'Built scalable REST APIs with Express.js backend architecture',
        'Implemented backend analytics using Pandas for data processing and insights',
        'Deployed backend components on AWS with Lambda and EC2',
        'Followed Agile methodology with sprint-based development',
        'Impact: Streamlined administrative workflows and enabled data-driven decision making'
      ],
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
        'Impact: Reduced data processing time by 60% while improving accuracy'
      ],
      period: '2024'
    },
    {
      title: 'Algorithmic Trading Simulator',
      description: 'Created sophisticated backtesting platform in Python to evaluate algorithmic trading strategies using historical market data.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Financial Modeling'],
      highlights: [
        'Built simulation engine with multiple trading algorithms including moving averages and momentum strategies',
        'Implemented portfolio optimization techniques and risk management calculations',
        'Enabled risk-free strategy testing with detailed performance analytics',
        'Impact: Demonstrated quantitative analysis and algorithmic problem-solving skills'
      ],
      period: 'October 2022 - February 2023'
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
      {/* Simple Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      } border-b border-gray-200`}>
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Pranith Bhukya – Software Engineer</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
              <a href="mailto:pranithbhukya09@gmail.com" className="hover:text-blue-600 flex items-center gap-1">
                <Mail className="w-4 h-4" />
                pranithbhukya09@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://github.com/pranithbhukya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-1">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <span className="text-gray-400">|</span>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pranith_Bhukya_Resume.pdf';
                  link.download = 'Pranith_Bhukya_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* About Section with Photo */}
          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img 
                  src="https://customer-assets.emergentagent.com/job_career-analyzer-8/artifacts/3jlewvd3_efe62cd4-6ee9-4106-a55a-34a2c979de14.jpeg"
                  alt="Pranith Bhukya" 
                  className="w-48 h-48 object-cover object-center rounded-xl shadow-md border border-gray-200"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Software Engineer and AI & Data Systems Engineer with experience building Generative AI applications, 
                  scalable backend systems, and production-grade databases. Published researcher with expertise in AI governance, 
                  database architecture, full-stack development, and data analytics. Passionate about responsible AI, system design, 
                  and solving complex technical problems.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                      {project.period && (
                        <Badge className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                          {project.period}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-700">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Publications</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl text-gray-900 leading-tight">
                        {pub.title}
                      </CardTitle>
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                        {pub.type}
                      </Badge>
                      <span className="text-gray-600 text-sm">{pub.year}</span>
                    </div>
                    <CardDescription className="text-blue-600 font-medium">{pub.venue}</CardDescription>
                    {pub.location && (
                      <p className="text-gray-600 text-sm mt-1">{pub.location}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{pub.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium text-base">{exp.company}</CardDescription>
                      </div>
                      {exp.current && (
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <span>{exp.location}</span>
                      <span className="text-gray-400">•</span>
                      <span>{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
            <Card className="border-gray-200">
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
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                    <div
                      key={category}
                      className={`${activeSkillTab === category ? 'block' : 'hidden'}`}
                    >
                      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {skillCategories[category].skills.map((skill) => {
                          const skillData = skillIcons[skill] || { icon: '💻', bg: 'bg-gray-50' };
                          return (
                            <div
                              key={skill}
                              className={`${skillData.bg} border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300 transition-all`}
                            >
                              <div className="text-3xl mb-2">{skillData.icon}</div>
                              <div className="text-gray-900 text-sm font-medium">{skill}</div>
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

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium text-base">{edu.institution}</CardDescription>
                      </div>
                      {edu.current && (
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <span>{edu.location}</span>
                      <span className="text-gray-400">•</span>
                      <span>{edu.period}</span>
                      <span className="text-gray-400">•</span>
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6">
                  I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:pranithbhukya09@gmail.com" className="text-blue-600 hover:text-blue-700">
                      pranithbhukya09@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+13464902475" className="text-blue-600 hover:text-blue-700">
                      +1 (346) 490-2475
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/pranith-bhukya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      linkedin.com/in/pranith-bhukya
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700">Houston, TX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Pranith Bhukya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;