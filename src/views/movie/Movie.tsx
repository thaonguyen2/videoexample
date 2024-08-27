import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IMovie} from '../../@types/IMovie';
import ScrollContainer from '../../containers/ScrollContainer';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/MainStack';
import {ColorConstants, FontConstants} from '../../constants/StyleConstants';
import {useUserStore} from '../../store/userStore';
import {shallow} from 'zustand/shallow';

type MovieProps = NativeStackScreenProps<MainStackParamList, 'Movie'>;

const Movie = (props: MovieProps) => {
  const [addFavById, favs, removeFav] = useUserStore(
    state => [state.addFavById, state.favs, state.removeFav],
    shallow,
  );
  const _isFav = favs[props.route.params.movie.id];
  return (
    <ScrollContainer>
      {props.route.params.movie && (
        <>
          <View>
            <Text style={styles.overview}>
              {props.route.params.movie.overview}
            </Text>
          </View>
          <Pressable
            style={styles.pressableContainer}
            onPress={
              _isFav
                ? () => removeFav(props.route.params.movie.id)
                : () => addFavById(props.route.params.movie.id)
            }>
            <Text style={styles.pressableText}>
              {_isFav ? '👎 Remove from favs' : '👍 Add to favs'}
            </Text>
          </Pressable>
        </>
      )}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  overview: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
  pressableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: ColorConstants.backgroundLight,
  },
  pressableText: {
    color: ColorConstants.font,
  },
});

export default Movie;
