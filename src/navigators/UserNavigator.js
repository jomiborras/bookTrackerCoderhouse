import { StyleSheet, Platform } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
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
        name="User"
        component={UserScreen}
        options={{
          title: 'Usuario',
          headerTitleStyle: {
            color: COLORS.text
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default UserNavigator;

const styles = StyleSheet.create({});