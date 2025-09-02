import React from 'react'

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 modal-backdrop" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl p-6 shadow-cozy max-w-4xl w-full z-10">
        <button className="absolute top-4 right-4 text-cocoa-700 text-lg" onClick={onClose}>✖</button>

        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden mb-4">
              <video
                src={project.video}
                controls
                playsInline
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-cocoa-700 mt-2">{project.description}</p>

            <div className="mt-4 grid gap-2">
              <div className="text-sm text-cocoa-700">• Role: Developer / Designer</div>
              <div className="text-sm text-cocoa-700">• Tech: Unity / C#</div>
              <div className="text-sm text-cocoa-700">• Status: Prototype</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
