import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Color from '../constants/Colors';
import { titleStyle } from '../constants/TextStyles';

const Title = ({title}) => {
    return (
        <Text
            style={[styles.title, {color: Color.primary}]}
        >
            {title}
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        ...titleStyle,
      },
});