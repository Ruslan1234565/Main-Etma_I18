"use client";

import { Button } from "@/components/ui/button";
import { useCounter } from "@/features/store/use-counter";

export default function Reviews() {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className=" container mx-auto flex h-screen items-center justify-center gap-2">
      <Button onClick={decrement}>-</Button>
      <span>{counter}</span>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
