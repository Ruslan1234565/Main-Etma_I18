import UserCard from "@/features/pages/account/components/user-card";
import UserCardProps from "@/features/pages/account/types/user-card";
import styles from "./style.module.css";

export default async function Account() {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await responce.json();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {users.map((user: UserCardProps) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
