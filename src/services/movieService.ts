import {IGenre} from '../@types/IGenre';
import {IMovie} from '../@types/IMovie';

const genres: IGenre[] = require('../../assets/data/genres.json');
const movies: IMovie[] = require('../../assets/data/movies.json');

const getGenres = (): IGenre[] => {
  return genres;
};

const getMovies = (): IMovie[] => {
  return movies;
};

const getMoviesByGenreId = (genreId: number): IMovie[] => {
  return movies.filter(movie => movie.genre_ids.includes(genreId));
};

const getMovieById = (id: number): IMovie | undefined => {
  return movies.find(movie => movie.id === id);
};

export {getGenres, getMovies, getMoviesByGenreId, getMovieById};
