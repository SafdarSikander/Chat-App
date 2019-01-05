import React from 'react';
import {Provider} from "react-redux";
import ChatApp from "./src/ChatApp";
import store from "./src/store";

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ChatApp/>
            </Provider>
        );
    }
}
