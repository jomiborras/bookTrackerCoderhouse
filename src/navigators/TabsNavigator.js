import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import COLORS from '../constants/colors';

import BookNavigator from './BooksNavigator';
import RecommendedNavigator from './RecommendedNavigator';
import SearchNavigator from './SearchNavigator';
import UserNavigator from './UserNavigator';


const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen name="Book-tab" component={BookNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="book" size={24} color={focused ? '#323232' : '#748C94'} />
              <Text style={{ color: focused ? '#323232' : '#748C94' }}>Mis Libros</Text>
            </View>
          )
        }}

      />

      <BottomTabs.Screen name="Tracker-tab" component={RecommendedNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="bookmark" size={24} color={focused ? '#323232' : '#748C94'} />
              <Text style={{ color: focused ? '#323232' : '#748C94' }}>Tracker</Text>
            </View>
          )
        }}

      />

      <BottomTabs.Screen name="Search-tab" component={SearchNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="search" size={24} color={focused ? '#323232' : '#748C94'} />
              <Text style={{ color: focused ? '#323232' : '#748C94' }}>Buscar</Text>
            </View>
          )
        }}

      />

      <BottomTabs.Screen name="Config-tab" component={UserNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons name="person" size={24} color={focused ? '#323232' : '#748C94'} />
              <Text style={{ color: focused ? '#323232' : '#748C94' }}>Yo</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFCF09',
    shadowColor: '#323232',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    position: 'absolute',
    height: 90
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})