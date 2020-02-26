import React, { useState, useReducer } from 'react';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TournamentListView(props) {


    return (

        <Container>
            <Content>
                <TouchableOpacity onPress={() => (console.log(1))}>
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
        // <View style={{ backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        //     <ActivityIndicator />
        //     <Text>{"Loading User Data"}</Text>
        // </View>
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