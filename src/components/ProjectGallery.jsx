import React, { useState, useRef } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Balloon Popper",
    video: "/api/videos/Balloon_Popper.mp4",
    description: "A 2D mobile game where various coloured balloons fly up. Pop them before they fly up the screen.",
    category: "Unity",
    github: "https://github.com/yourusername/balloon-popper",
  },
  {
    id: 2,
    title: "Block Dodger",
    video: "/api/videos/Block_Dodge.mp4",
    description: "A 2D mobile game where a cute rabbit is supposed to dodge blocks which fall at random.",
    category: "Unity",
    github: "https://github.com/Tanisha-kothari/BlockDodger.git",
  },
  {
    id: 3,
    title: "Ball Dodge",
    video: "/api/videos/Ball_Dodge.mp4",
    description: "A simple 3D mobile game where the player is supposed to dodge the balls coming down the ramp at full speed.",
    category: "Unity",
    github: "https://github.com/Tanisha-kothari/BallDodge.git",
  },
  {
    id: 4,
    title: "Coin Collector",
    video: "/api/videos/CCoin_Collector_unreal.mp4",
    description: "A clean, 3D game where the player is supposed to collect coins and be safe from AI enemies.",
    category: "Unreal",
    github: "https://github.com/Tanisha-kothari/MyFirstGame.git",
  },
  {
    id: 5,
    title: "Cozy Chop",
    video: "",
    description: "Coming soon!",
    category: "Unity",
    github: "",
  },
  {
    id: 6,
    title: "Lost Souls",
    video: "",
    description: "Coming soon!",
    category: "Unity",
    github: "",
  },
  {
    id: 7,
    title: "Speed for Fun",
    video: "",
    description: "Coming soon!",
    category: "Unity",
    github: "",
  },
  {
    id: 8,
    title: "Flip the Gravity",
    video: "",
    description: "Coming soon!",
    category: "Unity",
    github: "",
  },
];

const categories = ["All", "Unity", "Unreal", "Figma"];

export default function ProjectGallery() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const videoRefs = useRef(new Map());

  const setVideoRef = (id) => (el) => {
    if (el) videoRefs.current.set(id, el);
    else videoRefs.current.delete(id);
  };

  const playPreview = (id) => {
    videoRefs.current.forEach((vid, key) => {
      if (!vid) return;
      if (key !== id) {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    const vid = videoRefs.current.get(id);
    if (vid) {
      vid.currentTime = 0;
      const p = vid.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  const stopPreview = (id) => {
    const vid = videoRefs.current.get(id);
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${
                activeCategory === cat
                  ? "bg-cocoa-700 text-white shadow-md"
                  : "bg-peach-100 hover:bg-peach-200 text-cocoa-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <article
            key={p.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelected(p)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setSelected(p)
            }
            onMouseOver={() => p.video && playPreview(p.id)}
            onMouseOut={() => p.video && stopPreview(p.id)}
            className="relative cursor-pointer overflow-hidden bg-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <div className="relative">
              {p.video && (
                <video
                  ref={setVideoRef(p.id)}
                  src={p.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-xl transition-opacity duration-200"
                />
              )}
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-cocoa-700 mt-1">
                  Click to view details
                </p>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-3 py-1 rounded-lg bg-pink-200 hover:bg-pink-300 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Repo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
