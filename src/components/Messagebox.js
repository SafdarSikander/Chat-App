import React from "react";
import {View, StyleSheet} from 'react-native';
import {Body, Card, CardItem, Text} from "native-base";
import PropTypes from 'prop-types';

const MessageBox = ({name, message, isOwnMessage, time = ""}) => (
    // TODO : update the ui
    <View style={{flex: 1}}>
        <Card>
            <CardItem>
                <Body>
                <Text>
                    {message}
                </Text>
                </Body>
            </CardItem>
        </Card>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{time}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 10,
        color: '#a4a4a4'
    }
});

MessageBox.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default MessageBox;