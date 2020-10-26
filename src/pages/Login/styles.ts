import { StyleSheet, ViewProps } from 'react-native';
import Colors from "../cores-global";


const styles = StyleSheet.create({
    activityIndicator: {
        position: 'absolute',
        right: 10,
     },
    container: {
        flex: 1,
        /*backgroundColor: Colors.azulBack,*/
        paddingHorizontal: 40,
        justifyContent: 'center'
    },
    backgroungLogin: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
    },

    imgCover: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',        
    },

    banner: {
        height: 120,
        marginBottom: 24,
        resizeMode: 'contain',
    },

    label: { 
        color: Colors.azulPrimary,
        fontFamily: 'Poppins_400Regular',
    },

    input: { 
        height: 40, 
        borderRadius: 8, 
        justifyContent: 'center', 
        paddingHorizontal: 16, 
        borderBottomColor: Colors.azulShadow,
        borderBottomWidth: 1,
        width: '100%'
    },
    passwordContainer: {
        flexDirection: 'row',
        width: '88%'
      },
    iconEye: {

        
    },
    title: {
        paddingBottom: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 22,
    },

    button: { 
        height: 24, 
        backgroundColor: Colors.azulPrimary, 
        borderRadius: 25, 
        padding: 24, 
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    }, 

    buttonText: { 
        fontFamily: 'Poppins_400Regular', 
        color: '#FFF',
        fontSize: 18, 
        justifyContent: 'center'
    },

    logo: {
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        top: 60,
        position: 'absolute'
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
