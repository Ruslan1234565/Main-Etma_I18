import Link from "next/link";
import UserCardProps from "../types/user-card";

export default function UserCard({ user }: { user: UserCardProps }) {
  return (
    <Link href={`/account/${user.id}`}>
      <div className="border-2 border-gray-300 rounded-md p-4">
        <div className="flex flex-col gap-2 text-center">
          <div className="rounded-full w-20 h-20 bg-gray-200 mx-auto flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.phone}</p>
        </div>
      </div>
    </Link>
  );
}
