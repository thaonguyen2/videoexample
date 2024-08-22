import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/MainStack';
import {IGenre} from '../../@types/IGenre';

export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

export type HomeViewProps = {
  genres: IGenre[];
  name: string;
  onGenrePress: (genre: IGenre) => void;
};
