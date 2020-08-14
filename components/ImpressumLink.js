import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { landingStyles } from '../styles/global';
import * as WebBrowser from 'expo-web-browser';

export default function ImpressumLink(props) {
    return (
        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.party-spot.de/impressum')}>
            <Text style={landingStyles.impressumText} >Datenschutz | Impressum</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginHorizontal: 12,
        marginTop: 6,
        marginBottom: 6,
    },
    cardContent: {
        marginHorizontal: 12,
        marginVertical: 12,
    }
});