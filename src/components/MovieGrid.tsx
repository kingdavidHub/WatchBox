import { MovieCard } from './MovieCard'

interface Movie {
  id: number
  title: string
  imageUrl: string
  rating: number
  isBookmarked: boolean
}

interface MovieGridProps {
  movies: Movie[]
  onBookmark: (id: number) => void
}

export function MovieGrid({ movies, onBookmark }: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imageUrl={movie.imageUrl}
          rating={movie.rating}
          isBookmarked={movie.isBookmarked}
          onBookmark={() => onBookmark(movie.id)}
        />
      ))}
    </div>
  )
}

