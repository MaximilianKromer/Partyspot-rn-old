import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';
import { eventStyles } from '../styles/global';

export default function DetailCard(props) {
    const event = props.event;
    const date_obj = (event.date) ? new Date(event.date) : null;
    const date = (event.date) ? 'Am ' + date_obj.getDate() + '.' + (date_obj.getMonth() + 1) + '. ' : null;
    const time = (event.date) ? 'um ' + event.time.substr(0, 5) + ' Uhr' : null;

    return (
        <Card>
            <Text style={eventStyles.date} >{ date }</Text>
            <Text style={eventStyles.headline} >{event.name}</Text>
            <Text style={eventStyles.time} >{ time }</Text>

            <View style={styles.locationContainer}>
                <Text style={eventStyles.locationHeader} >Ort:</Text>
                <Text style={eventStyles.locationBold} >{event.location}</Text>
                <Text style={eventStyles.distance} >{ event.distance ? 'etwa ' + event.distance + ' km entfernt' : null }</Text>
            </View>

            <Text style={eventStyles.text} >{event.description}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    locationContainer: {
        marginTop: 22,
        marginBottom: 28, 
    },
});