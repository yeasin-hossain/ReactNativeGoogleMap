import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native'
const width = Dimensions.get('screen').width;


const Filter = ({ modalVisible, setModalVisible }) => {

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={{
                        flex: 1,
                        padding: 5,
                        paddingBottom: 0,
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}>
                    <View
                        style={{
                            flex: 0.95,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            borderBottomEndRadius: 0,
                            borderBottomStartRadius: 0,
                        }}>
                        <View style={{ justifyContent: 'center', padding: 25, alignItems: 'center' }}>
                            <View style={{ height: 10, width: 50, backgroundColor: '#C4C4C4', borderRadius: 23, marginBottom: 20 }} />
                            <Text>
                                Set Filters
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Location</Text>
                                <TextInput placeholder='Enter your Location' style={styles.input} />
                                <Image style={styles.inputIcon} source={require('../../static/map/pin.png')} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Category</Text>
                                <TextInput placeholder='Select category' style={styles.input} />
                                <Image style={styles.inputIcon} source={require('../../static/filter/category.png')} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Owner</Text>
                                <TextInput placeholder='Select owner' style={styles.input} />
                                <Image style={styles.inputIcon} source={require('../../static/filter/man.png')} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Material Classification</Text>
                                <TextInput placeholder='Select' style={styles.input} />
                                <Image style={styles.inputIcon} source={require('../../static/filter/cer.png')} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputText}>Date / Year</Text>
                                <TextInput placeholder='Enter Location' style={styles.input} />
                                <Image style={styles.inputIcon} source={require('../../static/filter/date.png')} />
                            </View>

                        </View>

                    </View>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            height: 65,
                            justifyContent: 'center',
                            borderBottomEndRadius: 13,
                            borderBottomStartRadius: 13,
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{ ...styles.input, ...styles.btn, backgroundColor: '#000', }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Apply Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flex: .80,
        backgroundColor: 'white',
        alignItems: 'flex-end'
    },
    inputContainer: { position: 'relative', marginBottom: 15 },
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
        bottom: 20,
        left: 20
    },
    inputText: {
        color: '#000',
        marginBottom: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 0,
    },
})
