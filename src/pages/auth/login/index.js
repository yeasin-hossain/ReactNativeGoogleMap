import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, PermissionsAndroid, Alert } from 'react-native';
import { TestContext } from '../../../context';
const width = Dimensions.get('screen').width;

const Login = () => {
    const { setLoggedIn } = useContext(TestContext);
    const navigate = useNavigation();
    const [useInfo, setUserInfo] = useState({});

    const apiUrl = 'https://testbackyeasin.herokuapp.com/api/user'


    const handelLogin = async () => {
        try {
            if (useInfo.email && useInfo.password) {
                const signIn = await axios.post(`${apiUrl}/login`, useInfo);
                console.log(signIn)
                if (signIn.data?.code === 200) {
                    setLoggedIn(true);
                    navigate.navigate('Permission');
                } else {
                    alert(signIn.data?.message)
                }
            } else {
                alert('Please Enter Email And PassWord')
            }

        } catch (error) {
            console.log(error)
        }
        // try {
        //     const granted = await PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //         {
        //             'title': 'Example App',
        //             'message': 'Example App access to your location '
        //         }
        //     )
        //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //         console.log("You can use the location")
        //         alert("You can use the location");
        //     } else {
        //         console.log("location permission denied")
        //         alert("Location permission denied");
        //     }
        // } catch (err) {
        //     console.log(err)

        // }

    }
    return (
        <View style={styles.container}>
            <View style={{ width: width / 1.2, marginTop: 50 }}>
                <Text style={{ fontSize: 36, color: '#FA5805' }}>Sign In</Text>
                <Text >Please fill Login form below</Text>
            </View>
            <View>
                <View style={{ position: 'relative', marginBottom: 15 }}>
                    <TextInput
                        onChangeText={text => setUserInfo(p => ({ ...p, email: text }))}
                        placeholder='Email'
                        style={styles.input} />
                    <Image style={styles.inputIcon} source={require('../../../static/auth/man.png')} />
                </View>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        onChangeText={text => setUserInfo(p => ({ ...p, password: text }))}
                        placeholder='Password'
                        style={styles.input} />
                    <Image style={styles.inputIcon} source={require('../../../static/auth/email.png')} />
                </View>
                <TouchableOpacity
                    onPress={handelLogin}
                    style={{ ...styles.input, ...styles.btn, backgroundColor: '#FA5805', }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{ borderTopColor: "#000", borderTopWidth: 1, paddingBottom: 30 }}>
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                    Don???t  have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => navigate.navigate("Register")}
                    style={{ ...styles.input, ...styles.btn, backgroundColor: '#000', }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    input: {
        height: 54,
        width: width / 1.2,
        borderColor: "#E5E5E5",
        borderWidth: 1,
        borderRadius: 11,
        paddingLeft: 50
    },
    inputIcon: {
        position: 'absolute',
        top: 20,
        left: 20
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 0,
        marginTop: 20
    }
});
