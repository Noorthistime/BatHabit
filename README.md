# BatHabit

A Life RPG web application that transforms real-world habits into an engaging RPG progression system featuring non-linear leveling, attributes, streaks, a virtual economy, and a strict Gothic visual identity.

## Architecture
- **Frontend**: React, Vite, Tailwind CSS v4, Framer Motion
- **Backend**: Node.js, Express, Prisma
- **Database**: MySQL

## Prerequisites
- Node.js (v18+)
- MySQL Server running locally (or remotely)

## Setup Instructions

### 1. Database Setup
1. Create a MySQL database named `bathabit`.
2. Navigate to the `backend` folder and copy the `.env.example` to `.env`:
   ```bash
   cd backend
   cp .env.example .env
   ```
3. Update `DATABASE_URL` in your new `.env` file with your actual MySQL credentials.
4. Push the schema to your database:
   ```bash
   npx prisma db push
   ```

### 2. Running the Backend
```bash
cd backend
npm install
npm run dev
```

### 3. Running the Frontend
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

## Features
- **The Sanctum**: View your current Level, XP, Attributes, Streak, and Treasury.
- **The Questbook & Forge**: Create and complete quests of varying difficulties to earn XP and Coins.
- **The Night Market & Vault**: Spend Coins on titles and avatars, then equip them in your Vault.
- **Gothic Design System**: Strict adherence to the BatHabit dark and light theme palettes.
