import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/actions/category.action';


const RecommendedScreen = ({ navigation }) => {

  const categories = useSelector(state => state.categories.categories);

  const dispatch = useDispatch();

  const onSelectGridItem = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('FilteredRecommendedBooks', {
      categoryName: item.title,
    });
  };

  const renderGridItem = ({ item }) => <CategoryItem item={item} onSelect={onSelectGridItem} />;

  return (
    <FlatList
      data={categories}
      keySelector={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
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