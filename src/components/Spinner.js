import React from "react";
import {StyleSheet} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

const loadingIndicator = ({visible = false, textContent}) => (
    <Spinner
        color='#334393'
        visible={visible}
        overlayColor='transparent'
        textContent={textContent}
        textStyle={styles.spinnerTextStyle}
    />
);

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#334393'
    },
});

loadingIndicator.propTypes = {
    visible: PropTypes.bool.isRequired,
    textContent: PropTypes.string.isRequired
};

export default loadingIndicator;