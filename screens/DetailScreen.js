import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import { eventStyles } from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailCard from '../components/DetailCard';
import Options from '../components/Options';

export default function DetailScreen(props) {

    return (
        <SafeAreaView>

            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                <Card>
                    <View style={styles.header} >
                        <Text style={eventStyles.slogan} >Finde weitere Events auf</Text>
                        <Text style={eventStyles.url} >www.Party-Spot.de</Text>
                    </View>
                </Card>
            </TouchableOpacity>

            <DetailCard event={props.route.params.event} />

            <Options event={props.route.params.event} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginVertical: 6,
    },
    dateContainer: {
        flexDirection: 'row',
    },
});