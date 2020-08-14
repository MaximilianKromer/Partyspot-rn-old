import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { modalStyles } from '../styles/global';
import Modal from 'react-native-modal';

export default function CityChooser(props) {

    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.onCancel}
            backdropOpacity={0.4}
            backdropTransitionOutTiming={0}
            coverScreen={false}
            onSwipeComplete={props.onCancel}
            swipeDirection={'down'}
            onBackButtonPress={props.onCancel}
            propagateSwipe={true}
        >
            <View style={styles.modalContainer} >
                <SafeAreaView>

                    <Text style={modalStyles.headline} >Stadt</Text>

                    <View style={styles.options} >
                        <TouchableOpacity onPress={() => props.onSubmit('Berlin')} style={modalStyles.button} >
                            <Text style={modalStyles.buttonText} >Berlin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.button} >
                            <Text style={modalStyles.buttonText} >cooming soon...</Text>
                        </TouchableOpacity>
                    </View>

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
    },
    options: {
        flexDirection: 'row',
        marginBottom: 30,
        marginStart: 10,
        marginTop: 5,
    }
});