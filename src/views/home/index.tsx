import {useEffect, useState} from 'react';
import {HomeProps} from './Home.types';
import {IGenre} from '../../@types/IGenre';
import {getGenres} from '../../services/movieService';
import {HomeView} from './Home.view';

export const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  const name = 'Home';

  useEffect(() => {
    setGenres(getGenres());
  }, []);

  return (
    <HomeView
      genres={genres}
      name={name}
      onGenrePress={(genre: IGenre) =>
        props.navigation.navigate('Genre', {genre})
      }
    />
  );
};
