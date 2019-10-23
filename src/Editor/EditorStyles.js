import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { width: '100%' },
    textContainer: {
        alignSelf: 'stretch',
        position: 'relative',
        maxHeight: 140,
    },
    input: {
        paddingTop: 0,
        fontSize: 16,
        color: '#000',
        fontWeight: '400',
        position: 'absolute',
        top: 0,
        color: 'transparent',
        alignSelf: 'stretch',
        width: '100%',
    },
    formmatedTextWrapper: {
        position: 'absolute',
        top: 0,
        width: "100%",
    },
    formmatedText: {
        fontSize: 16,
        fontWeight: '400',
    },
    mention: {
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: 'rgba(36, 77, 201, 0.05)',
        color: '#244dc9',
    },
    placeholderText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 16,
    }
})
