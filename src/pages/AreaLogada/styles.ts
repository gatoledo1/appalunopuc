import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f6ff',
    },
    backgroungLogin: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    titleChildren: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 40,
        marginTop: -30,
        marginLeft: 20,
    },
    titleBold: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        paddingHorizontal: 60,
        paddingBottom: 40,
        color: '#367DFF',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    biometria: {
        flexDirection: 'row',
        width: 210,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    button: { 
        height: 24, 
        backgroundColor: '#367DFF', 
        borderRadius: 25, 
        paddingVertical: 24, 
        paddingHorizontal: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    }, 

    buttonText: { 
        fontFamily: 'Poppins_400Regular', 
        color: '#FFF',
        fontSize: 18, 
        justifyContent: 'center'
    },
    fingerText: { 
        fontFamily: 'Poppins_400Regular', 
        color: '#aaa',
        fontSize: 14, 
        justifyContent: 'center'
    },
    label: { 
        color: '#367DFF',
        fontFamily: 'Poppins_400Regular',
    },
    input: { 
    height: 40, 
    borderRadius: 8,
    fontSize: 18, 
    justifyContent: 'center', 
    paddingHorizontal: 16, 
    borderBottomColor: '#367DFF',
    borderBottomWidth: 1,
    width: '93%'
    },
    passwordContainer: {
        flexDirection: 'row',
        width: '70%'
    },
    iconEye: {

        
    },

});

export default styles;
