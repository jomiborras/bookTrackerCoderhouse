import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GridItem from '../components/GridItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook, filterBooks } from '../store/actions/books.action';

const RecommendedBooksScreen = ({ route, navigation }) => {

  const dispatch = useDispatch();
  const categoryBooks = useSelector(state => state.books.filteredBooks);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filterBooks(category.id));
  }, []);

  const handleOnSelected = (item) => {
    dispatch(selectBook(item.id));
    navigation.navigate('Book', {
      book: item,
    });
  }

  useEffect(() => {
    navigation.setOptions({
      title: category.title,
      headerTitleStyle: {
        color: '#323232'
      }
    })
  }, []);

  const renderGridItem = ({ item }) => <GridItem item={item} onSelect={handleOnSelected} />

  return (
    <FlatList
      data={categoryBooks}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
};

export default RecommendedBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});