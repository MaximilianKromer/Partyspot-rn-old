import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
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