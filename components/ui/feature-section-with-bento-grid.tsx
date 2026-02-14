import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Smartphone, Globe, Activity, Shield, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

function TypeTester() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.15 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
  );
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"];

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className={`grid ${layouts[layout]} gap-2 w-full max-w-[140px] h-full`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-blue-600/10 border border-blue-600/5 rounded-lg h-5 w-full"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function SpeedIndicator() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

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
    </div>
  );
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2]);
  return (
    <div className="flex items-center justify-center h-full relative">
      <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center z-10 shadow-sm">
        <Globe className="w-8 h-8 text-gray-900" />
      </div>
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-20 h-20 border-2 border-blue-400/30 rounded-full"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 2.8, opacity: 0 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: pulse * 1.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

export function Feature() {
  return (
    <section id="features" className="bg-[#F5F5F0] py-24 md:py-32 flex flex-col items-center justify-center">
      <div className="max-w-[1800px] w-full px-4 md:px-8">
        <div className="mb-20 text-center">
           <h2 className="text-4xl md:text-7xl font-black font-display tracking-tighter mb-6 text-gray-900">
             Powerful Infrastructure
           </h2>
           <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
             A full range of solutions to effectively enhance your learning trajectory with precision.
           </p>
        </div>

        {/* 6-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[220px]">
          
          {/* 1. Mastery - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="flex-1">
              <TypeTester />
            </div>
            <div className="mt-8">
              <h3 className="font-display text-2xl text-gray-900 font-black">Mastery Focus</h3>
              <p className="text-gray-500 text-sm font-medium mt-2">Deep learning infrastructure designed for cognitive retention.</p>
            </div>
          </motion.div>

          {/* 2. Layouts - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm"
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
              <h3 className="font-display text-xl text-gray-900 font-black">Flexible Grids</h3>
              <p className="text-gray-400 text-xs font-medium mt-1">Adaptive interfaces for every device.</p>
            </div>
          </motion.div>

          {/* 3. Global - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <GlobalNetwork />
            </div>
            <div className="mt-auto">
              <h3 className="font-display text-2xl text-gray-900 flex items-center gap-3 font-black">
                <Globe className="w-6 h-6 text-blue-600" />
                Global Access
              </h3>
              <p className="text-gray-500 text-sm font-medium mt-2">Lightning fast learning worldwide with edge computing locations.</p>
            </div>
          </motion.div>

          {/* 4. Speed - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm"
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
              <h3 className="font-display text-xl text-gray-900 font-black">Velocity</h3>
              <p className="text-gray-400 text-xs font-medium mt-1">Learn at your own pace, faster.</p>
            </div>
          </motion.div>

          {/* 5. Security - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col hover:border-gray-200 transition-all cursor-pointer overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 flex items-center justify-center gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-gray-300" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="font-display text-xl text-gray-900 flex items-center gap-3 font-black">
                <Shield className="w-5 h-5 text-emerald-500" />
                Verified Skills
              </h3>
              <p className="text-gray-500 text-sm font-medium mt-2">Blockchain-backed verification for all mastered certificates.</p>
            </div>
          </motion.div>

          {/* 6. Mobile - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-gray-900 border border-gray-800 rounded-[2.5rem] p-8 flex flex-col hover:bg-gray-800 transition-all cursor-pointer overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-white opacity-80" />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-xl text-white font-black flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Mobile Ready
              </h3>
              <p className="text-gray-400 text-sm font-medium mt-2">Seamlessly continue your learning journey on any mobile device.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
