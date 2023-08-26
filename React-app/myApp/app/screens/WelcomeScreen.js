import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, //image thakes entire screen
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },

    logo: {
        width: 200,
        height: 200,
    },

    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 25,
        padding: 10,
    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
})

export default WelcomeScreen;