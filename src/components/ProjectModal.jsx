import React from 'react'

export default function ProjectModal({project,onClose}){
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 modal-backdrop" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl p-6 shadow-cozy max-w-2xl w-full z-10">
        <button className="absolute top-4 right-4 text-cocoa-700" onClick={onClose}>✖</button>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden mb-4">
              <video src={project.video} controls className="w-full h-52 object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-cocoa-700 mt-2">{project.description}</p>

            <div className="mt-4 grid gap-2">
              <div className="text-sm text-cocoa-700">• Role: Developer / Designer</div>
              <div className="text-sm text-cocoa-700">• Tech: Unity / C# </div>
              <div className="text-sm text-cocoa-700">• Status: Prototype</div>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 rounded-xl bg-pink-200 hover:bg-pink-300">View Repo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
