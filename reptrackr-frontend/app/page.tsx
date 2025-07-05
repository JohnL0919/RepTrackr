import Link from "next/link";

export default function Home() {
  return (
    <header className="flex flex-row justify-between items-center p-[2vw] bg-black text-white">
      <h1 className="text-4xl font-bold">RepTrackr</h1>
      <div className="flex flex-row gap-5">
        <Link href={""}>Dashboard</Link>
        <Link href={""}>Workout</Link>
        <Link href={""}>Progress</Link>
      </div>
      <div className="flex flex-row gap-5">
        <button>Login</button>
        <button>Logout</button>
      </div>
    </header>
  );
}
