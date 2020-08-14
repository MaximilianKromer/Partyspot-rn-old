import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { landingStyles } from '../styles/global';

import CityChooser from '../components/CityChooser';
import ImpressumLink from '../components/ImpressumLink';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EventScreen(props) {
    const [cityChooserVisible, setCityChooserVisible] = useState(false);

    return (
        <View style={styles.container}>

            <CityChooser
                isVisible={cityChooserVisible}
                onCancel={() => setCityChooserVisible(false)}
                onSubmit={(city) => {
                    setCityChooserVisible(false);
                    props.navigation.navigate('Events', { mode: 'city', city });
                    }}
            />

            <SafeAreaView style={styles.container} >
                <ImpressumLink />

                <View style={styles.flexContainer} >

                    <Image
                        style={styles.logo} 
                        source={require('../assets/icon-192.png')} 
                    />

                    <View style={styles.midContainer} >
                        <Text style={landingStyles.text} >Wähle deine</Text>
                        <TouchableOpacity onPress={() => setCityChooserVisible(true)} style={styles.button} >
                            <Text style={landingStyles.buttonText} >Stadt</Text>
                        </TouchableOpacity>
                        <Text style={landingStyles.text} >oder nutze deinen</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Events', { mode: 'gps' })} style={styles.button} >
                            <Text style={landingStyles.buttonText} >Standort</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.placeholder} ></View>

                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        padding: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logo: {
    },
    midContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    button: {
        backgroundColor: '#FFCA36',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        width: 225,
        borderRadius: 21,
    },
    placeholder: {
        height: 1,
    }
});