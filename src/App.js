import React, { useState } from 'react';
import { Download, Code, Database, Cloud, Server, Briefcase, Mail, Phone, MapPin, Menu, X, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    languages: ['GoLang', 'PHP', 'Python', 'C#', 'C++', 'Node.js', 'JavaScript', 'VoiceXML'],
    frontend: ['React', 'Vue.js', 'jQuery', 'HTML5', 'CSS3', 'Responsive Design'],
    backend: ['Laravel', 'Django', 'Express', 'FastAPI', 'Flask', '.NET', 'REST API', 'SOAP API'],
    databases: ['MySQL', 'PostgreSQL', 'MSSQL', 'Firebase', 'NoSQL', 'CloudSQL', 'Oracle'],
    cloud: ['Google Cloud Platform', 'AWS', 'Docker', 'Cloud Run', 'Digital Ocean', 'Firebase', 'Nginx'],
    practices: ['DevOps', 'Agile', 'TDD', 'CI/CD', 'Git', 'OAuth2', 'Business Analysis']
  };

  const portfolioProjects = [
    {
      title: 'ExQi – Secure Cloud-Based Job Profiling Platform',
      company: 'Experttech / SITA',
      description: 'Cloud-based job profiling solution with comprehensive role-based access control, OAuth2 authentication, and dynamic API generation.',
      media: [
        { type: 'video', url: 'https://youtu.be/J7Ow5iiFep0' }
      ],
      tech: ['GoLang', 'GCP', 'ReactJS', 'Auth0', 'CloudSQL'],
      highlights: ['Dynamic API generation based on schema', 'Automated CRUD operations', 'OAuth2 security integration']
    },
    {
      title: 'Google Sheets Admin & Support Tool',
      company: "Celbux",
      description: 'Built an innovative internal admin tool where a Cloud Run-hosted Go API dynamically reads Postman collections to auto-generate a Google Sheets UI. Enabled finance/support teams to securely execute role-based bulk CRUD operations via auto-generated Apps Script forms, eliminating repetitive developer requests.',
      media: [
        { type: 'image', url: process.env.PUBLIC_URL + '/images/portfolio/cb1.jpg' },
        { type: 'image', url: process.env.PUBLIC_URL + '/images/portfolio/cb2.jpg' }
      ],
      tech: ['GoLang', 'PHP', 'Apps Script', 'GCP', 'C#'],
      highlights: ['High-volume financial transactions', 'Partner API integrations', 'Administrative tools suite']
    },
    {
      title: 'Celbux Wallet Mobile Application',
      company: "Celbux",
      description: 'A Flutter-based mobile application for the Celbux virtual wallet platform. Integrated directly with the live Celbux Auth0 API for secure user authentication and session management. Built core wallet functionality including balance overview, transaction history, and a secure peer-to-peer money sending system with live API calls for transaction processing.',
      media: [
        { type: 'video', url: 'https://youtu.be/QzHcLP6J9HM' }
      ],
      tech: ['Flutter', 'Dart', 'GCP', 'Firebase'],
      highlights: ['High-volume financial transactions', 'Partner API integrations', 'Mobile End User Tool']
    },
    {
      title: 'SellMe Sales Rep CRM',
      company: 'Pocketime',
      description: 'A Laravel CRM managing full sales pipeline with mandatory geolocation check-ins for sales meeting integrity.',
      media: [
        { type: 'video', url: 'https://youtu.be/jSBc8sOKTqo' }
      ],
      tech: ['PHP', 'Laravel', 'Google Maps API', 'MySQL'],
      highlights: ['Geolocation verification', 'Full pipeline management', 'Lead to contract tracking']
    },
    {
      title: 'Massmart GoFetch API Integration',
      company: 'Massmart Holdings',
      description: 'A WordPress employee portal integrated with enterprise CMS, automating user management for 1000+ employees.',
      media: [
        { type: 'image', url: process.env.PUBLIC_URL + '/images/portfolio/mm1.jpg' },
        { type: 'image', url: process.env.PUBLIC_URL + '/images/portfolio/mm2.jpg' }
      ],
      tech: ['WordPress', 'PHP', 'Custom APIs', 'MySQL'],
      highlights: ['Bidirectional data sync', 'Automated user management', 'Personalized content delivery']
    },
    {
      title: 'Builders "Big Idea" Portal',
      company: 'Massmart Holdings',
      description: "Created a custom WordPress innovation portal for a major retail chain's employees. Built a complete idea submission, voting, and moderation plugin from scratch. Designed the database and responsive interface to foster engagement. Provided ongoing maintenance via an SLA.",
      media: [
        { type: 'image', url: process.env.PUBLIC_URL + '/images/portfolio/bb1.jpg' }
      ],
      tech: ['PHP', 'WordPress', 'MySQL', 'CSS', 'JQuery'],
      highlights: ['Responsive Design', 'Plugin Development', 'Database Design', 'Maintenance']
    },
    {
      title: 'Swanky',
      company: 'Mandelbrot Technologies',
      description: 'A mobile application to facilitate endorsement deals between sport stars and companies. The application was built in Ionic running on top of a Meteor.JS api and uses MongoDB as the database.',
      media: [
        { type: 'image', url: process.env.PUBLIC_URL + '/images/portfolio/swanky.png' }
      ],
      tech: ['Ionic', 'Meteor.JS', 'MongoDB', 'Node.js'],
      highlights: ['High-volume voting systems', 'Real-time processing', 'First in-house Fax2Email server in SA']
    }
  ];

  const experience = [
    {
      company: 'Experttech',
      role: 'Full-Stack Solution Architect + PM + DevOps',
      period: 'Oct 2024 - Dec 2025',
      description: 'Cloud-based Job Profiling solution for SITA with OAuth2 and dynamic GoLang APIs',
      achievements: [
        'Architected secure, scalable cloud infrastructure',
        'Dynamic API generation based on database schema',
        'End-to-end delivery from business analysis to deployment'
      ]
    },
    {
      company: "Principals' Choice",
      role: 'Principal Full-Stack Engineer',
      period: 'Mar 2022 - Sep 2024',
      description: 'Led fintech solutions for Celbux virtual wallet and finance platform',
      achievements: [
        'High-volume financial transaction systems',
        'Partner integration with Flash for sports betting',
        'DevOps processes and GCP architecture'
      ]
    },
    {
      company: 'Freelance',
      role: 'Principal Full-Stack Engineer',
      period: 'Feb 2021 - Feb 2022',
      description: 'Solutions for Sun Oil, Pocketime, Massmart & Builders',
      achievements: [
        'Laravel CRM with geolocation tracking',
        'WordPress enterprise integrations',
        'Custom plugin development'
      ]
    },
    {
      company: 'd6 Group',
      role: 'Senior Software Developer',
      period: 'Oct 2017 - Aug 2021',
      description: 'Educational technology platform development',
      achievements: [
        'd6 Connect REST API development',
        'Legacy system modernization',
        'SaaS product lifecycle management'
      ]
    },
    {
      company: 'Parallel Software',
      role: 'Senior Team Leader',
      period: 'May 2016 - Sep 2017',
      description: 'Technical team leadership and strategic technology decisions',
      achievements: [
        'Built and mentored development team',
        'Established best practices and methodologies',
        'Technology stack evaluation and decisions'
      ]
    },
    {
      company: 'Parallel Software',
      role: 'Senior Systems Developer',
      period: 'Aug 2014 - May 2016',
      description: 'Placement Partner platform and custom client solutions',
      achievements: [
        'System administration and API development',
        'Emerging technology implementation',
        'Custom solution delivery'
      ]
    },
    {
      company: 'Freelance (VidiSys)',
      role: 'Senior Developer',
      period: 'Feb 2011 - Jul 2014',
      description: 'Security applications and specialized solutions',
      achievements: [
        'Real-time alert systems',
        'IP tracking and CSRF protection',
        'Multi-platform development'
      ]
    },
    {
      company: 'Aspivia',
      role: 'System Designer / Senior Developer',
      period: 'Dec 2009 - Feb 2011',
      description: 'Ti2 System development in distributed team',
      achievements: [
        'Database sharding implementation',
        'Improved development processes',
        'International team collaboration'
      ]
    },
    {
      company: 'Fujitsu',
      role: 'Senior Developer / Development Lead',
      period: 'Dec 2008 - Nov 2009',
      description: 'Western Cape Department of Education project',
      achievements: [
        'Promoted to Development Lead',
        'Recreated 6 months of BRS in 2 weeks',
        'Mentored junior developers'
      ]
    },
    {
      company: 'Sisha.com Systems',
      role: 'Developer',
      period: 'May 2008 - Dec 2008',
      description: 'Business automation solutions',
      achievements: [
        'Server monitoring with SMS notifications',
        'Database migration tools (Interbase to MSSQL)',
        'Critical system integrations'
      ]
    },
    {
      company: 'Neametrics',
      role: 'Developer',
      period: 'Apr 2008 - May 2008',
      description: 'ProofTag authentication and barcode systems',
      achievements: [
        'MMS gateway development',
        'PDF417 barcode decoder',
        'Namibian Licence Department integration'
      ]
    },
    {
      company: 'Safikatel / NGN',
      role: 'Junior Developer',
      period: 'Apr 2007 - Apr 2008',
      description: 'IVR systems for high-profile clients',
      achievements: [
        'MNET Idols and Big Brother voting systems',
        'Self-taught IBM WebSphere & AIX',
        'First in-house Fax2Email server in SA'
      ]
    }
  ];

  const handleDownloadCV = () => {
    window.open('/Stefanus_Foukaridis_CV.pdf', '_blank');
  };


  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-blue-900/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Foukaridis" className="h-[50px] w-[50px]" />

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-900 transition">Skills</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition">Portfolio</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-900 transition">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition">Contact</a>
            </div>

            <button
              className="md:hidden text-blue-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#about" className="block text-gray-700 hover:text-blue-900 transition py-2">About</a>
              <a href="#skills" className="block text-gray-700 hover:text-blue-900 transition py-2">Skills</a>
              <a href="#portfolio" className="block text-gray-700 hover:text-blue-900 transition py-2">Portfolio</a>
              <a href="#experience" className="block text-gray-700 hover:text-blue-900 transition py-2">Experience</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-900 transition py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 p-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                  alt="Stefanus Foukaridis"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-900">
                Steven Foukaridis
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-700 mb-4">Principal Full-Stack Engineer</p>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl">
                {new Date().getFullYear() - 2007}+ years architecting innovative solutions across fintech, education, telecoms, and cloud platforms.
                Expert in full-stack development, DevOps, and scalable infrastructure with proven leadership in
                delivering high-impact projects from conception to deployment.
              </p>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                <Download size={20} />
                Download CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-900">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<Code className="text-blue-900" />}
              title="Languages"
              skills={skills.languages}
            />
            <SkillCard
              icon={<Server className="text-blue-800" />}
              title="Frontend"
              skills={skills.frontend}
            />
            <SkillCard
              icon={<Server className="text-blue-700" />}
              title="Backend"
              skills={skills.backend}
            />
            <SkillCard
              icon={<Database className="text-blue-900" />}
              title="Databases"
              skills={skills.databases}
            />
            <SkillCard
              icon={<Cloud className="text-blue-800" />}
              title="Cloud & DevOps"
              skills={skills.cloud}
            />
            <SkillCard
              icon={<Briefcase className="text-blue-700" />}
              title="Practices"
              skills={skills.practices}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-900">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-blue-100 hover:border-blue-900 hover:shadow-xl transition"
              >
                <ProjectMedia media={project.media} />
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-700 font-semibold mb-3">{project.company}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-900">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-blue-100 hover:border-blue-900 hover:shadow-lg transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{exp.role}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 text-sm flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-900 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-900">
            Get In Touch
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-700">
            <a href="mailto:steven.foukaridis@gmail.com" className="flex items-center gap-2 hover:text-blue-900 transition">
              <Mail size={20} />
              steven.foukaridis@gmail.com
            </a>
            <a href="tel:+27761947582" className="flex items-center gap-2 hover:text-blue-900 transition">
              <Phone size={20} />
              +27 76 194 7582
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              Pretoria, South Africa
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 border-t border-blue-100">
        <p>© {new Date().getFullYear()} Stefanus Foukaridis. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-blue-100 hover:border-blue-900 hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectMedia({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media || media.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentItem = media[currentIndex];

  const getEmbedUrl = (url) => {
    if (url.includes('youtu.be')) {
      const id = url.split('/').pop();
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group">
      {currentItem.type === 'video' ? (
        <iframe
          width="100%"
          height="100%"
          src={getEmbedUrl(currentItem.url)}
          title="Project Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={currentItem.url}
          alt="Project screenshot"
          className="w-full h-full object-cover"
        />
      )}

      {media.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prevSlide(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full text-blue-900 opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); nextSlide(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full text-blue-900 opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/20 px-2 py-1 rounded-full">
            {media.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}