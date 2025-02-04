import { Movie } from '@/types'
import { MovieCard } from './MovieCard'

interface MovieGridProps {
  movies: Movie[] | null
  onBookmark: (id: number) => void
}

export function MovieGrid({ movies, onBookmark }: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imageUrl={movie.poster_path}
          rating={movie.vote_average}
          isBookmarked={false}
          onBookmark={() => onBookmark(movie.id)}
        />
      ))}
    </div>
  )
}

