import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-peach-50">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-28 h-28 rounded-2xl flex items-center justify-center bg-pink-100 shadow-cozy"
      >
        <div style={{fontSize:36}}>🧸</div>
      </motion.div>
    </div>
  )
}
