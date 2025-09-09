"use client";

import { Button } from "@/components/ui/button";
import { useCounter } from "@/features/store/use-counter";

export default function Support() {
    const { counter, increment, decrement } = useCounter();

  return (
    <div className="container mx-auto flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Support</h1>
      <div className="flex items-center gap-2">

      <Button onClick={decrement}>-</Button>
      <span>{counter}</span>
      <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
}