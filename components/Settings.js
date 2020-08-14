import React from 'react';
import { StyleSheet, View } from 'react-native';
import SettingsButton from './SettingsButton';

export default function Settings(props) {
    return (
        <View style={styles.container}>
            <SettingsButton 
                show={props.show}
                options={props.options} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
    }
});