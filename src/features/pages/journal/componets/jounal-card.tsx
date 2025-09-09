
import { Episode } from "@/features/interface/journal";
import AddToCardButton from "@/features/shared/add-to-card-button";




interface JournalCardProps {
  id: number;
}

export default async function JournalCard({ id }: JournalCardProps) {
 
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch episode');
    }
    
    const data: Episode = await response.json();

    return (
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer relative">
        <h3 className="font-bold text-lg mb-2">{data.name}</h3>
        <p className="text-gray-600 mb-1">Air Date: {data.air_date}</p>
        <p className="text-gray-600 mb-1">Episode: {data.episode}</p>
        {data.url && (
          <p className="text-blue-500 text-sm truncate">URL: {data.url}</p>
        )}
        {data.created && (
          <p className="text-gray-500 text-xs mt-2">
            Created: {new Date(data.created).toLocaleDateString()}
          </p>
        )}
        <AddToCardButton data={data} />
      </div>
    );
  } catch (error) {
    console.error(`Failed to fetch episode ${id}:`, error);
    return (
      <div className="border rounded-lg p-4 bg-red-50">
        <p className="text-red-500">Error loading episode {id}</p>
      </div>
    );
  }
}