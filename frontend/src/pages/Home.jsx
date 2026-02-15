import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Cloud, Award, Briefcase, GraduationCap, ChevronDown, ArrowRight, Terminal, Brain, Sparkles } from 'lucide-react';
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
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
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
    'Python': { icon: '🐍', color: 'from-blue-400 to-yellow-400', bg: 'bg-blue-500/10' },
    'Java': { icon: '☕', color: 'from-red-400 to-orange-400', bg: 'bg-red-500/10' },
    'JavaScript': { icon: '⚡', color: 'from-yellow-400 to-yellow-600', bg: 'bg-yellow-500/10' },
    'Swift': { icon: '🔶', color: 'from-orange-400 to-red-400', bg: 'bg-orange-500/10' },
    'SQL': { icon: '📊', color: 'from-blue-400 to-indigo-400', bg: 'bg-blue-500/10' },
    
    // Frameworks & Libraries
    'React': { icon: '⚛️', color: 'from-cyan-400 to-blue-400', bg: 'bg-cyan-500/10' },
    'Node.js': { icon: '🟢', color: 'from-green-400 to-emerald-400', bg: 'bg-green-500/10' },
    'NumPy': { icon: '🔢', color: 'from-blue-400 to-cyan-400', bg: 'bg-blue-500/10' },
    'Pandas': { icon: '🐼', color: 'from-blue-500 to-purple-500', bg: 'bg-blue-500/10' },
    'LangChain': { icon: '🔗', color: 'from-purple-400 to-pink-400', bg: 'bg-purple-500/10' },
    'Streamlit': { icon: '🎯', color: 'from-red-400 to-pink-400', bg: 'bg-red-500/10' },
    
    // Cloud & AWS
    'AWS': { icon: '☁️', color: 'from-orange-400 to-yellow-400', bg: 'bg-orange-500/10' },
    'Bedrock': { icon: '🧱', color: 'from-gray-400 to-slate-400', bg: 'bg-gray-500/10' },
    'Lambda': { icon: '⚡', color: 'from-orange-400 to-amber-400', bg: 'bg-orange-500/10' },
    'DynamoDB': { icon: '💾', color: 'from-blue-400 to-cyan-400', bg: 'bg-blue-500/10' },
    'EC2': { icon: '🖥️', color: 'from-orange-400 to-red-400', bg: 'bg-orange-500/10' },
    'S3': { icon: '🪣', color: 'from-green-400 to-emerald-400', bg: 'bg-green-500/10' },
    
    // Databases
    'MySQL': { icon: '🐬', color: 'from-blue-400 to-cyan-400', bg: 'bg-blue-500/10' },
    'MongoDB': { icon: '🍃', color: 'from-green-400 to-emerald-400', bg: 'bg-green-500/10' },
    'PostgreSQL': { icon: '🐘', color: 'from-blue-400 to-indigo-400', bg: 'bg-blue-500/10' },
    
    // Tools & Methodologies
    'Agile': { icon: '🔄', color: 'from-purple-400 to-blue-400', bg: 'bg-purple-500/10' },
    'Scrum': { icon: '🏉', color: 'from-green-400 to-teal-400', bg: 'bg-green-500/10' },
    'Git': { icon: '📦', color: 'from-orange-400 to-red-400', bg: 'bg-orange-500/10' },
    'Unit Testing': { icon: '✅', color: 'from-green-400 to-emerald-400', bg: 'bg-green-500/10' },
    'CI/CD': { icon: '🔁', color: 'from-blue-400 to-indigo-400', bg: 'bg-blue-500/10' },
    'REST APIs': { icon: '🌐', color: 'from-cyan-400 to-blue-400', bg: 'bg-cyan-500/10' }
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
    { label: 'Students Mentored', value: '50+', icon: Brain }
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
      title: 'Unified Student Analytics and Management Platform',
      description: 'Architected and deployed a comprehensive web-based platform to centralize student, hostel, and academic data management with integrated real-time analytics capabilities.',
      technologies: ['React', 'Node.js', 'Python', 'SQL', 'Pandas', 'AWS', 'REST APIs'],
      highlights: [
        'Challenge: Fragmented data across multiple systems hindering administrative efficiency and decision-making',
        'Solution: Built scalable REST APIs with React frontend and deployed microservices architecture on AWS',
        'Impact: Streamlined data access for administrators, enabling data-driven insights for academic planning',
        'Followed Agile methodology with proper version control and comprehensive documentation'
      ],
      featured: true
    },
    {
      title: 'End-to-End Data Analytics Pipeline',
      description: 'Designed and implemented a complete data analytics workflow encompassing data collection, preprocessing, transformation, analysis, and automated insight generation.',
      technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Visualization', 'ETL'],
      highlights: [
        'Challenge: Manual data processing causing delays and inconsistencies in reporting',
        'Solution: Developed automated ETL pipeline with Python and SQL, implementing data quality checks',
        'Impact: Reduced data processing time by 60% while improving accuracy and reproducibility',
        'Created clear, actionable reports with visualizations for stakeholder decision-making'
      ],
      featured: true
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pranith Bhukya
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-1.5 text-sm">
                  <Sparkles className="w-3 h-3 inline mr-2" />
                  Available for Full-Time Opportunities
                </Badge>
              </div>
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
                  Data Analyst
                </h1>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    & Software Engineer
                  </span>
                </h1>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                Experienced in building scalable software systems and delivering data-driven insights across full-stack development, cloud infrastructure, and analytics. Proven track record in solving complex technical challenges with measurable business impact through Python, SQL, React, and AWS technologies.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/pranith-bhukya/', '_blank')}
                >
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
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
            <div className="flex justify-center md:justify-end animate-fade-in-delay">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative">
                  <img 
                    src={profileImage} 
                    alt="Pranith Bhukya" 
                    className="relative w-80 h-80 object-cover object-center rounded-3xl border-2 border-slate-700/50 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardContent className="p-10">
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-400 first-letter:mr-2 first-letter:float-left">
                  I'm a Software Engineer and Data Analyst with 2+ years of hands-on experience designing and implementing 
                  data-driven solutions that solve real-world business problems. Currently pursuing my Master's in Computer Science 
                  at the University of Houston Clear Lake while serving as a Graduate Teaching Assistant, where I support courses 
                  in Artificial Intelligence, Software Engineering, and Data Modeling.
                </p>
                <p>
                  My technical expertise spans the full development lifecycle—from data preprocessing and analytics using Python, 
                  SQL, Pandas, and NumPy to building scalable full-stack applications with React, Node.js, and REST APIs. I've 
                  successfully deployed production systems on AWS, leveraging services like Lambda, DynamoDB, and EC2 to deliver 
                  high-performance backend solutions.
                </p>
                <p>
                  I excel at translating complex datasets into actionable insights and turning business requirements into robust 
                  technical implementations. Whether it's optimizing SQL queries for NoSQL databases, building interactive dashboards 
                  with Streamlit, or architecting cloud-native applications, I bring a problem-solving mindset focused on measurable 
                  outcomes and scalable architecture.
                </p>
                <p>
                  My work has been recognized through publications in international journals and conferences, including research on 
                  IoT systems and machine learning-driven recommendation engines. I thrive in collaborative, agile environments and 
                  am passionate about mentoring others—having guided 50+ students through complex programming and data structure challenges.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
                {Object.keys(skillCategories).map((category) => {
                  const Icon = skillCategories[category].icon;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveSkillTab(category)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                        activeSkillTab === category
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
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
                    className={`${activeSkillTab === category ? 'block' : 'hidden'} animate-fade-in`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {skillCategories[category].skills.map((skill) => {
                        const skillData = skillIcons[skill] || { icon: '💻', color: 'from-gray-400 to-gray-600', bg: 'bg-gray-500/10' };
                        return (
                          <div
                            key={skill}
                            className={`group ${skillData.bg} border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden`}
                          >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skillData.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className="relative text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                              {skillData.icon}
                            </div>
                            
                            {/* Skill name */}
                            <div className={`relative text-slate-200 font-medium bg-gradient-to-r ${skillData.color} bg-clip-text group-hover:text-transparent transition-all duration-300`}>
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
      <section id="experience" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-slate-950 z-10">
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping"></div>
                    )}
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <Card className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                              {exp.current && (
                                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-cyan-400 text-lg font-medium">{exp.company}</CardDescription>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-slate-400 text-sm">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                              <span className="text-slate-600">•</span>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-slate-300 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-slate-800 text-slate-200 border-slate-700 hover:border-cyan-500/50 transition-all">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2 text-sm">
                          <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
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
      <section id="education" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-102 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                        {edu.current && (
                          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                            In Progress
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-cyan-400 text-lg font-medium">{edu.institution}</CardDescription>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <span className="text-slate-600">•</span>
                        <span>{edu.period}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-cyan-400 font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-slate-400 font-semibold mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} className="bg-slate-800 text-slate-200 border-slate-700 hover:border-cyan-500/50 transition-all">
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
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:pranithbhukya09@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  pranithbhukya09@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:+13464902475" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 (346) 490-2475
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/pranith-bhukya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  linkedin.com/in/pranith-bhukya
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
                <p className="text-cyan-400">Houston, TX</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            &copy; 2025 Pranith Bhukya. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;