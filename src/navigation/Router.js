import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from "../containers/Login";
import Movies from "../containers/Movies";
import Chat from "../containers/Chat";

const Navigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        }),
    },
    Movies: {
        screen: Movies,
        navigationOptions: () => ({
            header: null
        }),
    },
    Chat: {
        screen: Chat,
        navigationOptions: () => ({
            header: null
        }),
    }
});

export default createAppContainer(Navigator);
