"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { MovieGrid } from "@/components/MovieGrid";
import { Footer } from "@/components/Footer";
import { MovieProps } from "@/types";
import axios from "axios";

// const initialMovies = [
//   {
//     id: 1,
//     title: "Inception",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.8,
//     isBookmarked: false,
//   },
//   {
//     id: 2,
//     title: "The Shawshank Redemption",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 9.3,
//     isBookmarked: true,
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 9.0,
//     isBookmarked: false,
//   },
//   {
//     id: 4,
//     title: "Pulp Fiction",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.9,
//     isBookmarked: false,
//   },
//   {
//     id: 5,
//     title: "Forrest Gump",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.8,
//     isBookmarked: true,
//   },
//   {
//     id: 6,
//     title: "The Matrix",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.7,
//     isBookmarked: false,
//   },
//   {
//     id: 7,
//     title: "Goodfellas",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.7,
//     isBookmarked: false,
//   },
//   {
//     id: 8,
//     title: "The Silence of the Lambs",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.6,
//     isBookmarked: false,
//   },
//   {
//     id: 9,
//     title: "Se7en",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.6,
//     isBookmarked: true,
//   },
//   {
//     id: 10,
//     title: "The Usual Suspects",
//     imageUrl: "/placeholder.svg?height=450&width=300",
//     rating: 8.5,
//     isBookmarked: false,
//   },
// ];

export default function Home() {
  const [movies, setMovies] = useState<MovieProps[] | null>(null);

  const handleBookmark = (id: number) => {
    // setMovies(
    //   movies.map((movie) =>
    //     movie.id === id
    //       ? { ...movie, isBookmarked: !movie.isBookmarked }
    //       : movie
    //   )
    // );
  };


  useEffect(() => {
    const fetchMovies = async () => {
      try{
        // Fetch Movies From IMDB API
        const url =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
        const {data: { results }} = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        });
        setMovies(res.data.results);
      }catch(error){
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-grow">
        <h2 className="text-2xl font-bold text-white p-4">Trending Movies</h2>
        {/* <MovieGrid movies={movies} onBookmark={handleBookmark} /> */}
      </main>
      <Footer />
    </div>
  );
}
