"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ------------------------------ Header ------------------------------  */}

      <header className="flex flex-row justify-evenly items-center p-[2vw]  w-full">
        {/* ------------------------------ Title ------------------------------  */}
        <h1 className="text-4xl font-bold px-8">RepTrackr</h1>
        {/* ------------------------------ Nav ------------------------------  */}

        <nav className="flex items-center gap-10 px-8 text-gray-300 font-medium">
          <Link
            href="/dashboard"
            className=" hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/workouts"
            className=" hover:text-white transition-colors"
          >
            Workouts
          </Link>
          <Link
            href="/progress"
            className=" hover:text-white transition-colors"
          >
            Progress
          </Link>
        </nav>
        {/* ------------------------------ Login/Logout ------------------------------  */}

        <div className="flex items-center gap-4 px-8">
          <button className="text-gray-300 hover:text-white text-base bg-transparent transition-colors">
            Login
          </button>

          <button className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium text-base rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
            Get Started
          </button>
        </div>
      </header>

      {/* ------------------------------ Body ------------------------------  */}
    </>
  );
}
