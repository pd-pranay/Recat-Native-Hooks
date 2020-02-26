import React, { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Accordion, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';

export default function CompletedView(props) {
    // useEffect(() => {
    const { gameType } = props.route.params;
    //     // Alert.alert(gameType);
    // });
    let data = [
        {
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }
    ];
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
                            {/* <CardItem cardBody>
                                <Image source={{ uri: 'https://sensortower-itunes.s3.amazonaws.com/blog/2019/12/pubg-mobile.jpg' }}
                                    style={{ height: 150, width: null, flex: 1 }} />
                            </CardItem> */}
                            <CardItem>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Title style={{ color: "#000" }}>
                                        {" PUBG Mobile"}
                                        Dinner Time - Match #007
                                    </Title>
                                    <Text style={{ color: "#000" }}>
                                        Held at 24/2/2019 at 8:00 pm
                                    </Text>
                                </View>
                            </CardItem >

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
                            <Body>
                                <Button bordered
                                    onPress={() => handleJoin()}
                                >
                                    <Text >
                                        Join
                                        </Text>
                                </Button>
                            </Body>
                            <Dropdown
                                label='Winners'
                                data={data}
                            />
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
        flexDirection: 'row', flex: 4, justifyContent: 'space-evenly', marginHorizontal: "3%"
    },
    bodyText: { flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: "7%", marginVertical: '3%' }
});