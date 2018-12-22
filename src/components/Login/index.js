import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                resizeMode="cover"
                source={require('../../assets/images/avatar/login.png')}
            >
                <View style={styles.logoWraper}>
                    <Image
                        style={styles.logoImage}
                        resizeMode="contain"
                        source={require('../../assets/images/avatar/login_logo.png')}
                    />
                    <Text style={styles.backgroundTextHeader1}>infinite . smart . logistics</Text>
                    <Text style={styles.backgroundTextHeader2}>TRANSPORT MANAGEMENT SYSTEM</Text>
                </View>

                <View style={styles.bodyWrapper}>
                    <TextInput style={styles.parseTextInput} placeholder="*Tài khoản"></TextInput>
                    <TextInput style={styles.parseTextInput} secureTextEntry placeholder="*Mật khẩu"></TextInput>
                </View>

                <View>
                    <Button
                        title='ĐĂNG NHẬP'
                    />
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    container: {
        alignItems: 'center',
    },
    backgroundTextHeader1: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#98cc56',
        fontSize: 14,
        marginTop: -15
    },
    backgroundTextHeader2: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 14,
        lineHeight: 30,
    },
    logoWraper: {
        width: '100%',
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: '70%',
    },
    bodyWrapper: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
    },
    parseTextInput: {
        marginTop: 10,
        width: '90%',
        height: 40,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
    },
})