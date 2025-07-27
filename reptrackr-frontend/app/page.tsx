"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* ------------------------------------------------- Header -----------------------------------------------------  */}
      <header className="flex flex-row justify-evenly items-center p-[2vw] w-full fixed top-0 left-0 right-0 bg-black z-50">
        {/* ----------------------- Title -------------------  */}
        <h1 className="text-4xl font-bold px-8">RepTrackr</h1>
        {/* ------------------------ Nav --------------------  */}

        <nav className="flex items-center gap-10 px-8 text-gray-300 font-medium">
          <Link
            href="/dashboard"
            className="hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link href="/workouts" className="hover:text-white transition-colors">
            Workouts
          </Link>
          <Link href="/progress" className="hover:text-white transition-colors">
            Progress
          </Link>
        </nav>
        {/* -------------------- Login/Logout ----------------  */}

        <div className="flex items-center gap-4 px-8">
          <button className="text-gray-300 hover:text-white text-base bg-transparent transition-colors">
            Login
          </button>

          <button className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium text-base rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
            Get Started
          </button>
        </div>
      </header>
      {/* ------------------------------------------------ Body Content ---------------------------------------------------  */}
      <div className="flex flex-col items-center text-center p-[5vh] relative h-[90vh] w-full justify-center">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-indigo-600/40 to-purple-600/60 rounded-3xl blur-2xl" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl blur-lg"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* ------------------------ Headings 1------------------  */}
        <motion.div
          className="pt-[70vh] text-7xl font-bold px-8 flex  pb-[3vh] relative z-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            textShadow: "0 0 8px rgba(255,255,255,0.5)",
          }}
        >
          Elevate Your Fitness Journey
        </motion.div>

        <motion.span
          className="text-xl w-[40vw] relative z-10 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transform your workouts with intelligent tracking, AI-powered form
          analysis, and beautiful progress visualization. Built for athletes who
          demand excellence.
        </motion.span>

        <motion.div
          className="flex flex-row gap-6 mt-8 relative justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium text-base rounded-xl px-8 py-3 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("/dashboard", "_self")}
          >
            Start Your Free Trial
          </motion.button>

          <motion.button
            className="border border-white/30 bg-black/20 backdrop-blur-sm text-white font-medium text-base rounded-xl px-8 py-3 shadow-md hover:shadow-lg hover:bg-white/10 transition-all duration-200 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("/workouts", "_self")}
          >
            Watch a Demo{" "}
          </motion.button>
        </motion.div>
        {/* ------------------------ Headings 2------------------  */}
        <motion.div
          className="pt-[30vh] text-6xl font-bold px-8 flex pb-[5vh] relative z-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            textShadow: "0 0 8px rgba(255,255,255,0.5)",
          }}
        >
          Everything You Need
        </motion.div>

        <motion.span
          className="text-xl w-[40vw] relative z-10 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transform your workouts with intelligent tracking, AI-powered form
          analysis, and beautiful progress visualization. Built for athletes who
          demand excellence.
        </motion.span>
        {/* ------------------------ Feature Cards------------------  */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 pt-16 w-full max-w-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* First Row */}
          <motion.div
            className="bg-gradient-to-br from-indigo-900/30 to-indigo-700/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(76, 29, 149, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-indigo-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">
              Smart Workout Tracking
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Intuitive logging with intelligent suggestions, automatic
              progression tracking, and seamless gym floor experience.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(126, 34, 206, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-purple-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">
              AI Form Analysis
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Upload workout videos for instant AI-powered form feedback and
              technique improvement recommendations.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-pink-900/30 to-pink-700/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(190, 24, 93, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-pink-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">
              Advanced Analytics
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Beautiful charts and insights that reveal patterns, predict
              plateaus, and optimize your training.
            </p>
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(30, 64, 175, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-blue-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">
              Workout Scheduling
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Plan and schedule your workouts with smart reminders and calendar
              integration to maintain consistency and track adherence.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-900/30 to-green-700/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(6, 78, 59, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-green-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">
              Nutrition Tracking
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Log meals, track macros, and monitor caloric intake with
              customizable nutrition plans to fuel optimal performance and
              recovery.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-amber-900/30 to-amber-700/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(146, 64, 14, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="text-amber-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">
              Community & Sharing
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Connect with fitness enthusiasts, share achievements, participate
              in challenges, and get motivated by a supportive community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
