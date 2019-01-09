import React from 'react';
import {Root} from 'native-base';
import {Provider} from "react-redux";
import ChatApp from "./src/ChatApp";
import store from "./src/store";

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <ChatApp/>
                </Root>
            </Provider>
        );
    }
}
