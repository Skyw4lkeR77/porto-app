import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal as TerminalIcon, 
  Shield, 
  Code, 
  Search, 
  Bug, 
  Lock, 
  Cpu, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  ExternalLink, 
  ChevronRight,
  User,
  Layers,
  Award,
  Zap,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-mono font-bold text-cyber-green neon-glow"
        >
          DZAKY<span className="text-white">.EXE</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-gray-400 hover:text-cyber-green transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-cyber-green"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TypingText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-cyber-green font-mono">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="scanline"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full glass border-cyber-green/30 text-cyber-green text-xs font-mono mb-6 neon-border">
            SYSTEM STATUS: ONLINE
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter glitch-effect" data-text="Muhammad Dzaky Fauzan">
            Muhammad Dzaky Fauzan
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Cybersecurity Student at Politeknik IDN | Bug Hunter | <TypingText texts={["Pentester", "OSINT Specialist", "Laravel Developer", "Tool Developer"]} />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyber-green text-black font-bold rounded-lg hover:bg-opacity-90 transition-all w-full sm:w-auto"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass text-white font-bold rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyber-green to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass p-2">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQF91wb4KYJNnQ/profile-displayphoto-scale_200_200/B56Ze6GfBeHUAc-/0/1751173956866?e=1776902400&v=beta&t=IzmeBO3OVdo9ZQd_0jGHtpS6JPEhdLNgnW3hAuj8TVs" 
                alt="Dzaky Fauzan" 
                className="rounded-xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cyber-green/10 pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyber-green opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyber-green opacity-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-cyber-green font-mono">01.</span> About Me
            </h2>
            <div className="space-y-4 text-gray-400 text-lg mb-6 leading-relaxed">
              <p>
                A cybersecurity student at Politeknik IDN and a Laravel-focused web developer with a strong passion for web security, OSINT, and vulnerability research. Experienced in building secure web applications, automation tools, and backend systems.
              </p>
              <p>
                I specialize in authorized penetration testing and bug hunting, with a track record of identifying and responsibly disclosing real-world vulnerabilities. My dual background in security and development allows me to build applications with a security-first mindset.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Shield size={18} />, text: "Authorized Pentester" },
                { icon: <Bug size={18} />, text: "Bug Hunter" },
                { icon: <Code size={18} />, text: "Laravel Web Developer" },
                { icon: <Lock size={18} />, text: "Ethical Hacking Focus" },
                { icon: <Cpu size={18} />, text: "Automation Specialist" },
                { icon: <Globe size={18} />, text: "OSINT Researcher" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-cyber-green">{item.icon}</span>
                  <span className="text-sm font-mono">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-6 glass rounded-xl border-l-4 border-cyber-green">
              <p className="italic text-gray-300 font-mono">
                "No System Is Safe. My mission is to find the cracks before the bad guys do, and build systems that can withstand the storm."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icon }: { title: string, skills: string[], icon: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass p-8 rounded-2xl hover:neon-border transition-all group"
  >
    <div className="w-12 h-12 rounded-lg bg-cyber-green/10 flex items-center justify-center text-cyber-green mb-6 group-hover:bg-cyber-green group-hover:text-black transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-gray-400 border border-white/10">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-gray-500 font-mono">Tools and technologies I use to break and build systems.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            title="Cybersecurity"
            icon={<Shield size={24} />}
            skills={["Web Pentesting", "Vulnerability Assessment", "OSINT", "Exploit Analysis", "Bug Hunting"]}
          />
          <SkillCard 
            title="Web Development"
            icon={<Code size={24} />}
            skills={["Laravel", "PHP", "REST API", "MVC Architecture", "Auth Systems"]}
          />
          <SkillCard 
            title="Development & Tools"
            icon={<Cpu size={24} />}
            skills={["Python", "Flask", "JavaScript", "Kali Linux", "Burp Suite", "Redis", "Automation"]}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`project-${project.title}`}
        onClick={() => setIsOpen(true)}
        className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
        whileHover={{ y: -10 }}
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold group-hover:text-cyber-green transition-colors">{project.title}</h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-cyber-green/30 text-cyber-green">
              {project.category}
            </span>
          </div>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="text-[10px] font-mono text-gray-500">#{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`project-${project.title}`}
              className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="text-xs font-mono text-cyber-green mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold mb-2 uppercase tracking-wider text-gray-300">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-cyber-green text-black font-bold rounded-xl flex items-center justify-center gap-2">
                      <Github size={18} /> Code
                    </button>
                    <button className="flex-1 px-6 py-3 glass text-white font-bold rounded-xl flex items-center justify-center gap-2">
                      <ExternalLink size={18} /> Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "The Rumbling",
      category: "Cybersecurity",
      description: "Advanced network analysis and stress testing tool inspired by Attack on Titan theme. Designed for security researchers to evaluate network resilience under heavy load.",
      image: "https://github.com/kyypau/TheRumbling/raw/main/Banner.png",
      tags: ["Python", "Scapy", "Network Security", "Multithreading"]
    },
    {
      title: "KOT (Kypau OSINT Tool)",
      category: "Cybersecurity",
      description: "A comprehensive OSINT tool for tracking emails, phone numbers, and usernames across multiple platforms. Automates the reconnaissance phase of pentesting.",
      image: "https://raw.githubusercontent.com/Skyw4lkeR77/KOT/main/KOT.png?token=GHSAT0AAAAAADVB4MTQEUZ2Z4HXTDVHWEUS2OMTPWA",
      tags: ["Python", "API Integration", "OSINT", "Data Scraping"]
    },
    {
      title: "KyBot",
      category: "Automation",
      description: "AI-based assistant system designed for automation and SaaS deployment. Features natural language processing for task management and system monitoring.",
      image: "https://picsum.photos/seed/bot/800/600",
      tags: ["Node.js", "OpenAI API", "Redis", "Automation"]
    },
    {
      title: "Hotel Management System",
      category: "Web Development",
      description: "Professional web-based hotel management system built with Laravel. Features real-time booking, dynamic pricing, admin dashboard, and multi-role user management.",
      image: "https://picsum.photos/seed/hotel/800/600",
      tags: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"]
    },
    {
      title: "Tahfidz Management System",
      category: "Web Development",
      description: "A specialized system for managing Quran memorization progress. Tracks student data, daily progress reports, and generates academic performance evaluations.",
      image: "https://picsum.photos/seed/quran/800/600",
      tags: ["Laravel", "Livewire", "PostgreSQL", "Charts.js"]
    },
    {
      title: "Volunteer Management System",
      category: "Web Development",
      description: "Platform for managing volunteers and events efficiently. Includes coordination tools, event scheduling, and volunteer impact reporting.",
      image: "https://picsum.photos/seed/volunteer/800/600",
      tags: ["Laravel", "Bootstrap", "MySQL", "REST API"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
            <p className="text-gray-500 font-mono max-w-xl">A collection of security tools and professional web applications I've developed.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs font-mono text-cyber-green border border-cyber-green/30 px-4 py-2 rounded-full glass">
              6 PROJECTS TOTAL
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const items = [
    {
      year: "2024 - Present",
      title: "Cybersecurity Student",
      org: "Politeknik IDN",
      desc: "Focusing on network security, penetration testing, and ethical hacking. Actively participating in CTF competitions and security research."
    },
    {
      year: "2023 - 2024",
      title: "Bug Hunter & Researcher",
      org: "Independent",
      desc: "Discovered and responsibly disclosed vulnerabilities (XSS, SQLi) in various platforms. Focused on web application security and OSINT methodologies."
    },
    {
      year: "2022 - 2023",
      title: "Laravel Web Developer",
      org: "Freelance / Projects",
      desc: "Built scalable full-stack applications for management and reporting systems. Specialized in secure backend architecture and API development."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experience & Achievements</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l-2 border-cyber-green/20"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyber-green neon-glow"></div>
              <span className="text-xs font-mono text-cyber-green mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <h4 className="text-gray-400 font-mono mb-4">{item.org}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'cmd' | 'res', text: string }[]>([
    { type: 'res', text: 'Welcome to DZAKY.EXE Terminal v1.0.0' },
    { type: 'res', text: 'Type "help" to see available commands.' }
  ]);

  const commands: Record<string, string> = {
    help: "Available commands: whoami, skills, projects, contact, clear, help",
    whoami: "Muhammad Dzaky Fauzan - Cybersecurity Student @ Politeknik IDN | Bug Hunter | Laravel Developer",
    skills: "Cybersecurity: Web Pentesting, OSINT, Bug Hunting. Web: Laravel, PHP, Python, JS.",
    projects: "The Rumbling, KOT, KyBot, Hotel Management System, Tahfidz System, Volunteer System.",
    contact: "Email: contact@dzaky.exe | GitHub: github.com/dzaky | LinkedIn: linkedin.com/in/dzaky",
    clear: "CLEAR"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd' as const, text: input }];
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (commands[cmd]) {
      setHistory([...newHistory, { type: 'res' as const, text: commands[cmd] }]);
    } else {
      setHistory([...newHistory, { type: 'res' as const, text: `Command not found: ${cmd}. Type "help" for assistance.` }]);
    }

    setInput('');
  };

  return (
    <section id="terminal" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass rounded-2xl overflow-hidden border-white/10 shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <TerminalIcon size={14} /> dzaky@politeknik-idn: ~
            </div>
            <div className="w-12"></div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm space-y-2 bg-black/40">
            {history.map((item, i) => (
              <div key={i} className={item.type === 'cmd' ? 'text-white' : 'text-cyber-green'}>
                {item.type === 'cmd' ? (
                  <span className="flex gap-2">
                    <span className="text-cyber-green">➜</span>
                    <span className="text-cyber-blue">~</span>
                    {item.text}
                  </span>
                ) : (
                  <div className="pl-6 whitespace-pre-wrap">{item.text}</div>
                )}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-cyber-green">➜</span>
              <span className="text-cyber-blue">~</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="bg-transparent border-none outline-none flex-1 text-white"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 text-lg mb-8">
              Interested in collaboration, security audits, or just want to talk about ethical hacking? Drop me a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyber-green group-hover:neon-border transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500">Email</h4>
                  <p className="text-white font-bold">contact@dzaky.exe</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyber-green group-hover:neon-border transition-all">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500">Location</h4>
                  <p className="text-white font-bold">Politeknik IDN, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: <Github />, href: "#" },
                { icon: <Linkedin />, href: "#" },
                { icon: <Send />, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyber-green transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyber-green outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyber-green outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyber-green outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyber-green outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-cyber-green text-black font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-mono font-bold text-cyber-green mb-4 neon-glow">"No System Is Safe"</h3>
        <p className="text-gray-500 text-sm mb-8">© {new Date().getFullYear()} Muhammad Dzaky Fauzan. All rights reserved.</p>
        <div className="flex justify-center gap-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
          <a href="#" className="hover:text-cyber-green">Privacy Policy</a>
          <a href="#" className="hover:text-cyber-green">Terms of Service</a>
          <a href="#" className="hover:text-cyber-green">Responsible Disclosure</a>
        </div>
      </div>
    </footer>
  );
};

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 65, 0.03), transparent 80%)`
      }}
    />
  );
};

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60]">
      <div 
        className="h-full bg-cyber-green neon-glow transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="relative">
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
