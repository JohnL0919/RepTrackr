"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, Typography } from "@mui/material";

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
        <motion.div className="flex flex-row gap-5">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Smart Workout Tracking
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Intuitive logging with intelligent suggestions, automatic
                progression tracking, and seamless gym floor experience.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                AI Form Analysis
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Upload workout videos for instant AI-powered form feedback and
                technique improvement recommendations.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Advanced Analytics
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Beautiful charts and insights that reveal patterns, predict
                plateaus, and optimize your training.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
