import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderBottomRightRadius: 120,
    },
    topBar: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    headerBackground: {
        width: '100%',
        height: 180,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        fontSize: 22,
        maxWidth: 400,
        marginTop: 10,
        marginLeft: 10,
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 13,
        maxWidth: 400,
        marginLeft: 10,
    },
    imgHeader: {
        width: 120,
    },
    arrowHeader: {
        height: 30,
        width: 30,

    },


});

export default styles;