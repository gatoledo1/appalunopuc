import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        justifyContent: 'space-between',
        padding: 40,
        height: '100%'
    },

    backgroungLogin: {
        flex: 1,
        width: '100%',
    },

    imgCover: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 250,
        
    },

    banner: {
        height: 200,
        resizeMode: 'contain',
    },

    label: { 
        color: '#367DFF',
        fontFamily: 'Poppins_400Regular',
    },

    input: { 
        height: 40, 
        borderRadius: 8, 
        justifyContent: 'center', 
        paddingHorizontal: 16, 
        marginTop: 4, 
        borderBottomColor: '#B6CEFF',
        borderBottomWidth: 1,
    },

    title: {
        paddingBottom: 34,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 22,
    },

    button: { 
        height: 24, 
        backgroundColor: '#367DFF', 
        borderRadius: 50, 
        padding: 24, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 34,
    }, 

    buttonText: { 
        fontFamily: 'Poppins_400Regular', 
        color: '#FFF',
        fontSize: 18, 
        justifyContent: 'center'
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    imgLogo: {
        resizeMode: 'contain',
        width: 100,
    },

    footer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 34,
    }
});

export default styles;
