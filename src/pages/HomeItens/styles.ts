import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
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
        backgroundColor: '#F12020',
        color: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 6,
        lineHeight: 10,
        borderRadius: 50,
        marginLeft: 20,
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


});

export default styles;