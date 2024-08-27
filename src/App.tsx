/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Home} from './views/home/index';
import Genre from './views/genre/Genre';
import Movie from './views/movie/Movie';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList, UserStackParamList} from './@types/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {ColorConstants, FontConstants} from './constants/StyleConstants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import User from './views/user/User';

const TabNavigator = createBottomTabNavigator();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const UserStack = createNativeStackNavigator<UserStackParamList>();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorConstants.background,
        },
        headerTintColor: ColorConstants.font,
        headerTitleStyle: {
          fontFamily: FontConstants.familyRegular,
          fontWeight: FontConstants.weightBold,
        },
      }}>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Movie Genres'}}
      />
      <MainStack.Screen
        name="Genre"
        component={Genre}
        options={{title: 'Movies'}}
      />
      <MainStack.Screen
        name="Movie"
        component={Movie}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </MainStack.Navigator>
  );
};

const UserStackScreen = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={User}
        options={{title: 'Favorite Movies'}}
      />
      <UserStack.Screen
        name="Movie"
        component={Movie}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </UserStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <TabNavigator.Screen
          name="User"
          component={UserStackScreen}
          options={{headerShown: false}}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
