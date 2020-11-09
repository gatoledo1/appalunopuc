import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 260,
        height: 400,
        borderRadius: 12,
        padding: 26,
        justifyContent: 'space-between',
        marginRight: 25
        
    },
    codigos: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    },
    codText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
    },
    titleCard: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        textTransform: 'capitalize',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    },
    textCard: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
    },
    textProf: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        textTransform: 'capitalize', 
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    },

  });

  export default styles;