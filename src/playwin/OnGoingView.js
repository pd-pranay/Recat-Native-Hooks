import React, { useEffect } from 'react';
import { Container, Content, Text, Body, Right, Title, Subtitle } from 'native-base';
import { Alert } from 'react-native';
export default function OnGoingView(props) {

    // console.log((route.params));
    const { gameType } = props.route.params;
    // const { otherParam } = route.params;
    // const { itemId } = route.params;
    // const { otherParam } = route.params;
    return (
        <Container>
            <Content>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(gameType)}</Text>
                {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
            </Content >
        </Container >
    );
}