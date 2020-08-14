import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShareButton from './ShareButton';

export default function Options(props) {
    return (
        <View style={styles.container}>
            <ShareButton event={props.event} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
    }
});