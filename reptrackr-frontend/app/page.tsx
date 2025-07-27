"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Icon components
const WorkoutIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M4 19h16v2H4zM4 3h16v2H4zM21 11.5c0 1.933-1.567 3.5-3.5 3.5S14 13.433 14 11.5 15.567 8 17.5 8s3.5 1.567 3.5 3.5zm-2 0c0-.827-.673-1.5-1.5-1.5S16 10.673 16 11.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5zM6.5 8C8.433 8 10 9.567 10 11.5S8.433 15 6.5 15 3 13.433 3 11.5 4.567 8 6.5 8zm0 2c-.827 0-1.5.673-1.5 1.5S5.673 13 6.5 13 8 12.327 8 11.5 7.327 10 6.5 10z" />
  </svg>
);

const FormIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zM8 7v10H6V7h2zm6 0v10h-2V7h2zm6 0v10h-2V7h2z" />
  </svg>
);

const AnalyticsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" />
  </svg>
);

const ScheduleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" />
  </svg>
);

const NutritionIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20 10.9999V7.99994C20 7.44766 19.5523 6.99994 19 6.99994H5C4.44772 6.99994 4 7.44766 4 7.99994V10.9999H20ZM4 12.9999V19.9999C4 20.5522 4.44772 20.9999 5 20.9999H19C19.5523 20.9999 20 20.5522 20 19.9999V12.9999H4ZM2 7.99994C2 6.34309 3.34315 4.99994 5 4.99994H19C20.6569 4.99994 22 6.34309 22 7.99994V19.9999C22 21.6568 20.6569 22.9999 19 22.9999H5C3.34315 22.9999 2 21.6568 2 19.9999V7.99994ZM11 15.9999H13V17.9999H11V15.9999Z" />
  </svg>
);

const CommunityIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2418 14.3465C20.5 15.0986 22 17.2785 22 19.8C22 20.42 21.8433 21.0023 21.5611 21.5191C21.2789 22.036 20.8708 22.465 20.3791 22.7706L19.2139 21.1067C19.4358 20.9267 19.6124 20.6985 19.7264 20.4402C19.8404 20.1819 19.8882 19.9015 19.8657 19.6224C19.7553 18.4788 18.7886 17.5591 17.5 17.5C17.0669 17.5 16.6588 17.6199 16.3093 17.8322L15.2297 16.1409C16.1423 15.5396 17.1718 15.0827 18.2418 14.3465ZM17.5 11C18.8807 11 20 12.1193 20 13.5C20 14.8807 18.8807 16 17.5 16C16.1193 16 15 14.8807 15 13.5C15 12.1193 16.1193 11 17.5 11ZM17.5 13C17.2239 13 17 13.2239 17 13.5C17 13.7761 17.2239 14 17.5 14C17.7761 14 18 13.7761 18 13.5C18 13.2239 17.7761 13 17.5 13Z" />
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
