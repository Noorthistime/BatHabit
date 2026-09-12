import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">
          BatHabit
        </h1>
        <p className="text-xl text-muted-foreground">
          Transform your real-world habits into an engaging RPG progression system.
          Level up, earn rewards, and become the best version of yourself in a strict Gothic universe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/auth">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Enter The Gate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
