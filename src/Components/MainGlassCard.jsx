import React from 'react';
import {
  FaReact, FaAngular, FaNodeJs, FaAws, FaLinux, FaGit, FaJava, FaDatabase
} from 'react-icons/fa';
import {
  SiTypescript, SiDotnet, SiTailwindcss, SiJavascript, SiCplusplus, SiJirasoftware
} from 'react-icons/si';
import Resume from '../assets/Srinjoy_Bhattacharya_Resume.pdf'
const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: '.NET Core', icon: <SiDotnet /> },
  { name: 'SQL Server', icon: <FaDatabase /> },
  // { name: 'Azure DevOps', icon: <SiAzuredevops /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'Jira', icon: <SiJirasoftware /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
];

const MainGlassCard = () => {
  return (
    <div className="h-full">
      <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 flex flex-col h-full transition-all">
        <div className="overflow-y-auto flex-1 space-y-10 pr-2 pb-4 ">

          {/* === About Section === */}
          <section id="about" className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-wide ">Srinjoy Bhattacharya</h2>
            <p className="text-base leading-relaxed opacity-90 max-w-4xl">
              Senior Frontend Developer with 3+ years of experience crafting stunning, scalable user interfaces with Angular, React, and .NET Core. I focus on beautiful, accessible, and responsive design using glassmorphism, neumorphism, and advanced UI engineering.
            </p>
            <a
              href={Resume}
              download
              className="inline-block px-4 py-2 rounded-lg bg-white/20  hover:bg-white/30 border border-white/20 text-sm font-semibold shadow backdrop-blur-sm transition-all"
            >
              📄 Download Resume
            </a>
          </section>

          {/* === Skills Section === */}
          <section id="skills">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map(({ name, icon }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-center font-medium text-sm transition shadow-inner border border-white/20 bg-white/10 hover:scale-105"
                  style={{
                    boxShadow: 'inset 5px 5px 15px rgba(255, 255, 255, 0.1), inset -5px -5px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <span className="text-2xl">{icon}</span>
                  {name}
                </div>
              ))}
            </div>
          </section>

          {/* === Experience Section === */}
          <section id="jobs" className="space-y-6">
            <h2 className="text-2xl font-bold mb-2">Experience</h2>

            {[{
              role: 'Senior Software Engineer – Persistent Systems',
              time: '2023 – Present',
              points: [
                'Led development of 6+ internal tools with React, Angular, .NET Core, and Node.js.',
                'Optimized UI responsiveness and migrated 4 Angular projects from v2 to v18.',
                'Introduced shimmer/glass UI components that cut load times by 40%.',
                'Built .NET utility scripts automating email workflows, reducing manual input by 20%.'
              ]
            }, {
              role: 'Software Engineer – Persistent Systems',
              time: '2022 – 2023',
              points: [
                'Developed and maintained Angular-based web applications.',
                'Integrated REST APIs and improved maintainability through reusable services.',
                'Contributed to legacy migration, enhancing scalability and UX.',
                'Reduced initial defect count by 15% through detailed unit testing and debugging.'
              ]
            }].map((job, i) => (
              <div key={i} className="bg-white/10 p-5 rounded-xl border border-white/20 shadow-inner space-y-2 hover:border-white/30 transition">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="text-sm">{job.time}</span>
                </div>
                <ul className="text-sm list-disc list-inside space-y-1 opacity-90">
                  {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* === Projects Section === */}
          <section id="projects" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>

            {[{
              name: 'Snack Attack 🍔',
              desc: 'Food ordering app with Firebase, infinite scroll, shimmer UI, Swiggy API. Stack: React + Tailwind.'
            }, {
              name: 'Popcorn Pal 🎬',
              desc: 'Netflix-style platform using TMDB API, OpenAI chatbot, animated transitions, glassmorphism.'
            }, {
              name: 'LightsCameraTickets 🎟️',
              desc: 'Ticket booking web app with Auth0, seat selection, Node backend & Angular 17 UI.'
            }].map((proj, idx) => (
              <div key={idx} className="bg-white/10 p-5 rounded-xl border border-white/20 hover:border-white/30 shadow-inner transition">
                <h4 className="text-lg font-semibold mb-1">{proj.name}</h4>
                <p className="text-sm opacity-80">{proj.desc}</p>
              </div>
            ))}
          </section>

          {/* === Education === */}
          <section id="education">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="text-sm leading-relaxed">
              <strong>B.Tech in Electrical & Electronics Engineering</strong><br />
              NSHM Knowledge Campus, Durgapur (2017–2021)<br />
              CGPA: 8.82 / 10
            </p>
          </section>

          {/* === Certifications === */}
          <section id="certifications" className="pb-10">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Azure Fundamentals (AZ-900) – 2022</li>
              <li>AWS Cloud Practitioner (CLF-C01) – 2023</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MainGlassCard;
