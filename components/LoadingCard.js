import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Card from './Card';
import { eventStyles } from '../styles/global';

export default function LoadingCard(props) {
    return (
        <Card>
            <View style={styles.container} >
                <ActivityIndicator size="large" color="#FFCA36" />
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
    },
});