import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Smartphone, Globe, ArrowUpRight, Zap, Star, Layout, BookOpen } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

function TypeTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.15 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-display text-7xl md:text-9xl text-gray-900 font-black tracking-tighter"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        A+
      </motion.span>
    </div>
  )
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"]

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className={`grid ${layouts[layout]} gap-2 w-full max-w-[160px] h-full`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3, 4, 5, 6].slice(0, layout === 1 ? 6 : 3).map((i) => (
          <motion.div
            key={i}
            className="bg-blue-600/10 border border-blue-600/5 rounded-lg h-6 w-full"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SpeedIndicator() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="h-10 flex items-center justify-center overflow-hidden relative w-full">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-8 w-24 bg-gray-100 rounded-full"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              exit={{ opacity: 0, y: -20, position: 'absolute' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tighter"
            >
              120%
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Velocity Rate</span>
      <div className="w-full max-w-[140px] h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: loading ? 0 : "85%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  )
}

function SecurityBadge() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setShields(prev => {
        const nextIndex = prev.findIndex(s => !s.active)
        if (nextIndex === -1) {
          return prev.map(() => ({ id: Math.random(), active: false }))
        }
        return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s)
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-3">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors ${
            shield.active ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/20' : 'bg-white border-gray-100'
          }`}
          animate={{ scale: shield.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Lock className={`w-6 h-6 ${shield.active ? 'text-white' : 'text-gray-300'}`} />
        </motion.div>
      ))}
    </div>
  )
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2, 3])

  return (
    <div className="flex items-center justify-center h-full relative">
      <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center z-10 shadow-sm">
        <Globe className="w-10 h-10 text-gray-900" />
      </div>
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-24 h-24 border-2 border-blue-400/30 rounded-full"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: pulse * 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

const Dashboard: React.FC = () => {
  return (
    <div className="pt-28 pb-48 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-5xl font-black font-display text-gray-900 tracking-tight mb-3">
            Dashboard
          </h1>
          <p className="text-gray-500 font-medium text-xl">
            Anna, your AI has updated your skill matrix for today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-xl shadow-gray-900/10">
            Start New Course <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[220px]">
        
        {/* 1. Mastery Level - Tall (2x2) */}
        <motion.div
          className="md:col-span-2 md:row-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex-1">
            <TypeTester />
          </div>
          <div className="mt-8">
            <h3 className="font-display text-2xl text-gray-900 font-black">Mastery Level</h3>
            <p className="text-gray-500 text-sm font-medium mt-2">Overall cognitive retention score based on recent performance.</p>
          </div>
        </motion.div>

        {/* 2. Layouts (Activity) - Standard (2x1) */}
        <motion.div
          className="md:col-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 0.98 }}
        >
          <div className="flex-1">
            <LayoutAnimation />
          </div>
          <div className="mt-4">
            <h3 className="font-display text-xl text-gray-900 font-black">Weekly Activity</h3>
            <p className="text-gray-400 text-xs font-medium mt-1">Modules mastered this week.</p>
          </div>
        </motion.div>

        {/* 3. Global Rank - Tall (2x2) */}
        <motion.div
          className="md:col-span-2 md:row-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex-1 flex items-center justify-center">
            <GlobalNetwork />
          </div>
          <div className="mt-auto relative z-20">
            <h3 className="font-display text-2xl text-gray-900 flex items-center gap-3 font-black">
              Top 2%
            </h3>
            <p className="text-gray-500 text-sm font-medium mt-2">Global ranking across 50,000+ active platform learners.</p>
          </div>
        </motion.div>

        {/* 4. Velocity - Standard (2x1) */}
        <motion.div
          className="md:col-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 0.98 }}
        >
          <div className="flex-1">
            <SpeedIndicator />
          </div>
          <div className="mt-4">
            <h3 className="font-display text-xl text-gray-900 font-black">Learning Velocity</h3>
            <p className="text-gray-400 text-xs font-medium mt-1">Growth rate compared to last month.</p>
          </div>
        </motion.div>

        {/* 5. Skill Verification - Wide (3x1) */}
        <motion.div
          className="md:col-span-3 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 0.98 }}
        >
          <div className="flex-1">
            <SecurityBadge />
          </div>
          <div className="mt-4">
            <h3 className="font-display text-xl text-gray-900 flex items-center gap-3 font-black">
              Verification Status
            </h3>
            <p className="text-gray-500 text-sm font-medium mt-2">All course certificates are blockchain-verified for employment.</p>
          </div>
        </motion.div>

        {/* 6. Anyware Access - Wide (3x1) */}
        <motion.div
          className="md:col-span-3 bg-gray-900 border border-gray-800 rounded-[2.5rem] p-10 flex flex-col hover:bg-gray-800 transition-all cursor-pointer overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 0.98 }}
        >
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Smartphone className="w-20 h-20 text-white opacity-80" />
            </motion.div>
          </div>
          <div className="mt-4">
            <h3 className="font-display text-xl text-white font-black">Learning Sessions</h3>
            <p className="text-gray-400 text-sm font-medium mt-2">Continue your current React Patterns session on mobile.</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Dashboard;
