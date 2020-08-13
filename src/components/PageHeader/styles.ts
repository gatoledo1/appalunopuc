import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 40,
        paddingHorizontal: 20,
        backgroundColor: '#367DFF',
    },
    topBar: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerBackground: {
        width: '100%',
        height: 180
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        fontSize: 22,
        lineHeight: 32,
        maxWidth: 200,
        marginBottom: 40,
        marginTop: 20,
        marginLeft: 20,
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
    imgHeader: {
        width: 90,
    },
    arrowHeader: {
        height: 30,
        width: 30,
    },


});

export default styles;