import { StyleSheet } from 'react-native';
import Colors from "../cores-global";

const styles = StyleSheet.create({
    activityIndicator: {
        position: 'absolute',
        right: 0,
        left: 0,
     },
    container: {
        flex: 1,
        backgroundColor: Colors.azulBack,
    },
    card: {
        paddingVertical: 20,
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