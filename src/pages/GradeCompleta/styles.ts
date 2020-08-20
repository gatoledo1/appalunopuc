import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
    },
    content: {
        marginTop: -90,
    },
    tableHead: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 18,
        paddingLeft: 15,
        paddingVertical: 8,
    },
    tableHead2: {
      fontFamily: 'Poppins_400Regular',
      color: '#367DFF',
      fontSize: 18,
      paddingLeft: 15,
      paddingVertical: 8,
  },
    arrowRotate: {
        transform: [{ rotate: "180deg" }],
        marginRight: 30,
    },

    head: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    text: { 
        textAlign: 'center', 
        fontWeight: '200' 
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 40, 
        backgroundColor: '#F7F8FA' 
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