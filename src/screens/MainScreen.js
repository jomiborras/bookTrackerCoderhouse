import { Button, StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import React from 'react';

const MainScreen = ({ navigation }) => {
    return (
            <View style={styles.screen}>
                <Text>Inicio</Text>
                <Button
                    title="Lista de Libros" onPress={() => {
                        navigation.navigate('Lista')
                    }}
                    color={'#FFCF09'}
                />
                <Text>Gracias por utilizar Book Tracker</Text>
            </View>

    );
};

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});