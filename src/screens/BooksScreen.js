import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GridItem from '../components/GridItem';
import { BOOKS } from '../data/books';

const BooksScreen = ({ navigation }) => {

    const handleOnSelected = (item) => {
        navigation.navigate('Book', {
            book: item,
        });
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={handleOnSelected} />

    return (
        <FlatList
            data={BOOKS}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
};

export default BooksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});