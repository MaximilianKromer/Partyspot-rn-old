import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';
import { eventStyles } from '../styles/global';

export default function EventItem(props) {
    const date_obj = (props.event.date) ? new Date(props.event.date) : null;
    const date = (props.event.date) ? date_obj.getDate() + '.' + (date_obj.getMonth() + 1) + '. ' : null;
    const time = (props.event.date) ? props.event.time.substr(0, 5) + ' Uhr' : null;

    return (
        <Card>
              <Text style={eventStyles.headline} >{props.event.name}</Text>
              <View style={styles.locationContainer}>
                  <Text style={eventStyles.location} >{props.event.location}</Text>
                  <Text style={eventStyles.distance} >{ props.event.distance ? props.event.distance + ' km' : null }</Text>
              </View>
              <View style={styles.dateContainer}>
                  <Text style={eventStyles.date} >{ date }</Text>
                  <Text style={eventStyles.time} >{ time }</Text>
              </View>
              <Text style={eventStyles.text} >{props.event.description}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        marginBottom: 6, 
    },
    dateContainer: {
        flexDirection: 'row',
        marginVertical: 8,
    },
});