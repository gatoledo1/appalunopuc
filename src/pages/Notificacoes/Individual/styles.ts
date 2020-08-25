import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
    },
    content: {
        marginTop: -80,
    },
    card: {
        paddingVertical: 24,
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#e6e6f0',
        borderRadius: 12, 
        marginBottom: 25, 
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 6,
    },
    ano: {
        paddingHorizontal: 24,
        fontFamily: 'Poppins_600SemiBold',
        color: '#367DFF',
        fontSize: 20,
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
    }

});

export default styles;