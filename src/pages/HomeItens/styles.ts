import { StyleSheet } from 'react-native';
import Colors from "../cores-global";
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azulBack,
    },
    cardsBlock:{
        
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
    row: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    badge: {
        backgroundColor: Colors.vermelho,
        width: 17,
        height: 17,
        color: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 6,
        lineHeight: 9,
        borderRadius: 50,

        top: -35,
        fontSize: 9,
    },
    links: {
        width: '47%',
        maxHeight: 165,
    },
    card: {
        width: '100%',
        height: 160,
        backgroundColor: Colors.cardsTable,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 50,
        marginBottom: 14,
    },
    textCard: {
        color: Colors.azulPrimary,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        width: 120,

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    footer: {
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: '#DADADA',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
    },
    logout: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    loguotText: {
        marginVertical: 15,
        color: Colors.vermelho,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
    },


});

export default styles;