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
    card: {
        paddingVertical: 24,
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#e6e6f0',
        borderRadius: 12, 
        marginBottom: 25, 
        overflow: 'hidden',
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