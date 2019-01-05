import React from "react";
import {View, StyleSheet} from 'react-native';
import {Button as RNButton, Text} from 'native-base';
import PropTypes from 'prop-types';

const Button = (props) => (
    <View style={styles.container}>
        <RNButton {...props}>
            <Text style={styles.text}>{props.title}</Text>
        </RNButton>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    text: {
        color: 'white'
    }
});

Button.propsTypes = {
  title : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
};

export default Button;