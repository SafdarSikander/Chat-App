import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Container, Content, Form} from "native-base";
import {connect} from 'react-redux';
import TextField from "../components/TextField";
import Button from "../components/Button";
import Constants from "../utils/Constants";
import {createUser, login} from '../actions';
import Spinner from "react-native-loading-spinner-overlay";


class Login extends React.Component {

    state = {
        email: 'test@yahoo.com',
        password: '123456789'
    };

    componentDidMount() {
        console.log(this.props.error)
    }

    _onLogin = () => {
        const {email, password} = this.state;
        if (!(email || password)) {
            alert("Please enter email and password.");
            return;
        }
        this.props.login(email, password,
            //onSuccess
            () => this.props.navigation.navigate(Constants.Screens.MOVIES),
            //onError
            (err) => alert(err)
        );
    };


    _onRegister = () => {
        const {email, password} = this.state;
        if (!(email || password)) {
            alert("Please enter email and password.");
            return;
        }
        this.props.createUser(email, password,
            // onSuccess
            () => alert("Registered successfully. Please login using email and password"),
            // onError
            (err) => alert(err)
        );
    };

    render() {
        return (
            <Container>
                <Content>
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
                                title={Constants.Labels.LOGIN}
                                full rounded success
                                onPress={() => this._onLogin()}
                            />
                            <Button
                                title={Constants.Labels.REGISTER}
                                full rounded primary
                                onPress={() => this._onRegister()}
                            />
                        </Form>
                    </View>
                </Content>
                <Spinner visible={this.props.spinner.isLoading} textContent={this.props.spinner.text}/>
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

const mapStateToProps = state => ({
    spinner: state.spinner,
    error: state.user.error
});

export default connect(mapStateToProps, {createUser, login})(Login);