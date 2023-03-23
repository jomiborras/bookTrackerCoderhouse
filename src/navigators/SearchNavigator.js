import { StyleSheet, Platform } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        headerTitleStyle: {
          fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Buscar Libros',
          headerTitleStyle: {
            color: COLORS.text
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default SearchNavigator;

const styles = StyleSheet.create({});