import Image from 'next/image'
import { Star, BookmarkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface MovieCardProps {
  title: string
  imageUrl: string
  rating: number
  isBookmarked: boolean
  onBookmark: () => void
}

export function MovieCard({ title, imageUrl, rating, isBookmarked, onBookmark }: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <Image src={imageUrl} alt={title} width={300} height={450} className="w-full h-auto" />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-75"
          onClick={onBookmark}
        >
          <BookmarkIcon className={`h-5 w-5 ${isBookmarked ? 'text-yellow-400' : 'text-white'}`} />
        </Button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <div className="flex items-center mt-2">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="text-white">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

