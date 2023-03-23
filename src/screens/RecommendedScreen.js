import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RecommendedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Recomendados</Text>
    </View>
  )
};

export default RecommendedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});