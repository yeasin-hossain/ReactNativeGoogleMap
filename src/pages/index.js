import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './auth/login';
import Register from './auth/register';
import { TestContext } from '../context';
import Permission from './permission';
import FindLocation from './FindLocation';
import Jobs from './Jobs';
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Pages = () => {
    const { loggedIn, permission } = useContext(TestContext);

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    {loggedIn ?
                        <>
                            {!permission && <Stack.Screen name="Permission" component={Permission} options={{ headerShown: false }} />}

                            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="FindLocation" component={FindLocation} options={{ headerShown: false }} />
                            <Stack.Screen name="Jobs" component={Jobs} options={{ headerShown: false }} />
                        </>
                        :
                        <>
                            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                        </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Pages;
