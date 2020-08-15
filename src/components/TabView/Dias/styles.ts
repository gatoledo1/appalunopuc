import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginVertical: 12,
    },
    scene: {
        flex: 1,
    },
    content: {
        paddingLeft: 12,
        flex: 1
    },
    card: {
        padding: 20,
        borderRadius: 16,
        backgroundColor: '#fff',
        elevation: 6,
    },
    grid: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        color: '#767676',
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#767676',
    },
    footer: {
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: '#DADADA',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
    },

});

export default styles;