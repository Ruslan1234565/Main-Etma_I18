"use client";

import { Button } from "@/components/ui/button";
import { Episode } from "@/features/interface/journal";
import { useCardStore } from "@/features/store/card-store";
import { ShoppingCart } from "lucide-react";

export default function AddToCardButton({ data }: { data: Episode }) {

    const { addItem } = useCardStore();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(data);
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute bottom-4 right-4 cursor-pointer"
      onClick={handleAddToCart}
    >
      <ShoppingCart className="h-4 w-4" />
    </Button>
  );
}
