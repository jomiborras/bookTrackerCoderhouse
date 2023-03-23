import { Button, StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import React, { useState } from 'react';

const BookList = ({ navigation }) => {

  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'Aqui no hay reglas',
      author: 'Erin Meyer',
      pages: 500,
      read: true,
      image: require('../../assets/books/aqui.png'),
      rate: 5
    },
    {
      id: 2,
      name: 'El Punto Clave',
      author: 'Malcolm Gadwell',
      pages: 500,
      read: false,
      image: require('../../assets/books/clave.png'),
      rate: 4
    },
    {
      id: 3,
      name: 'El Mapa Cultural',
      author: 'Erin Meyer',
      pages: 500,
      read: false,
      image: require('../../assets/books/cultural.png'),
      rate: 3
    },
    {
      id: 4,
      name: 'La Galaxia Gutemberg',
      author: 'Marshall McLuhan',
      pages: 500,
      read: false,
      image: require('../../assets/books/gutemberg.png'),
      rate: 1
    },
    {
      id: 5,
      name: 'Lean Startup',
      author: 'Eric Ries',
      pages: 500,
      read: false,
      image: require('../../assets/books/lean.png'),
      rate: 2
    },
    {
      id: 6,
      name: 'La Estrategia del Oceano Azul',
      author: 'Chan Kim',
      pages: 500,
      read: false,
      image: require('../../assets/books/oceano.png'),
      rate: 5
    },
  ]);

  const noImageIcon = require('../../assets/favicon.png');

  return (
    <View style={styles.screen}>
      <Text>Lista de Libros</Text>

      <View>
        <FlatList
          numColumns={3}
          data={books}
          renderItem={(itemData) => (
            <Pressable
              style={styles.imageContainer}
              onPress={() => {
                navigation.navigate('Book')
              }}
            >
              <Image source={itemData.item.image ? itemData.item.image : noImageIcon} style={styles.image} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    padding: 10,
    marginTop: 1,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  itemAuthor: {
    fontSize: 10,
    color: "#999"
  },
  itemRead: {
    fontSize: 15,
    color: "#1ab35e"
  },
  itemReading: {
    fontSize: 15,
    color: "#2196f3"
  },

  imageContainer: {
    // flex: 1,
    margin: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
  },
});