import { StyleSheet } from 'react-native';
import Colors from "./colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
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
        paddingBottom: 20,
        color: '#367DFF',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: { 
        height: 24, 
        backgroundColor: '#367DFF', 
        borderRadius: 50, 
        paddingVertical: 24, 
        paddingHorizontal: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    }, 

    buttonText: { 
        fontFamily: 'Poppins_400Regular', 
        color: '#FFF',
        fontSize: 18, 
        justifyContent: 'center'
    },

});

export default styles;
