import React from "react";

const projects = [
  {
    title: "Fruit Frenzy",
    description: "A simple 2D game where you collect good apples and avoid bad ones!",
    link: "https://github.com/tanisha-kothari/project-one",
  },
  {
    title: "Cozy Forest",
    description: "A 3D cozy game where you live in the midst of the forest, developing a town.",
    link: "https://github.com/tanisha-kothari/project-two",
  },
  {
    title: "Cozy Chop",
    description: "Chop trees and build your cozy world!",
    embed: "https://itch.io/embed/3450656?linkback=true&border_width=5",
    iframeLink: "https://tanigames111.itch.io/cozy-chop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tanisha Kothari</h1>
        <nav>
          <a href="#projects" className="mx-3 hover:text-blue-400">Projects</a>
          <a href="#contact" className="mx-3 hover:text-blue-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold">Hi, I'm Tanisha! 👋</h2>
        <p className="text-lg text-gray-400 mt-4">Game Developer | Machine Learning Enthusiast</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              {project.embed ? (
                <iframe
                  src={project.embed}
                  frameBorder="0"
                  width="100%"
                  height="175"
                  className="rounded"
                >
                  <a href={project.iframeLink}>{project.title} on Itch.io</a>
                </iframe>
              ) : (
                <a href={project.link} target="_blank" className="text-blue-400 mt-2 inline-block">
                  View on Itch.io →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20 text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-2">
          Email me at <a href="mailto:tanisha@example.com" className="text-blue-400">kotharitanishanilesh@gmail.com</a>
        </p>
        <p className="mt-4">
          <a href="https://www.linkedin.com/in/tanisha-kothari-39a949256/" target="_blank" className="text-blue-400 mx-2">LinkedIn</a> |  
          <a href="https://github.com/tanisha-kothari" target="_blank" className="text-blue-400 mx-2">GitHub</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        © 2025 Tanisha Kothari | Built with Next.js & TypeScript
      </footer>
    </div>
  );
}
