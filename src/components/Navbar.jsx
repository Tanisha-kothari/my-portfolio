import React from 'react'

export default function Navbar(){
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-peach-100 rounded-b-2xl shadow-soft sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-bow shadow-md">🧸</div>
        <div>
          <h1 className="text-lg font-bold">Tanisha Kothari</h1>
          <div className="text-xs text-cocoa-700">Portfolio</div>
        </div>
      </div>
      <div className="text-sm text-cocoa-700 hidden sm:block">Games • Unity • Figma • Unreal </div>
    </nav>
  )
}
