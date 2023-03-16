import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import * as SplashScreen from 'expo-splash-screen';
import Title from '../components/Title';
import Colors from '../constants/Colors.js';
import { titleStyle } from '../constants/TextStyles';

SplashScreen.preventAutoHideAsync();

const LoadingScreen = () => {

    const [fontsLoaded] = useFonts({
        'Weatpoint-Regular': require('../../assets/fonts/Weatpoint-Regular.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);

    return (
        <View style={styles.loading}>
            <Image source={require('../../assets/favicon.png')} style={styles.image} />
            <Title
                title={'Book Tracker'}
            />
            <ActivityIndicator
                size="large"
                color={Colors.primary}
            />
            <Text color={Colors.primary}>Loading...</Text>
        </View>
    )
}

export default LoadingScreen;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCF09'
    },
    title: {
        fontSize: 50,
        alignItems: 'center',
        ...titleStyle,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});