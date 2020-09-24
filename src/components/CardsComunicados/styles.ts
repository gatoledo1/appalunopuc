import { StyleSheet } from 'react-native';
import Colors from "../../pages/cores-global";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#e6e6f0',
        borderRadius: 12, 
        marginBottom: 25, 
        overflow: 'hidden',
    },
    profile: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 24, 
        width: '100%',
    },
    imgProfile: {
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 6,
        borderRadius: 50,
        backgroundColor: '#F7FAFF',
    },
    avatar: { 
        width: 42, 
        height: 42, 
    },
    profileInfo: {
        alignItems: 'center', 
        padding: 24, 
        width: '100%',
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264d',
        fontSize: 18,
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        maxWidth: '100%'
    },
    bio: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
        marginHorizontal: 24,
        lineHeight: 27,
        textAlign: 'justify',
    },
    footer: {
        paddingHorizontal: 24,
        paddingBottom: 32, 
        alignItems: 'stretch',
        marginTop: 22,
    }, 

    buttonsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    favoriteButton: {
        backgroundColor: '#367DFF',
        width: 42, 
        height: 42, 
        borderRadius: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    favorited: {
        backgroundColor: Colors.cinzaText,
    },
    
    contactButton: {
        backgroundColor: '#FFC300', 
        width: 130,
        height: 42, 
        borderRadius: 50, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 4,
    },
    contactButtonText: {
        color: '#fff',
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: 16, 
    }, 


});

export default styles;