import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Constants from "../utils/Constants";

const ComingSoon = () => (
    <View style={styles.container}>
        <Image style={styles.image} source={Constants.Icons.COMING_SOON}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 256,
        width: 256
    }
});

export default ComingSoon;