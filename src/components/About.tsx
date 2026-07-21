'use client';

import { motion } from "framer-motion";
import Lanyard from "@/components/Lanyard";

export default function About() {
  return (
    <section className="relative z-20 bg-transparent py-32 px-4 md:px-12 overflow-hidden" id="about">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Section Heading & Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-4 block">
              About Me
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Building <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                Scalable Backend Systems
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Building scalable APIs, automation systems, and backend architectures that power reliable digital experiences.
            </p>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
  <h3 className="text-white text-xl font-semibold mb-3">
    Professional Profile
  </h3>

  <p className="text-gray-400 leading-relaxed">
    Software Engineer with experience building
    automation solutions, scalable REST APIs,
    and backend systems using Python, FastAPI,
    PostgreSQL, and Docker.
  </p>
</div>

            
          </motion.div>
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="lg:col-span-7 flex justify-end"
>
  <div className="relative w-full max-w-[520px] h-[650px]">
    <Lanyard frontImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" />
  </div>
</motion.div>
          

          
        </div>
      </div>
    </section>
  );
}
