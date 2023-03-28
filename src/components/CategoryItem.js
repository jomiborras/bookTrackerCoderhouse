import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CategoryItem = ({
    item,
    onSelect
}) => {

    return (
        <View style={styles.gridItem}>
            <TouchableOpacity onPress={() => onSelect(item)} style={[styles.container, {backgroundColor: item.color}]}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default CategoryItem;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    title: {
        fontSize: 10,
        fontFamily: 'OpenSans_700Bold',
    },
    imageContainer: {
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
    }
})