import React from 'react';
import Router from "./src/navigation/Router";
import {Font, AppLoading} from 'expo';
import {Root} from 'native-base';

export default class App extends React.Component {

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
