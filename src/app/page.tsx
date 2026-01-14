'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('header');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">Ethan Waxman</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'header', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section id="header" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Ethan Waxman
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Software Developer
            </h2>
            <div className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>
                I'm a software developer with a passion for exploring the intersections of technology and science. 
                With degrees in both computer science and applied physics, I bring a multidisciplinary approach to problem-solving.
              </p>
              <p>
                My interests span artificial intelligence, machine learning, linguistics, physics, and mathematics, 
                and I'm always eager to tackle new challenges at the cutting edge of innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/CS Resume Website.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Java (advanced)</li>
                <li>• Python (advanced)</li>
                <li>• OCaml (advanced)</li>
                <li>• Rust (intermediate)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Learning & AI</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• PyTorch, TensorFlow, Keras</li>
                <li>• Natural Language Processing (NLTK)</li>
                <li>• Graph Neural Networks</li>
                <li>• GenAI (ChatGPT, Cursor)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend & Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• FastAPI, Redis</li>
                <li>• Functional Programming (OCaml)</li>
                <li>• AWS Cloud Practitioner</li>
                <li>• Neo4j Graph Data Science</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
                  <p className="text-blue-600 font-medium">FI Consulting - Arlington, VA</p>
                </div>
                <span className="text-gray-600 text-sm md:text-base">Aug 2024 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Developed and deployed a machine learning entity resolution service on AWS Sagemaker, removing over 10,000 duplicated records for a major financial institution</li>
                <li>• Built a customer analytics dashboard with PySpark and Databricks, enabling executives to investigate the behavior of over 15 million customers simultaneously</li>
                <li>• Implemented 3 graph neural network architectures for financial product recommendations, overcoming data and scaling issues to train on 1M+ users in &lt;5 min; proposed a new solution for personalized marketing at a large retail bank</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Intern</h3>
                  <p className="text-blue-600 font-medium">FI Consulting - Arlington, VA</p>
                </div>
                <span className="text-gray-600 text-sm md:text-base">Jun 2023 - Jun 2024</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Built a Retrieval-Augmented Generation (RAG) application to support internal document queries, integrating ChromaDB and Ollama; extended the system with Redis and Flask to support 50+ simultaneous users and service requests in under 10 seconds</li>
                <li>• Evaluated OCR services from AWS, Azure, and GCP on 5,000+ documents, documenting and comparing the offerings to support internal workflows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Intern</h3>
                  <p className="text-blue-600 font-medium">Amalgam Rx - Baltimore, MD</p>
                </div>
                <span className="text-gray-600 text-sm md:text-base">Jun 2021 - Aug 2021</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Implemented an AI chatbot that supported medical professionals treating mental health problems</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compiler</h3>
                <p className="text-gray-700 mb-4">
                  Led a 3 person team to build a full-stack compiler for an academic programming language, comprising 10,000+ lines of Java. Introduced modular design patterns that maintained clarity and enabled rapid feature development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Java</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Team Leadership</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Modular Design</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">10,000+ LOC</span>
                </div>
                <a href="/Compiler Write Up.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Large Language Model Research</h3>
                <p className="text-gray-700 mb-4">
                  Conducted novel research into LLM cognition linking the preferences of syntactic repair of garden path sentences in humans with the frequency of model predictions. Authored a 7 page research paper detailing motivations, methods, and findings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">LLMs</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Research</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Syntax Analysis</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Academic Paper</span>
                </div>
                <a href="/Garden Path Paper.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Noise Reduction Project</h3>
                <p className="text-gray-700 mb-4">
                  Used a Raspberry Pi to record audio from a microphone and then apply a combination of digital signal processing techniques to reduce noise in the audio recordings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Raspberry Pi</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">C++</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Digital Signal Processing</span>
                </div>
                <a href="/Noise_Reduction_System.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Science, Double Major in Applied and Engineering Physics and Computer Science</h3>
              <p className="text-blue-600 font-medium mb-2">Cornell University, College of Engineering, Ithaca, NY</p>
              <p className="text-gray-600 text-sm">May 2024 | GPA: 3.53</p>
              <p className="text-gray-700 mt-3">
                Relevant Courses: Foundations of AI, Computational Linguistics, Neural Networks, Compilers, Computer Architecture and Design, Operating Systems, Discrete Structures (Honors), Functional Programming
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">AWS Cloud Practitioner</p>
                  <p className="text-gray-600 text-sm">Amazon Web Services</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Neo4j Graph Data Science</p>
                  <p className="text-gray-600 text-sm">Neo4j</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 text-center">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ethan-waxman/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
                </svg>
              </a>
              <a
                href="https://github.com/ethan-wax"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Ethan Waxman. Built with Next.js and Tailwind CSS by Cursor.
          </p>
        </div>
      </footer>
    </div>
  );
}
