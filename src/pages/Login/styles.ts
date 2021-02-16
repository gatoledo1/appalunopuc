import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    activityIndicator: {
        position: 'absolute',
        right: 10,
     },
    container: {
        flex: 1,
        backgroundColor: "#e7f0fe",
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
        marginBottom: 10,
        height: 100,
        resizeMode: 'contain',
    },

    label: { 
        color: "#367DFF",
        fontFamily: 'Poppins_400Regular',
    },

    input: { 
        height: 30, 
        borderRadius: 8, 
        justifyContent: 'center', 
        paddingHorizontal: 16,
        marginBottom: 5,
        borderBottomColor: "#B6CEFF",
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
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 22,
    },

    button: { 
        backgroundColor: "#367DFF", 
        borderRadius: 22, 
        height: 45, 
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
});

export default styles;
