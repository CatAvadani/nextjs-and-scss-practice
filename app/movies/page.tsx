'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchShows } from '../data/apiRequests';
import './page.scss';

export interface Movie {
  id: number;
  name: string;
  genres: string[];
  rating: { average: number };
  image?: { medium: string };
  summary: string;
}

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async (query: string) => {
      try {
        setLoading(true);
        const result = await fetchShows(query);
        setMovies(result);
      } catch (err: unknown) {
        setError('Failed to fetch movies');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getMovies('girls');
  }, []);

  if (loading) return <div className='main-container'>Loading...</div>;
  if (error) return <div className='main-container'>{error}</div>;
  console.log(movies);

  return (
    <div className='main-container'>
      <h1>Movies</h1>
      <div className='movie-list'>
        {movies.map((movie) => (
          <div key={movie.id} className='movie-item'>
            <Image
              width={200}
              height={200}
              className='movie-image'
              src={movie.image?.medium || '/default-image.jpg'}
              alt={movie.name}
            />
            <h2>{movie.name}</h2>
            <p>
              <strong>Genres:</strong> {movie.genres}
            </p>
            <div
              className='movie-summary'
              dangerouslySetInnerHTML={{ __html: movie.summary }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
