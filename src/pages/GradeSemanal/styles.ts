import { StyleSheet } from 'react-native';
import Colors from "../cores-global";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azulBack,
    },
    content: {
        marginTop: -80,
    },
    scene: {
        flex: 1,
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