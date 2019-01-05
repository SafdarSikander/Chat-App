import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ComingSoon from "../components/ComingSoon";
import Login from "../containers/Login";
import UserInfo from "../containers/UserInfo";

const Navigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        }),
    },
    UserInfo: {
        screen: UserInfo,
        navigationOptions: () => ({
            header: null
        }),
    }
});

export default createAppContainer(Navigator);
