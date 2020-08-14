import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import EventScreen from './screens/EventScreen';
import LandingScreen from './screens/LandingScreen';
import DetailScreen from './screens/DetailScreen';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    let [fontsLoaded] = useFonts({
        'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    });

    const Stack = createStackNavigator();

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                        <Stack.Screen 
                            name="Home" 
                            component={LandingScreen} 
                        />
                        <Stack.Screen 
                            name="Events" 
                            component={EventScreen}
                            initialParams={{ mode: 'city', city: 'berlin', distance: 30 }}
                        />
                        <Stack.Screen 
                            name="Details" 
                            component={DetailScreen}
                            initialParams={{ event: null }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
});
