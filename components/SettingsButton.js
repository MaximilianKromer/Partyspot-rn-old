import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles/global';

export default function SettingsButton(props) {

    if (props.options.mode === "city") {
        return (
            <TouchableOpacity style={buttonStyles.smallButton} onPress={props.show.cityChooser} >
                <Text style={buttonStyles.text} >Stadt: {props.options.city}</Text>
            </TouchableOpacity>
        );
    }
    if (props.options.mode === "gps") {
        return (
            <TouchableOpacity style={buttonStyles.smallButton} onPress={props.show.distanceChooser} >
                <Text style={buttonStyles.text} >Distanz: {props.options.distance} km</Text>
            </TouchableOpacity>
        );
    }
    return null;
}