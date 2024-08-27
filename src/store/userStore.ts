import {create} from 'zustand';
import {IMovie} from '../@types/IMovie';
import {persist} from 'zustand/middleware';
import {IUser} from '../@types/iUser';
import {getMovieById} from '../services/movieService';

type UserStoreFunctions = {
  addFav: (fav: IMovie) => void;
  addFavById: (favId: number) => void;
  removeFav: (favId: number) => void;
};

export const useUserStore = create<IUser & UserStoreFunctions>((set, get) => ({
  name: 'John',
  favs: {},
  addFav: (fav: IMovie) => {
    const _favs = {...get().favs};
    if (!_favs[fav.id]) {
      _favs[fav.id] = fav;
      set({favs: _favs});
    }
  },
  addFavById: async (favId: number) => {
    const _favs = {...get().favs};
    if (!_favs[favId]) {
      const movie = await getMovieById(favId);
      if (!movie) {
        return;
      }
      _favs[favId] = movie;
      set({favs: _favs});
    }
  },
  removeFav(favId: number) {
    const _favs = {...get().favs};
    if (_favs[favId]) {
      delete _favs[favId];
      set({favs: _favs});
    }
  },
}));
