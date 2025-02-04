"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { MovieGrid } from "@/components/MovieGrid";
import { Footer } from "@/components/Footer";
import { Movie } from "@/types";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState<Movie[] | null>(null);


  function handleBookmark(){
    console.log("Hello world");
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const url =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
        const {data: { results }} = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        });
        setMovies(results);
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
        <MovieGrid movies={movies} onBookmark={handleBookmark} />
      </main>
      <Footer />
    </div>
  );
}
