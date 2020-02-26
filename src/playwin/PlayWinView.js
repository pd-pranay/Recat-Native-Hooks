import React, { useState, useReducer } from 'react';
// import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, ScrollView, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
export default function PlayWinView({ route, navigation }) {
    // console.log(props);
    const { width } = Dimensions.get('window');
    const height = width * 0.8;
    const images = [
        {
            source: {
                uri: 'https://cnet3.cbsistatic.com/img/JYmeZJ2UnM9O7cOPIuWZZ0gmCxU=/1092x0/2019/09/18/c07d7cfa-5cc7-4d64-a3bb-aabf6b778dcc/call-of-duty-mobile.jpg',
            },
        },
        {
            source: {
                uri: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/pubg-1580537222.jpg',
            },
        },
        {
            source: {
                uri: 'https://lh3.googleusercontent.com/Qe24SG2Dmt_TcHJgP5j-Np6r2LlW9hT0h0Iu2J-C576gt5RbdFYrKOd-o6G7xnkW3d8',
            },
        }
    ];
    return (
        <ScrollView>
            <Container>
                <Content>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={true} >
                        {images.map((image, i) => (
                            <Image style={{ width: width, height: 170, alignSelf: 'center', }} source={image.source} key={i} />
                        ))}

                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Status', {
                                gameType: 'pubg'
                            });
                        }}
                    >
                        <Card>
                            <CardItem cardBody>
                                <Image source={{ uri: 'https://timesofindia.indiatimes.com/thumb/msid-68671060,width-800,height-600,resizemode-4/68671060.jpg' }}
                                    style={{ height: 250, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Title style={{ color: "#000" }}>
                                        {" PUBG Mobile"}
                                    </Title>
                                </View>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content >
            </Container >
        </ScrollView >
    );
}
const styles = StyleSheet.create({
});