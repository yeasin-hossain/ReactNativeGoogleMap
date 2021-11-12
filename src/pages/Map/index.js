import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ children, state }) => {
    const [location, setLocation] = useState(false);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                const initialPosition = position;
                setLocation({
                    lat: initialPosition.coords.latitude,
                    lang: initialPosition.coords.longitude
                });
                if (state) {
                    state({
                        lat: initialPosition.coords.latitude,
                        lang: initialPosition.coords.longitude
                    });
                }
                console.log(position)

            },
            error => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );

    }, []);

    return (
        <View style={styles.container}>
            {location &&
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: location?.lat,
                        longitude: location?.lang,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {/* <Marker
                        onPress={() => console.log('object')}
                        draggable
                        coordinate={{ latitude: location?.lat, longitude: location?.lang }}
                        image={require('../../static/map/marker.png')}
                        title='Job 2'
                    /> */}
                    {children}
                    {/* <Marker
                        draggable
                        coordinate={{ latitude: location?.lat, longitude: location?.lang }}
                        image={require('../../static/map/marker.png')}
                        title='Job 3'
                    />
                    <Marker
                        draggable
                        coordinate={{ latitude: location?.lat, longitude: location?.lang }}
                        image={require('../../static/map/marker.png')}
                        title='Job 4'
                    /> */}
                    {/* <Circle
                        radius={2}
                        coordinate={{ latitude: location?.lat, longitude: location?.lang }}
                    /> */}
                </MapView>
            }
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        // height: '80%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
