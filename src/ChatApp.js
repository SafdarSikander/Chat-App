import React from "react";
import {AppLoading, Font} from "expo";
import {Root} from "native-base";
import Router from "./navigation/Router";
import Login from "./containers/Login";

export default class ChatApp extends React.Component {

    state = {
        isReady: false
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true})
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Root>
                    <AppLoading/>
                </Root>
            );
        }
        return (
            <Router/>
        );
    }
}