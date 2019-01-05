import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Container, Form} from "native-base";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Constants from "../utils/Constants";

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    };

    _onLogin = () => {
    };

    _onRegister = () => {
    };

    render() {
        return (
            <Container>
                <View style={styles.content}>
                    <Form>
                        <TextField
                            label='Email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email})}
                        />
                        <TextField
                            label='Password'
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                        />
                        <Button
                            title={Constants.Label.LOGIN}
                            full rounded success
                            onPress={() => this._onLogin()}
                        />
                        <Button
                            title={Constants.Label.REGISTER}
                            full rounded primary
                            onPress={() => this._onRegister()}
                        />
                    </Form>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        padding: 16
    }
});

export default Login;