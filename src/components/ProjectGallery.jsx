import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  { id:1, title:'Cozy World Demo', video:'/videos/demo1.mp4', description:'A tiny cozy exploration game.' },
  { id:2, title:'Pastel Puzzle', video:'/videos/demo2.mp4', description:'Relaxing puzzle mechanics.' },
  { id:3, title:'Endless Runner', video:'/videos/demo3.mp4', description:'Looping runner with soft visuals.' },
]

export default function ProjectGallery(){
  const [selected, setSelected] = useState(null)
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="relative card-cozy overflow-hidden bg-white">
            <div className="relative group">
              <video
                src={p.video}
                muted
                loop
                className="w-full h-44 object-cover preview-video"
                onMouseOver={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
              />
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-cocoa-700 mt-1">Click to view details</p>
              </div>
              <button
                className="absolute inset-0 w-full h-full bg-transparent"
                onClick={() => setSelected(p)}
                aria-label={'Open '+p.title}
              />
            </div>
          </article>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
