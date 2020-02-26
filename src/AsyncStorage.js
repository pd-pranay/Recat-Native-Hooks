import AsyncStorage from '@react-native-community/async-storage';

export const setToken = (token) => {
    try {
        await AsyncStorage.setItem('TOKEN_KEY', JSON.stringify(token))
    } catch (e) {
        // saving error
        console.log('error in saving token');
    }
}

export const getToken = () => {
    try {
        const accessToken = await AsyncStorage.getItem('TOKEN_KEY')
        if (accessToken !== null) {
            // value previously stored
            return JSON.parse(accessToken);
        }
    } catch (e) {
        // error reading value
        console.log('error in fetching token');
    }
}

export const setdata = (user) => {
    try {
        await AsyncStorage.setItem('USER_KEY', JSON.stringify(user));
    } catch (e) {
        // saving error
        console.log('error in saving user');
    }
}

export const getToken = () => {
    try {
        const user = await AsyncStorage.getItem('USER_KEY');
        if (value !== null) {
            // value previously stored
            return JSON.parse(user);
        }
    } catch (e) {
        // error reading value
        console.log('error in fetching user');
    }
}