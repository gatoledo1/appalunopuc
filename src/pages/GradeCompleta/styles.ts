import { StyleSheet } from 'react-native';
import Colors from "../cores-global";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azulBack,
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
    titleHead: { 
        flex: 1, 
        paddingHorizontal: 16,
        minWidth: 80,
        maxWidth: 130,
        borderRightWidth: 1,
        borderRightColor: '#B6CEFF',
        width: '100%',
    },
    title: { 
        flex: 1, 
        paddingHorizontal: 16,
        minWidth: 80,
        maxWidth: 200,
        borderLeftWidth: 1,
        borderLeftColor: '#B6CEFF',
        width: '100%',
    },
    containerTable: { 
        flex: 1,
        alignItems: 'center', 
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 9,
    },
    textHead: {
        color: '#367DFF',
        fontFamily: 'Poppins_600SemiBold',
        paddingVertical: 12,
        borderBottomColor: '#ecf3ff',
        borderBottomWidth: 1,
        width: '100%',
    },
    table: {
        flexDirection: 'row',        
    },
    tableHead2: {
      fontFamily: 'Poppins_400Regular',
      color: Colors.azulPrimary,
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
        backgroundColor: Colors.azulBack 
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