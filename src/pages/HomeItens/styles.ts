import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
    },
    cardsBlock:{
        marginTop: -60,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    links: {
        width: '47%',
        maxHeight: 165,
    },
    card: {
        width: '100%',
        height: 160,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 6,
    },
    icon: {
        height: 50,
        marginBottom: 14,
    },
    textCard: {
        color: '#367DFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        width: 120,
        paddingLeft: '10%'
    },
    footer: {
        marginTop: 12,
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