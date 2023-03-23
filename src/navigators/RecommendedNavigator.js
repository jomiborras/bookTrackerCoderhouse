import { StyleSheet, Platform } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecommendedScreen from '../screens/RecommendedScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

const RecommendedNavigator = () => {
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
        name="Recommended"
        component={RecommendedScreen}
        options={{
          title: 'Recomendados',
          headerTitleStyle: {
            color: COLORS.text
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default RecommendedNavigator;

const styles = StyleSheet.create({});