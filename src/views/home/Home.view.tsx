import {Pressable, StyleSheet, Text} from 'react-native';
import {IGenre} from '../../@types/IGenre';
import {useEffect, useState} from 'react';
import ScrollContainer from '../../containers/ScrollContainer';
import Header from '../../components/Header';
import {getGenres} from '../../services/movieService';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/MainStack';
import {HomeViewProps} from './Home.types';
import styles from './Home.styles';

export const HomeView = (props: HomeViewProps) => {
  return (
    <ScrollContainer>
      {props.genres.map(genre => (
        <Pressable onPress={() => props.onGenrePress(genre)} key={genre.id}>
          <Text style={styles.genreTitle}>{genre.name}</Text>
        </Pressable>
      ))}
    </ScrollContainer>
  );
};
