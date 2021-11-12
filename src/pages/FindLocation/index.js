import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Map from '../Map'
const width = Dimensions.get('screen').width;

const FindLocation = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ height: '70%' }}>
                <Map />
            </View>
            <View style={styles.searchInfo}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Find your Location</Text>

                <View style={{ position: 'relative', marginBottom: 15 }}>
                    <TextInput placeholder='Enter your Location' style={styles.input} />
                    <Image style={styles.inputIcon} source={require('../../static/map/pin.png')} />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Jobs')}
                    style={{ ...styles.input, ...styles.btn, backgroundColor: '#000', }}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Find Your Job</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default FindLocation

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
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
    },
    searchInfo: {
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 25,
        backgroundColor: '#fff'
    }
})
