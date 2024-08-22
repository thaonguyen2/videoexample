import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserStackParamList} from '../../@types/MainStack';
import {useUser} from '../../context/UserContext';
import ScrollContainer from '../../containers/ScrollContainer';

type UserProps = NativeStackScreenProps<UserStackParamList, 'User'>;

const User = (props: UserProps) => {
  const {getFavsAsArray} = useUser();
  const _favsArray = getFavsAsArray();
  return (
    <ScrollContainer>
      {_favsArray.map(movie => {
        return (
          <Pressable
            onPress={() => props.navigation.navigate('Movie', {movie: movie})}
            key={movie.id}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});

export default User;
