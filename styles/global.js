import { StyleSheet } from 'react-native';

export const eventStyles = StyleSheet.create({
    headline: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        color: '#141823',
    },
    locationHeader: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        color: '#141823',
    },
    location: {
        fontFamily: 'OpenSans-Light',
        fontSize: 16,
        color: '#141823',
    },
    locationBold: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
        color: '#141823',
    },
    distance: {
        fontFamily: 'OpenSans-Light',
        fontSize: 16,
        color: '#141823',
    },
    date: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18,
        color: '#141823',
    },
    time: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 18,
        color: '#141823',
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: '#141823',
    },
    slogan: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: '#141823',
    },
    url: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        color: '#141823',
    },
});

export const buttonStyles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        color: '#ffffff',
        marginHorizontal: 10,
    },
    smallButton: {
        height: 30,
        backgroundColor: '#FFCA36',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        margin: 10,
    },
});

export const landingStyles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 22,
        letterSpacing: 1.6,
        color: '#141823',
        marginVertical: 20,
    },
    buttonText: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 22,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        letterSpacing: 2.6,
    },
    impressumText: {
        marginTop: 12,
        fontFamily: 'OpenSans-Light',
        color: '#666',
        fontSize: 12,
        letterSpacing: 2.2,
    },
});

export const modalStyles = StyleSheet.create({
    headline: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        color: '#333333',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
    },
    buttonText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        marginHorizontal: 15,
        marginVertical: 10,
        color: '#333333',
    },
    button: {
        borderStyle: 'solid',
        borderColor: '#999999',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
    },
    sliderText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        marginHorizontal: 15,
        marginVertical: 10,
        color: '#333333',
        textAlign: 'center',
    },
});