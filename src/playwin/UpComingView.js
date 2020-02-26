import React, { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

export default function UpComingView(props) {
    // useEffect(() => {
    const { gameType } = props.route.params;
    //     // Alert.alert(gameType);
    // });
    const handleJoin = () => {
        Alert.alert("hhh");
        //to do chk balance 
        // less goto buy
        // else goto Join page
    }
    return (
        <ScrollView>
            <Container>
                <Content>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Status', {
                                gameType: 'pubg'
                            });
                        }}
                    >
                        <Card>
                            <CardItem cardBody>
                                <Image source={{ uri: 'https://sensortower-itunes.s3.amazonaws.com/blog/2019/12/pubg-mobile.jpg' }}
                                    style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Title style={{ color: "#000" }}>
                                        {" PUBG Mobile"}
                                        Dinner Time - Match #007
                                    </Title>
                                    <Text style={{ color: "#000" }}>
                                        Time 26/2/2019 at 8:00 pm
                                    </Text>
                                </View>
                            </CardItem >
                            <Body style={styles.bodyTitle}>
                                <Left>
                                    <Text> Prize Pool</Text>
                                </Left>
                                <Text>Per Kill</Text>
                                <Right>
                                    <Text>Play For </Text>
                                </Right>
                            </Body>
                            <Body style={styles.bodyText}>
                                <Left>
                                    <Title style={styles.title}>1000</Title>
                                </Left>
                                <Title style={styles.title}>10</Title>
                                <Right>
                                    <Title style={styles.title}>20 </Title>
                                </Right>
                            </Body>
                            <Body style={styles.bodyTitle}>
                                <Left>
                                    <Text> Type</Text>
                                </Left>
                                <Text>Version</Text>
                                <Right>
                                    <Text>Map </Text>
                                </Right>
                            </Body>
                            <Body style={styles.bodyText}>
                                <Left>
                                    <Title style={styles.title}>Solo</Title>
                                </Left>
                                <Title style={styles.title}>TPP</Title>
                                <Right>
                                    <Title style={styles.title}>Erangel </Title>
                                </Right>
                            </Body>
                            <CardItem>
                                <Left>
                                    <Text>
                                        Slot
                                    </Text>
                                    <Text>
                                        50/100
                                    </Text>
                                </Left>
                                <Right>
                                    <Button bordered
                                        onPress={() => handleJoin()}
                                    >
                                        <Text >
                                            Join
                                        </Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content >
            </Container >
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#000"
    },
    bodyTitle: {
        flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: "3%"
    },
    bodyText: { flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: "7%", marginVertical: '3%' }
});