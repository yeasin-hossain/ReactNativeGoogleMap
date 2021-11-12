import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Marker } from 'react-native-maps'
import Filter from './Filter'
import Map from '../Map'
import { useNavigation } from '@react-navigation/core'

const Jobs = () => {
    const [location, setLocation] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    return (
        <View style={{ position: 'relative' }}>

            <View style={{ height: '90%' }}>
                <Map state={setLocation}>
                    <Marker
                        onPress={() => navigation.navigate('Project')}
                        draggable
                        coordinate={{ latitude: location?.lat, longitude: location?.lang }}
                        image={require('../../static/map/marker.png')}
                        title='Job 2'
                    />
                </Map>
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Image source={require('../../static/job/map.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../static/job/message.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../static/job/setting.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ backgroundColor: '#000', padding: 15, position: 'absolute', top: 10, borderRadius: 8, right: 10 }}>
                <Image source={require('../../static/job/filter.png')} />
            </TouchableOpacity>


            <Filter setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </View>
    )
}

export default Jobs

const styles = StyleSheet.create({
    imageContainer: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
})
