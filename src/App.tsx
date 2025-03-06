import { Github, Linkedin, Mail,  Code, Briefcase, GraduationCap, User } from 'lucide-react';
// Removed unused import
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import CustomCursor from './components/CustomCursor';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="relative text-white min-h-screen overflow-x-hidden cursor-none">
      <CustomCursor />
      <SpaceBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float">
              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 mb-6">
                <div className="bg-black rounded-full p-1">
                  <img 
                    src="https://raw.githubusercontent.com/SreeAdithya123/adithya-portfolio/main/images/_MG_7593.JPG" 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
              Sree Adithya Kandikonda
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-blue-300">
              Student at Sasi Institute of Technology and Engineering
            </h2>
            <div className="text-xl text-gray-400 mb-8 h-[60px]">
              <TypeAnimation
                sequence={[
                  'Electronic Enthusiast',
                  2000,
                  'WildLife Photographer',
                  2000,
                  'Tech Explorer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              I build exceptional digital experiences with modern technologies.
              Passionate about creating innovative solutions that make a difference.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 rounded-full border border-blue-500 hover:bg-blue-900/30 transition-all duration-300 font-medium">
                View Projects
              </a>
            </div>
            <div className="flex justify-center mt-8 space-x-6">
              <a href="https://github.com/SreeAdithya123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/adithya-kandikonda-542a90327/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:adithya.kandikonda@sasi.ac.in" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <Section id="about" title="About Me" icon={<User className="inline mr-2" />}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
              Hello! I'm Adithya, a passionate tech enthusiast working on AI, IoT, and GIS projects. I enjoy integrating emerging technologies like drone sensing, satellite image processing, and VR to create innovative solutions. Constantly learning and pushing boundaries, I strive to build impactful and cutting-edge applications.
              </p>
              <p className="text-lg text-gray-300">
                
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me exploring the cosmos through my telescope, reading science fiction, capturing beautiful images, or simply enjoying a good cup of coffee.moments of mother nature,
                or contributing to open-source projects.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React" />
                  <SkillBadge name="C programming" />
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Software Defined Radio" />
                  <SkillBadge name="Python" />
                  <SkillBadge name="GIS" />
                  <SkillBadge name="Git" />
                  <SkillBadge name="HTML" />
                  <SkillBadge name="CSS" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Space" 
                className="relative rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </Section>
        
        {/* Timeline Section */}
        <Section id="timeline" title="My Journey & Achievements" icon={<Briefcase className="inline mr-2" />}>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[20px] transform h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            {/* 2024 */}
            <div className="relative mb-16">
              <div className="flex items-center mb-4">
                <div className="absolute left-[20px] transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-full pl-12 pr-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">2024</div>
                      <div className="text-slate-300">Engineering Achievements</div>
                    </div>
                  </div>
                  <div className="text-slate-500">Advanced to Round 2 of Smart India Hackathon 2024</div>
                  <div className="text-slate-500 text-sm mt-2">Current Projects:</div>
                  <ul className="list-disc list-inside text-slate-500 text-sm mt-1">
                    <li>VR, AR, and Gaming Development</li>
                    <li>Roll The Ball - 3D Physics Game</li>
                    <li>3D Solar System Explorer using Unity</li>
                    <li>Satellite Imaging and Processing (2025)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative mb-16">
              <div className="flex items-center mb-4">
                <div className="absolute left-[20px] transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center z-10">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-full pl-12 pr-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <div className="font-bold text-purple-300">2023</div>
                      <div className="text-slate-300">Engineering Journey</div>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm">Pursuing Electronics and Communication Technology at Sasi Institute of Technology & Engineering</div>
                  <div className="text-slate-500 text-sm mt-2">Projects:</div>
                  <ul className="list-disc list-inside text-slate-500 text-sm mt-1">
                    <li>Face Recognition-Based Attendance System</li>
                    <li>Online Resume Builder (React, HTML, CSS, JS)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative mb-16">
              <div className="flex items-center mb-4">
                <div className="absolute left-[20px] transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-full pl-12 pr-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">2021</div>
                      <div className="text-slate-300">Intermediate Education</div>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm">Sasi Junior College, Nidadavolu</div>
                  <div className="text-slate-500 text-sm mt-2">🛡 Started exploring Ethical Hacking using Kali Linux</div>
                </div>
              </div>
            </div>

            {/* 2017-2019 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="absolute left-[20px] transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center z-10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="w-full pl-12 pr-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <div className="font-bold text-purple-300">2017 - 2019</div>
                      <div className="text-slate-300">School Achievements</div>
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm">Sasi EM High School, Nidadavolu</div>
                  <ul className="list-disc list-inside text-slate-500 text-sm mt-2">
                    <li>🛰 2017 (7th Class) – Represented Satish Dhawan Space Center at a science fair</li>
                    <li>🥉 2018 (8th Class) – Won a Bronze Medal in the Science Olympiad</li>
                    <li>🏆 2019 (9th Class) – Secured 2nd place in Science Exhibition for "VisionGlove – Smart Assistive Wearable" project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Projects Section */}
        <Section id="projects" title="My Projects" icon={<Code className="inline mr-2" />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Online Resume Builder"
              description="The AI-Powered Resume & Portfolio Builder is a smart, user-friendly web application designed to help users create professional resumes effortlessly. Built with JavaScript and hosted on GitHub Pages, this tool offers a seamless experience for generating and downloading resumes in PDF format."
              tags={["React", "TypeScript", "Tailwind CSS"]}
              image="https://static.jobscan.co/blog/uploads/533x340_03_new.png"
              link="https://github.com/SreeAdithya123/resume-maker.git"
            />
            <ProjectCard 
              title="3D Solar System Explorer"
              description="Step into space with the 3D Solar System Explorer, a stunning Unity-powered simulation designed for an immersive cosmic experience. This interactive project brings the planets, moons, and the Sun to life with realistic movement, dynamic interactions, and VR support."
              tags={["Unity", "C#", "VR"]}
              image="https://wallpaperaccess.com/full/191042.jpg"
              link="https://github.com"
            />
            <ProjectCard 
              title="VisionGlove - Smart Assistive Wearable"
              description="The Third Eye for the Blind is an assistive device designed to help visually impaired individuals navigate safely. This smart glove uses ultrasonic sensors, vibration feedback, and audio alerts to detect obstacles and guide users effectively."
              tags={["Microcontroller", "ultrasonic sensor", "Buzzer and Vibrator"]}
              image="https://hackster.imgix.net/uploads/attachments/315305/3rd_eye_for_blinds_IzPm2dSJ52.jpg?auto=compress%2Cformat&w=740&h=555&fit=max"
              link="https://github.com"
            />
            <ProjectCard 
              title="Roll The Ball - 3D Physics-Based Game"
              description="Roll The Ball is a fun and interactive 3D game built in Unity, where players control a rolling ball to navigate through various levels while avoiding obstacles and collecting items. With realistic physics and smooth controls, this game challenges players to master precision and movement."
              tags={["Unity", "C#", "3D Physics"]}
              image="https://connect-prd-cdn.unity.com/20210725/videos/6dd82f65-bd1a-4aab-ae2d-a14cf5da1495_Roll_A_Ball/poster/origin/thumb1.png"
              link="https://github.com"
            />
            <ProjectCard 
              title="Satellite Imaging & Data Processing"
              description="The Satellite Imaging & Data Processing Project focuses on receiving, analyzing, and visualizing satellite images using advanced tools and techniques. This project integrates GIS, AI, and remote sensing to extract meaningful insights from satellite data."
              tags={["Software Defined Radio", "Antenna", "Satellite"]}
              image="https://scitechdaily.com/images/Copernicus-Sentinel-2-scaled.jpg"
              link="https://github.com"
            />
            <ProjectCard 
              title="Face Recognition based Attandance marking system"
              description="The Face Recognition-Based Attendance System is an AI-powered solution designed to automate attendance marking using facial recognition technology. This project eliminates manual attendance processes, improving efficiency, security, and accuracy in tracking student or employee presence."
              tags={["Python", "Raspberry Pi", "OpenCV", "Face Recognition"]}
              image="https://i.morioh.com/f8c70ac378.png"
              link="https://github.com"
            />
          </div>
        </Section>
        
        {/* Contact Section */}
        <Section id="contact" title="Contact Me" icon={<Mail className="inline mr-2" />}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 p-6">
              <p className="text-lg text-gray-300 leading-relaxed">
              I'm always excited to explore new projects, collaborate on innovative ideas, and take on challenges that push the boundaries of technology. Whether it's a potential collaboration, a creative concept, or an opportunity to bring a vision to life, I'd love to hear from you! Feel free to connect with me through my social media profiles or drop me a message
              </p>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                  <Mail className="mr-4 text-blue-400" size={24} />
                  <a href="mailto:adithya.kandikonda@sasi.ac.in" className="text-gray-300 hover:text-white transition-colors">
                    adithya.kandikonda@sasi.ac.in
                  </a>
                </div>
                <div className="flex items-center justify-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                  <Github className="mr-4 text-blue-400" size={24} />
                  <a href="https://github.com/SreeAdithya123" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    github.com/SreeAdithya123
                  </a>
                </div>
                <div className="flex items-center justify-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                  <Linkedin className="mr-4 text-blue-400" size={24} />
                  <a href="https://www.linkedin.com/in/adithya-kandikonda-542a90327/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    linkedin.com/in/adithya-kandikonda-542a90327
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} K. Sree Adithya. All rights reserved.</p>
            <p className="mt-2">Designed with <span className="text-red-500">♥</span> and cosmic inspiration</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;