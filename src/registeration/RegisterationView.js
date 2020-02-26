import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Button, Text, Content, Form, Item, Input, Label, Footer, FooterTab } from 'native-base';
import { getUniqueId, getBrand } from 'react-native-device-info';
import Modal from "react-native-modal";
import OtpInputs from "react-native-otp-inputs";
import { baseUrl } from '../constants/constants';

export default function RegisterationView(props) {
    // let uniqueId = getUniqueId();
    // console.log(uniqueId, getBrand());

    const [isVisible, setVisible] = useState(false);

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            deviceId: '',
            phone: '',
            email: '',
            phone: '',
            password: '',
            refferal: ''
        }
    );
    useEffect(() => {
        setUserInput({ deviceId: getUniqueId() });
    }, []);

    const handleSubmit = (text, type) => {

        switch (type) {
            case 'name':
                // console.log(text)pr
                setUserInput({ name: text });
                break;
            // case 'userName':
            //     setUserInput({ userName: text });
            //     break;
            case 'email':
                setUserInput({ email: text });
                break;
            case 'phone':
                setUserInput({ phone: text });
                if (userInput.phone.length >= 9) {
                    console.log("phone Number Filled");
                    setVisible(true);
                }
                break;
            case 'password':
                setUserInput({ password: text });
                break;
            case 'refferal':
                setUserInput({ refferal: text });
                break;
            default:
                console.log('no case match');
                break;
        }
    }

    async function submitData() {
        // console.log("userInput ", userInput);

        let response = await fetch(baseUrl + '/users/signup', {
            method: 'POST',
            body: JSON.stringify(userInput),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let res = await response.json();
        // console.log('sign up response from server: ', res);
        if (res.code == 200) {
            // const { accessToken, newUser } = res.data;
            // await AsyncStorage.setItem('userDetails', JSON.stringify({
            //     accessToken,
            //     newUser
            // }));
            Alert.alert("Successfully Registered");

        } else {
            console.log("Error ", res);
            Alert.alert(res.message);
        }
        // let b = await AsyncStorage.getItem('userDetails');
        // console.log('local storage', JSON.parse(b));
        // return res;
    }

    return (
        !isVisible ?
            (
                <Container>
                    <Content>
                        <Form>

                            <Item floatingLabel>
                                <Label>Full Name</Label>
                                <Input style={styles.inputtext}
                                    onChangeText={(text) => handleSubmit(text, 'name')}
                                    value={userInput.name}
                                />
                            </Item >

                            {/* <Item floatingLabel>
                                <Label>Username</Label>
                                <Input style={styles.inputtext}
                                    onChangeText={(text) => handleSubmit(text, 'userName')}
                                />
                            </Item> */}

                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input style={styles.inputtext}
                                    onChangeText={(text) => handleSubmit(text, 'email')}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>phone Number</Label>
                                <Input style={styles.inputtext}
                                    // onChangeText={(text) => handleSubmit(text, 'phone')}
                                    onChangeText={(text) => handleSubmit(text, 'phone')}
                                    value={userInput.phone}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input style={styles.inputtext}
                                    onChangeText={(text) => handleSubmit(text, 'password')}
                                />
                            </Item>

                            <Item floatingLabel last>
                                <Label>Refferal Code</Label>
                                <Input style={styles.inputtext}
                                    onChangeText={(text) => handleSubmit(text, 'refferal')}
                                />
                            </Item>

                        </Form >

                        <Button primary block
                            onPress={() => {
                                submitData();
                            }}
                        >
                            <Text> Register </Text>
                        </Button>

                    </Content >

                    <Button primary block
                        onPress={() => {
                            props.navigation.navigate('Login Screen');
                        }}
                    >
                        <Text> Sign in </Text>
                    </Button>

                </Container >
            )
            :
            (
                <Container>
                    <Modal isVisible={isVisible}>
                        <Content style={{ backgroundColor: '#FFF' }}>
                            <Text>Enter OTP</Text>
                            <OtpInputs
                                handleChange={(code) => { console.log(code) }}
                                numberOfInputs={4}
                            />
                            <Button primary block
                                onPress={() => {
                                    setVisible(false);
                                }}
                            >
                                <Text> Submit </Text>
                            </Button>
                        </Content>
                    </Modal>
                </Container>
            )
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