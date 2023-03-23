import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BookDetailScreen = ({ route, navigation }) => {

  const { book } = route.params;


  useEffect(() => {
    navigation.setOptions({
      title: book.name,
      headerTitleStyle: {
        color: '#323232'
      }
    })
  },[]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{book.id}. {book.name}</Text>
      <Image source={book.image} />
      <Text>Autor: {book.author}</Text>
    </View>
  )
};

export default BookDetailScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    }
});