import { Movie } from '../movies/page';

// https://api.tvmaze.com/search/shows?q=girls
export async function fetchShows(query: string) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data.map((item: { show: Movie }) => item.show);
}
