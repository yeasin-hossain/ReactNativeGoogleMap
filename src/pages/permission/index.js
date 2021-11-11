import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
const width = Dimensions.get('screen').width
const Permission = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.container} source={require('../../static/map/map.png')}>
            <View style={styles.permissionContainer}>
                <Image source={require('../../static/map/mapIcon.png')} />
                <View style={{ width: width / 1.2 }}>
                    <Text style={{ textAlign: 'center' }}>
                        Allow Location
                    </Text>
                    <Text style={{ textAlign: 'center' }}>
                        We need your permission to access your location while using the app.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FindLocation')}
                        style={styles.btn}>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Allow Location </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.btn, backgroundColor: '#fff', marginTop: 0 }}>
                        <Text style={{ color: '#000', textAlign: 'center' }}>Do Not Allow </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Permission



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    permissionContainer: {
        height: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderTopStartRadius: 23,
        borderTopEndRadius: 23
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 54,
        width: width / 1.2,
        backgroundColor: '#000',
        borderRadius: 13
    }
});