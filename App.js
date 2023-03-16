import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StyleSheet, SafeAreaView } from 'react-native';
import BookNavigator from './src/navigators/BookNavigator';
import LoadingScreen from './src/screens/LoadingScreen';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  if (isLoading) {
    return <LoadingScreen />
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <BookNavigator />
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
