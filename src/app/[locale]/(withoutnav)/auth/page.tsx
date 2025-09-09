import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Auth() {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold">Auth page</h1>
        <div className="flex flex-col gap-4">
          <Button variant="outline" className="w-full cursor-pointer">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button variant="outline" className="w-full cursor-pointer">
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
