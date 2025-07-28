"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Icon components
const WorkoutIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09"
    />
  </svg>
);

const FormIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>
);

const AnalyticsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
  </svg>
);

const ScheduleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    />
  </svg>
);

const NutritionIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
    />
  </svg>
);

const CommunityIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);

const features = [
  {
    title: "Smart Workout Tracking",
    description:
      "Intuitive logging with intelligent suggestions, automatic progression tracking, and seamless gym floor experience.",
    Icon: WorkoutIcon,
    gradient: "from-indigo-900/30 to-indigo-700/20",
    iconColor: "text-indigo-400",
    hoverShadow: "rgba(76, 29, 149, 0.3)",
    delay: 0.8,
  },
  {
    title: "AI Form Analysis",
    description:
      "Upload workout videos for instant AI-powered form feedback and technique improvement recommendations.",
    Icon: FormIcon,
    gradient: "from-purple-900/30 to-purple-700/20",
    iconColor: "text-purple-400",
    hoverShadow: "rgba(126, 34, 206, 0.3)",
    delay: 1.0,
  },
  {
    title: "Advanced Analytics",
    description:
      "Beautiful charts and insights that reveal patterns, predict plateaus, and optimize your training.",
    Icon: AnalyticsIcon,
    gradient: "from-pink-900/30 to-pink-700/20",
    iconColor: "text-pink-400",
    hoverShadow: "rgba(190, 24, 93, 0.3)",
    delay: 1.2,
  },
  {
    title: "Workout Scheduling",
    description:
      "Plan and schedule your workouts with smart reminders and calendar integration to maintain consistency and track adherence.",
    Icon: ScheduleIcon,
    gradient: "from-blue-900/30 to-blue-700/20",
    iconColor: "text-blue-400",
    hoverShadow: "rgba(30, 64, 175, 0.3)",
    delay: 1.3,
  },
  {
    title: "Nutrition Tracking",
    description:
      "Log meals, track macros, and monitor caloric intake with customizable nutrition plans to fuel optimal performance and recovery.",
    Icon: NutritionIcon,
    gradient: "from-green-900/30 to-green-700/20",
    iconColor: "text-green-400",
    hoverShadow: "rgba(6, 78, 59, 0.3)",
    delay: 1.4,
  },
  {
    title: "Community & Sharing",
    description:
      "Connect with fitness enthusiasts, share achievements, participate in challenges, and get motivated by a supportive community.",
    Icon: CommunityIcon,
    gradient: "from-amber-900/30 to-amber-700/20",
    iconColor: "text-amber-400",
    hoverShadow: "rgba(146, 64, 14, 0.3)",
    delay: 1.5,
  },
];
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* ------------------------------------------------- Header -----------------------------------------------------  */}
      <header className="flex flex-row justify-evenly items-center p-[2vw] w-full  fixed top-0 left-0 right-0 bg-black z-50">
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
          className="pt-[120vh] text-7xl font-bold px-8 flex  pb-[3vh] relative z-10 text-white"
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
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              className={`bg-gradient-to-br ${feat.gradient} backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl border border-white/10 flex flex-col w-80`}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: feat.delay }}
              whileHover={{
                y: -5,
                boxShadow: `0 20px 25px -5px ${feat.hoverShadow}`,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className={`${feat.iconColor} mb-2`}
                whileHover={{ scale: 1.05 }}
              >
                <feat.Icon className="w-10 h-10" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
