import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { modalStyles } from '../styles/global';
import Modal from 'react-native-modal';
import Slider from 'react-native-slider';

export default function DistanceChooser(props) {
    const [distance, setDistance] = useState(props.initialDistance);

    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={() => props.onSubmit(distance)}
            backdropOpacity={0.4}
            backdropTransitionOutTiming={0}
            coverScreen={false}
            onSwipeComplete={() => props.onSubmit(distance)}
            swipeDirection={'down'}
            onBackButtonPress={() => props.onSubmit(distance)}
            propagateSwipe={true}
        >
            <View style={styles.modalContainer} >
                <SafeAreaView>

                    <Text style={modalStyles.headline} >Umkreis</Text>
                    
                    <Text style={modalStyles.sliderText} >{distance} km</Text>

                    <Slider
                        value={distance}
                        onValueChange={(value) => setDistance(value)}
                        style={styles.sliderStyle}
                        minimumValue={1}
                        maximumValue={60}
                        step={1}
                        minimumTrackTintColor="#FFCA36"
                        maximumTrackTintColor="#CCCCCC"
                        thumbTintColor="#FFFFFF"
                        thumbStyle={styles.thumbStyle}
                    />

                </SafeAreaView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        bottom: 0, 
        position: 'absolute',
        width: '100%',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    thumbStyle: {
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    sliderStyle: {
        width: 230,
        marginTop: 15,
        marginBottom: 35,
    }
});