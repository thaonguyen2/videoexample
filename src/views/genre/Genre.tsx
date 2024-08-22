import React, {useEffect, useState} from 'react';
import {IGenre} from '../../@types/IGenre';
import {IMovie} from '../../@types/IMovie';
import {getMoviesByGenreId} from '../../services/movieService';
import ScrollContainer from '../../containers/ScrollContainer';
import Header from '../../components/Header';
import {Pressable, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/MainStack';
import {useUser} from '../../context/UserContext';
import {ColorConstants, SizeConstants} from '../../constants/StyleConstants';

type GenreProps = NativeStackScreenProps<MainStackParamList, 'Genre'>;

const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const {isFav} = useUser();

  useEffect(() => {
    if (typeof props.route.params.genre !== 'undefined') {
      setMovies(getMoviesByGenreId(props.route.params.genre.id));
    }
  }, [props.route.params.genre]);

  return (
    <ScrollContainer>
      {movies.map(movie => (
        <Pressable
          onPress={() => props.navigation.navigate('Movie', {movie})}
          key={movie.id}
          style={styles.movieTitleContainer}>
          {isFav(movie.id) ? (
            <Text style={styles.movieTitle}>{'👍 ' + movie.title}</Text>
          ) : (
            <Text style={styles.movieTitle}>{movie.title}</Text>
          )}
        </Pressable>
      ))}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  movieTitleContainer: {
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    flexDirection: 'row',
  },
  movieTitleFav: {
    marginRight: 4,
  },
  movieTitle: {
    fontSize: 14,
    marginBottom: 2,
    padding: 16,
    backgroundColor: '#eaeaea',
  },
});

export default Genre;
