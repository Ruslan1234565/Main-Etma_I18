import { Episode } from "@/features/interface/journal";
import Link from "next/link";

interface JournalIdProps {
  params: Promise<{ id: string }>;
}

export default async function JournalId({ params }: JournalIdProps) {
  try {
    const { id } = await params;
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch episode');
    }
    
    const episode: Episode = await response.json();

    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/journal" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to Episodes
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6">{episode.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Episode</h3>
                <p className="text-xl">{episode.episode}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Air Date</h3>
                <p className="text-xl">{episode.air_date}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {episode.url && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">URL</h3>
                  <a 
                    href={episode.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    {episode.url}
                  </a>
                </div>
              )}
              
              {episode.created && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Created</h3>
                  <p className="text-xl">
                    {new Date(episode.created).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {episode.characters && episode.characters.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Characters</h3>
              <p className="text-gray-600 mb-2">
                This episode features {episode.characters.length} characters.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  Character details can be fetched from their individual URLs
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch episode:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/journal" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to Episodes
        </Link>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Error</h1>
          <p className="text-red-600">
            Failed to load episode details. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}