import {Button, Icon} from "native-base";
import React from "react";
import PropTypes from 'prop-types';

const HeaderBackButton = ({onPress}) => (
    <Button transparent onPress={onPress}>
        <Icon name='arrow-back'/>
    </Button>
);

HeaderBackButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default HeaderBackButton;