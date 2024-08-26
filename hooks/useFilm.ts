import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IFilm } from '../types/film';

const fetchFilms = async (search: string): Promise<IFilm[]> => {
  const { data } = await axios.get('https://swapi.dev/api/films/');
  const allFilms = data.results;

  // Filtrujemy filmy na podstawie wpisanego tytułu
  if (search) {
    return allFilms.filter((film: IFilm) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return allFilms;
};

export const useFilms = (search: string) => {
  return useQuery<IFilm[], Error>({
    queryKey: ['films', search], // Używamy search jako klucza zapytania
    queryFn: () => fetchFilms(search),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
