import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import EventItem from './EventItem';
import LoadingCard from '../components/LoadingCard';

export default function EventList(props) {

    return (
        <View style={styles.list}>
            <FlatList
                data={props.events}
                renderItem={(event) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('Details', { event: event.item })} >
                        <EventItem event={event.item} />
                    </TouchableOpacity>
                )}
                keyExtractor={event => event.id}
                ListEmptyComponent={<LoadingCard />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
});