import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Award, 
  Briefcase, 
  Mail, 
  Linkedin 
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sectionData = {
    about: {
      title: "About Me",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            I'm an ambitious Electrical Engineering student at IIT Bhubaneswar, driven by a passion for technology 
            and innovation. My academic journey reflects a commitment to excellence, combining theoretical knowledge 
            with practical skills across programming, web development, and engineering domains.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-800 mb-2">Key Strengths</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Strong analytical and problem-solving skills</li>
              <li>Proven academic excellence</li>
              <li>Versatile technical skill set</li>
              <li>Proactive learner and team player</li>
            </ul>
          </div>
        </div>
      )
    },
    academics: {
      title: "Academic Journey",
      content: (
        <div className="space-y-4">
          {[
            { exam: "MSBSHSE", score: "97%", description: "Outstanding performance in board examinations" },
            { exam: "HSC", score: "86%", description: "Consistent academic excellence" },
            { exam: "JEE MAINS", score: "Top 1 Percentile", description: "Demonstrated exceptional problem-solving skills" },
            { exam: "JEE ADVANCED", score: "Top 1 Percentile", description: "Proven ability in advanced engineering concepts" }
          ].map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-blue-800">{achievement.exam}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <span className="text-xl font-semibold text-blue-600">{achievement.score}</span>
              </div>
            </div>
          ))}
        </div>
      )
    },
    skills: {
      title: "Technical Arsenal",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Programming Languages</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Python', 'C++', 'C', 'JavaScript'].map((lang, index) => (
                <div 
                  key={index} 
                  className="bg-white p-3 rounded-md shadow-sm text-center hover:bg-blue-100 transition-colors"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Web Technologies</h3>
            <div className="grid grid-cols-2 gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React'].map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white p-3 rounded-md shadow-sm text-center hover:bg-blue-100 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    projects: {
      title: "Creative Projects",
      content: (
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Flappy Bird Game</h3>
            <p className="text-gray-600">
              A front-end implementation of the classic Flappy Bird game, demonstrating 
              JavaScript and interactive web development skills.
            </p>
            <div className="mt-3 flex space-x-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>
        </div>
      )
    },
    activities: {
      title: "Beyond Academics",
      content: (
        <div className="space-y-4">
          {[
            { 
              title: "Ashvamedha Sports Fest", 
              role: "Core Publicity Team", 
              institution: "IIT Bhubaneswar",
              icon: <Briefcase className="text-purple-600" />
            },
            { 
              title: "NCC", 
              role: "Cadet", 
              institution: "Indian Army",
              icon: <Award className="text-red-600" />
            },
            { 
              title: "Finance Economics and Business Society", 
              role: "Active Member", 
              institution: "IIT Bhubaneswar",
              icon: <Code className="text-blue-600" />
            }
          ].map((activity, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow"
            >
              <div className="mr-4">{activity.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                <p className="text-gray-600">{activity.role} | {activity.institution}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">Anmol Kamath</h1>
          <p className="text-xl opacity-80">Electrical Engineering Student | IIT Bhubaneswar</p>
          
          <div className="flex justify-center mt-6 space-x-6">
            <a 
              href="mailto:anmolkamath2206@gmail.com" 
              className="hover:scale-110 transform transition duration-300"
            >
              <Mail size={28} className="text-white hover:text-blue-200" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anmol-kamath-343838322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition duration-300"
            >
              <Linkedin size={28} className="text-white hover:text-blue-200" />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-center space-x-4 py-3">
          {Object.keys(sectionData).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeSection === section 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-700'
                }
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto my-10 px-4 flex-grow">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 bg-blue-50 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-blue-800">
              {sectionData[activeSection].title}
            </h2>
          </div>
          <div className="p-6">
            {sectionData[activeSection].content}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="opacity-70">© 2024 Anmol Kamath. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Portfolio;