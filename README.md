# 🏋️ Gym Progress Tracker + Form Check (Full-Stack App)

Track workouts, upload form-check videos, and analyze your training over time.  
Built with Next.js, Firebase, and TypeScript — designed to help you learn full-stack development while building something real.

---

## 🚀 Features

| Feature                          | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| 🗓 Log Workouts                  | Add exercises, sets, reps, and weight                                      |
| 🎥 Video Uploads                | Upload short form-check videos to Firebase Storage                         |
| 🔐 Auth                         | Firebase Auth for secure, user-specific data                               |
| 📊 Progress View                | See your workout history and track gains over time                         |
| 🧠 (Coming Soon) AI Analysis    | Get form feedback or rep evaluation via OpenAI API                         |
| 📋 Workout Templates (Planned) | Save common routines for fast reuse                                        |
| 🏆 PR Tracking (Planned)        | Track and highlight personal bests                                         |

---

## 🧱 Tech Stack

| Layer        | Stack / Tools                                                                 |
|--------------|--------------------------------------------------------------------------------|
| Frontend     | [Next.js](https://nextjs.org/) (TypeScript), [Tailwind CSS](https://tailwindcss.com/), [React Hook Form](https://react-hook-form.com/), [Framer Motion](https://www.framer.com/motion/) |
| Backend/API  | Next.js API routes or [Firebase Functions](https://firebase.google.com/docs/functions), [Zod](https://zod.dev/) for input validation |
| Auth         | [Firebase Auth](https://firebase.google.com/products/auth)                    |
| Database     | [Firestore](https://firebase.google.com/products/firestore) (scoped by user ID)|
| File Storage | [Firebase Storage](https://firebase.google.com/products/storage) for videos   |
| Deployment   | [Vercel](https://vercel.com/) (frontend), Firebase backend                    |
| Optional AI  | [OpenAI API](https://platform.openai.com/) for video analysis (coming soon)   |

---

## ✅ Setup Instructions

### 1. Clone the repo

git clone https://github.com/your-username/RepTrackr.git \
cd gym-progress-tracker

---
### 2. Install Dependencies
npm install \
or \
yarn install
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

