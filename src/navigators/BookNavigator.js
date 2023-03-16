import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../screens/MainScreen';
import BookListScreen from '../screens/BookListScreen';
import BookScreen from '../screens/BookScreen';

import { titleStyle } from '../constants/TextStyles';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={MainScreen}
          options={{
            title: "Book Tracker",
            headerStyle: {
              backgroundColor: '#FFCF09',
              ...titleStyle,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Lista" component={BookListScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

