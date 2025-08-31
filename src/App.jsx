import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProjectGallery from "./components/ProjectGallery";
import ContactForm from "./components/ContactForm";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-peach-50 text-cocoa-900 font-sans relative overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6 max-w-6xl mx-auto space-y-16">
        <header className="text-center mt-6">
          <h2 className="text-3xl font-bold mb-2">
            Hi — I'm <span className="text-cocoa-900">Tanisha Kothari</span>
          </h2>
          <p className="text-sm text-cocoa-700 max-w-xl mx-auto">
            A cozy corner of my passionate projects as an aspiring Game Developer.
          </p>
        </header>

        <section>
          <h3 className="text-2xl font-semibold mb-6">✨ Projects</h3>
          <ProjectGallery />
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">📩 Contact</h3>
          <ContactForm />
        </section>

        <footer className="text-center text-sm text-cocoa-700 py-6">
          Made with yarn, milk, and a tiny teddy. 🧸
        </footer>
      </main>
    </div>
  );
}
