import { Button, StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import React from 'react';

const Main = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Pagina de cada libro</Text>
        </View>

    );
};

export default Main;

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});