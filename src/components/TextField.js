import React from "react";
import {Input, Item, Label} from "native-base";
import PropTypes from 'prop-types';

const TextField = (props) => (
    <Item floatingLabel>
        <Label>{props.label}</Label>
        <Input {...props} />
    </Item>
);

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default TextField;