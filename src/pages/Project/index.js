import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
const width = Dimensions.get('screen').width;

const Project = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ justifyContent: 'center', ...styles.space }}>
                <View style={styles.useInfo}>
                    <Text>Owner:</Text>
                    <Text>John Doe</Text>
                </View>
                <View style={styles.useInfo}>
                    <Text>Category:</Text>
                    <Text>Roof Contractor</Text>
                </View>
                <View style={styles.useInfo}>
                    <Text>Work Dates:</Text>
                    <Text>10 July 2021</Text>
                </View>
                <Image style={{ alignSelf: 'center' }} source={require('../../static/project/map.png')} />
            </View>


            <View style={styles.space}>
                <Text style={{ fontWeight: 'bold' }}>Scope of Work</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>

            <View style={styles.space}>
                <Text>Work Photos</Text>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Image style={styles.image} source={require('../../static/project/demo1.png')} />
                    <Image style={styles.image} source={require('../../static/project/demo2.png')} />
                    <Image style={styles.image} source={require('../../static/project/demo3.png')} />
                    <Image style={styles.image} source={require('../../static/project/demo4.png')} />
                    <Image style={styles.image} source={require('../../static/project/demo5.png')} />
                    <Image style={styles.image} source={require('../../static/project/demo6.png')} />
                </View>
            </View>


            <View style={styles.space}>
                <Text style={{ fontWeight: 'bold' }}>Scope of Work</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>


            <View style={styles.space}>
                <Text style={{ fontWeight: 'bold' }}>Scope of Work</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
            </View>

            <TouchableOpacity
                // onPress={() => navigation.navigate('Jobs')}
                style={{ ...styles.btn, backgroundColor: '#FA5805', }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Speak to a Representative </Text>
            </TouchableOpacity>

            <View style={{ ...styles.space, marginTop: 20 }}>
                <Text style={styles.titleText}>Similar projects</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity style={styles.similar}>
                        <Image source={require('../../static/project/demo7.png')} />
                        <View style={{ padding: 10, backgroundColor: 'white' }}><Text>Project Title</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.similar}>
                        <Image source={require('../../static/project/demo8.png')} />
                        <View style={{ padding: 10, backgroundColor: 'white' }}><Text>Project Title</Text></View>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default Project

const styles = StyleSheet.create({
    useInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    image: {
        margin: 5
    },
    space: {
        paddingLeft: width / 25,
        paddingRight: width / 25,
        marginBottom: 10
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 0,
        height: 54,
        width: width / 1.2,
        borderRadius: 11,
        alignSelf: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        color: '#000'
    },
    similar: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.60,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor: 'white',
        borderRadius: 33
    }
})
