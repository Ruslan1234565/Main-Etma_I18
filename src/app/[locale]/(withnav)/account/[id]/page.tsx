export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  
  const user = await response.json();

  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-gray-500">{user.phone}</p>
        <p className="text-gray-500">{user.website}</p>
        <p className="text-gray-500">{user.company.name}</p>
        <p className="text-gray-500">{user.company.catchPhrase}</p>
        <p className="text-gray-500">{user.company.bs}</p>
      </div>
    </div>
  );
}
