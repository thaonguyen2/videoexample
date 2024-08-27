import {useEffect, useState} from 'react';
import {HomeProps} from './Home.types';
import {IGenre} from '../../@types/IGenre';
import {getGenres} from '../../services/movieService';
import {HomeView} from './Home.view';
import {useUserStore} from '../../store/userStore';

export const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  const name = useUserStore(state => state.name);

  useEffect(() => {
    const fetchData = async () => {
      setGenres(await getGenres());
    };
    fetchData();
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
