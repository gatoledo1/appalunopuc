import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    },
    
    horas: {
        fontFamily: 'Poppins_400Regular',
        color: '#bbb',
        fontSize: 13,
        paddingBottom: 14,
        borderBottomColor: '#e7f0ff',
        borderBottomWidth: 1,
    },
    ano: {
        paddingTop: 12,
        fontFamily: 'Poppins_600SemiBold',
        color: '#367DFF',
        fontSize: 14,
        lineHeight: 27,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264d',
        fontSize: 14,
        lineHeight: 27,
        textTransform: 'capitalize',
    },
    condicao: {
        fontFamily: 'Poppins_400Regular_Italic',
        color: '#367DFF',
        fontSize: 14,
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
        backgroundColor: '#367DFF',
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