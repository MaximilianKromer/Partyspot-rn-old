import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Share } from 'react-native';
import { buttonStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

export default function SettingsButton(props) {
    const date_obj = new Date(props.event.date);
    const date_string = 'Am ' + date_obj.getDate() + '.' + (date_obj.getMonth() + 1) + '. '

    function share() {
        Share.share({
            message: date_string + props.event.name + ' | ' + 'https://www.party-spot.de/events/' + props.event.id,
            url: 'https://www.party-spot.de/events/' + props.event.id,
            title: 'www.party-spot.de',
        }, {
            dialogTitle: date_string + props.event.name,
        });
    }

    return (
        <TouchableOpacity style={buttonStyles.smallButton} onPress={share} >
            <View style={styles.container} >
                <View style={styles.iconContainer} >
                    <MaterialIcons name='share' color='white' size={16} />
                </View>
                <Text style={buttonStyles.text} >Teilen</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 2,
    },
    iconContainer: {
        marginLeft: 10,
        marginTop: 1,
    }
});