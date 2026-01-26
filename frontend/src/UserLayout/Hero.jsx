import '@fontsource/pt-serif';
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="w-full mt-5 py-20 bg-white">
      {/* Container simplified: removed fixed height h-[500px] */}
      <div className="flex flex-col w-full justify-center items-center text-center px-4">
        
        {/* Fixed 'class' to 'className' */}
        <motion.h1
          className="bg-gradient-to-r from-blue-500 via-violet-500 to-rose-400 bg-clip-text text-transparent md:text-7xl text-4xl font-bold pb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: "'PT Serif', serif" }}
        >
          Task Distribution
        </motion.h1>

        <div className="max-w-2xl mt-5">
          <p
            className="text-gray-600 text-lg md:text-xl px-5"
            style={{ fontFamily: "'Zilla Slab', serif" }} // Removed semicolon inside string
          >
            A MERN stack app for secure admin login, agent management, and
            CSV-based task distribution.
          </p>
        </div>
      </div>
    </div>
  );
}