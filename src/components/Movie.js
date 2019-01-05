import {Icon, Left, ListItem, Right, Text} from "native-base";
import React from "react";
import PropTypes from 'prop-types';

const Movie = ({title, onPress}) => (
    <ListItem onPress={onPress}>
        <Left>
            <Text>{title}</Text>
        </Left>
        <Right>
            <Icon name="ios-arrow-dropright-circle"/>
        </Right>
    </ListItem>
);

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};
export default Movie;