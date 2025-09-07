import JournalCard from "@/features/pages/journal/componets/jounal-card";
import Link from "next/link";
import { Episode } from "@/features/interface/journal";

interface ApiResponse {
  results: Episode[];
}

export default async function Journal() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    
    const data: ApiResponse = await response.json();
    console.log(data.results);
    


    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Journal Episodes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.results.map((episode: Episode) => (
            <Link href={`/journal/${episode.id}`} key={episode.id}>
              <JournalCard id={episode.id} />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch episodes:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Journal Episodes</h1>
        <p className="text-red-500">
          Error loading episodes. Please try again later.
        </p>
      </div>
    );
  }
}
