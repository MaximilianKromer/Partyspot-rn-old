import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text } from 'react-native';
import EventList from '../components/EventList' ;
import Settings from '../components/Settings';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

import CityChooser from '../components/CityChooser';
import DistanceChooser from '../components/DistanceChooser';

export default function EventScreen(props) {
    const [cityChooserVisible, setCityChooserVisible] = useState(false);
    const [distanceChooserVisible, setDistanceChooserVisible] = useState(false);
    const [events, setEvents] = useState(null);
    const [location, setLocation] = useState(null);
    const [locErrorMsg, setLocErrorMsg] = useState(null);


    function calcDistance(latitude, longitude) {
        const distance_const = 111120;
    
        const latInMeter = distance_const;
        const longInMeter = distance_const * Math.cos(location.coords.latitude * Math.PI / 180);
    
        const distanceLat = Math.abs(latitude - location.coords.latitude);
        const distanceLong = Math.abs(longitude - location.coords.longitude);
    
        const distanceLatInMeter = distanceLat * latInMeter;
        const distanceLongInMeter = distanceLong * longInMeter;
    
        const distance = Math.sqrt(Math.pow(distanceLatInMeter, 2) + Math.pow(distanceLongInMeter, 2));
    
        return Math.round((distance / 1000));
    }

    fetchByCity = () => {
        axios.post('https://www.mks-software.de/partyspot/api/get_events_by_city.php', {
                city: props.route.params.city 
            }).then(res => {
                if (res.data.error) {
                    setEvents([
                        { name: 'Fehler', id: '0' }
                    ]);
                } else {
                    if (res.data.events.length) {
                        setEvents(res.data.events);
                    } else {
                        setEvents([
                            { name: 'Keine Events gefunden', id: '0' }
                        ]);
                    }
                }
            }).catch(error => {
                console.log(error);
                setEvents([
                    { name: 'Fehler', id: '0' }
                ]);
            });
    }

    fetchByGPS = () => {
        axios.post('https://www.mks-software.de/partyspot/api/get_events_by_pos.php', {
                user_lat: location.coords.latitude,
                user_long: location.coords.longitude,
                distance: props.route.params.distance
            }).then(res => {
                if (res.data.error) {
                    setEvents([
                        { name: 'Fehler', id: '0' }
                    ]);
                } else {
                    let events = res.data.events;
                    events.forEach(event => {
                        event.distance = calcDistance(event.latitude, event.longitude);
                    });
                    let filtered_events = events.filter((event) => event.distance <= props.route.params.distance);
                    if (filtered_events.length) {
                        setEvents(filtered_events);
                    } else {
                        setEvents([
                            { name: 'Keine Events gefunden', id: '0' }
                        ]);
                    }
                }
            }).catch(error => {
                console.log(error);
                setEvents([
                    { name: 'Fehler', id: '0' }
                ]);
            });
    }


    useEffect(() => {
        setEvents(null);
        if (props.route.params.mode == 'city') {
            console.log('fetch city');
            fetchByCity();
        }
        if (props.route.params.mode == 'gps') {
            console.log('fetch gps');
            if (location) {
                fetchByGPS();
            } else {
                console.log('search gps');
                Location.requestPermissionsAsync().then(({ granted }) => {
                    if (granted) {
                        Location.getCurrentPositionAsync({}).then((location) => {
                            setLocation(location);
                            console.log(location);
                            fetchByGPS();
                        });
                    } else {
                        setEvents([
                            { name: 'Zugriff auf Standort verweigert', id: '0' }
                        ]);
                    }
                });
            }
        }

    }, [props.route.params.mode, props.route.params.city, props.route.params.distance]);

    return (
        <View style={styles.container}>

            <CityChooser
                isVisible={cityChooserVisible}
                onCancel={() => setCityChooserVisible(false)}
                onSubmit={(city) => {
                    setCityChooserVisible(false);
                    props.navigation.setParams({ mode: 'city', city });
                    }}
            />

            <DistanceChooser 
                isVisible={distanceChooserVisible}
                onSubmit={(distance) => {
                    setDistanceChooserVisible(false);
                    props.navigation.setParams({ mode: 'gps', distance });
                }}
                initialDistance={props.route.params.distance}
            />

            <SafeAreaView style={styles.container}>
                <Settings 
                    options={{ mode: props.route.params.mode, city: props.route.params.city, distance: props.route.params.distance }} 
                    show={{ cityChooser: () => setCityChooserVisible(true), distanceChooser: () => setDistanceChooserVisible(true) }}
                />
                <EventList
                    events={events}
                    navigation={props.navigation}
                /> 
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 0
    }
});