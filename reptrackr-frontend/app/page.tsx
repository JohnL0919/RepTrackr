"use client";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-evenly items-center p-[2vw]  w-full">
        {/* ------------------------------ Title ------------------------------  */}
        <h1 className="text-4xl font-bold px-8">RepTrackr</h1>
        {/* ------------------------------ Nav ------------------------------  */}

        <nav className="flex items-center gap-10 px-8">
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-white transition-colors font-medium "
          >
            Dashboard
          </Link>
          <Link
            href="/workouts"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Workouts
          </Link>
          <Link
            href="/progress"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Progress
          </Link>
        </nav>
        {/* ------------------------------ Login/Logout ------------------------------  */}

        <div className="flex items-center gap-4 px-8">
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#94a3b8",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "transparent",
              },
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            disableElevation
            className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Get Started
          </Button>
        </div>
      </header>
    </>
  );
}
