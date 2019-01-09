import React from 'react';
import {Keyboard} from 'react-native';
import {Body, Button, Container, Content, Footer, Header, Icon, Input, Item, Left, Title, Toast} from "native-base";
import {connect} from 'react-redux';
import {cleanMessages, fetchMessages, sendMessage} from '../actions';
import HeaderBackButton from "../components/HeaderBackButton";
import MessageBox from "../components/Messagebox";
import moment from "moment";


class Chat extends React.Component {

    state = {
        message: "",
    };

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    _keyboardDidShow = () => {
        console.log('keyboad show');
        this._scrollToBottom();
    };

    _keyboardDidHide() {
        console.log('keyboad hide');
    }

    componentDidMount() {
        const {fetchMessages, movie} = this.props;
        fetchMessages(movie.title,
            //onSuccess
            this._scrollToBottom,
            //onError
            (err) => alert(err)
        );
    }

    _getUserNameFromEmail = (email) => {
        return email.substr(0, email.indexOf('@'));
    };

    componentWillUnmount() {
        this.props.cleanMessages(); // clean the messages history
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _scrollToBottom = () => {
        setTimeout(() => {
            if (this._content) {
                this._content._root.scrollToEnd();
            }
        }, 100);
    };

    _onMessageSend = (message) => {
        if (!message.length) {
            Toast.show({
                text: "Please write something to send!",
                buttonText: null,
                type: "danger"
            });
            return;
        }
        this.setState({message: ''});
        let {movie, user} = this.props;
        let msg = {
            title: movie.title,
            message,
            user: user.email,
            time: moment().format('MMM-DD-YYYY, h:mm:ss')
        };
        this.props.sendMessage(msg, this._scrollToBottom, (err) => alert(err));
    };

    render() {
        const {movie, navigation, messages, user} = this.props;
        console.disableYellowBox = true;
        return (
            <Container>
                <Header>
                    <Left>
                        <HeaderBackButton onPress={() => navigation.goBack()}/>
                    </Left>
                    <Body>
                    <Title>{movie.title}</Title>
                    </Body>
                </Header>
                <Content ref={c => this._content = c}>
                    {messages.map((value, index) => (
                        <MessageBox
                            key={index}
                            name={value.user}
                            message={value.message}
                            time={value.time}
                            isOwnMessage={value.user === this._getUserNameFromEmail(user.email)}
                        />
                    ))}
                </Content>
                <Footer style={{backgroundColor: 'transparent'}}>
                    <Item style={{flex: 1, paddingHorizontal: 5}}>
                        <Input
                            placeholder='Send some thoughts'
                            onChangeText={(message) => this.setState({message})}
                            value={this.state.message}/>
                        <Button onPress={() => this._onMessageSend(this.state.message)}>
                            <Icon active name='send'/>
                        </Button>
                    </Item>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movies.selectedMovie,
        messages: Object.values(state.messages),
        user: state.user
    }
};
export default connect(mapStateToProps, {fetchMessages, sendMessage, cleanMessages})(Chat);