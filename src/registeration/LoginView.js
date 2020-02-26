import React, { useState, useReducer } from 'react';
import { Container, Button, Text, Content, Form, Item, Input, Label, Footer, FooterTab } from 'native-base';
import {
    StyleSheet, Alert
} from 'react-native';
import { baseUrl } from '../constants/constants';
import { useAuth } from "../contexts/AuthContext";

export default function LoginView(props) {
    const { state, dispatch } = useAuth();

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: '',
            password: ''
        }
    );

    const handleSubmit = (text, type) => {

        switch (type) {
            case 'email':
                setUserInput({ email: text });
                break;
            case 'password':
                setUserInput({ password: text });
                break;
            default:
                console.log('no case match');
                break;
        }
    }

    async function submitData() {
        console.log("userInput ", userInput);

        let response = await fetch(baseUrl + '/users/login', {
            method: 'POST',
            body: JSON.stringify(userInput),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let res = await response.json();
        console.log('sign up response from server: ', res);
        if (res.code == 200) {
            // const { accessToken, newUser } = res.data;
            // await AsyncStorage.setItem('userDetails', JSON.stringify({
            //     accessToken,
            //     newUser
            // }));
            dispatch({ type: 'LOGGED_IN', user: res.data });
            Alert.alert("Successfully Login");
        } else {
            console.log("Error ", res);
            Alert.alert(res.message);
        }
        // let b = await AsyncStorage.getItem('userDetails');
        // console.log('local storage', JSON.parse(b));
        // return res;
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input style={styles.inputtext}
                            onChangeText={(text) => handleSubmit(text, 'email')}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input style={styles.inputtext}
                            onChangeText={(text) => handleSubmit(text, 'password')}
                        />
                    </Item>
                </Form>
            </Content>
            <Content>
                <Button primary block
                    onPress={() => {
                        // console.log(userInput);
                        submitData();
                    }}
                ><Text> Sign in </Text></Button>
            </Content>
            <Button primary block
                onPress={() => {
                    props.navigation.navigate('Registeration Screen');
                }}
            >
                <Text> Create Account </Text>
            </Button>
        </Container>
    );
}

const styles = StyleSheet.create({
    inputtext: {
        marginBottom: 10
    },
    label: {
        color: "grey"
    },
    next: {
        color: '#fff'
    }

});