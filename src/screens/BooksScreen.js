import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GridItem from '../components/GridItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook } from '../store/actions/books.action';


const BooksScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);


    const handleOnSelected = (item) => {
        dispatch(selectBook(item.id));
        navigation.navigate('Book', {
            book: item,
        });
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={handleOnSelected} />

    return (
        <FlatList
            data={books}
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