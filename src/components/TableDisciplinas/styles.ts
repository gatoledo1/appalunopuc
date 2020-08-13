import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
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
    table: {
        flexDirection: 'row',        
    },
    
    header: {

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
    textHead: {
        color: '#367DFF',
        fontFamily: 'Poppins_600SemiBold',
        paddingVertical: 12,
        borderBottomColor: '#ecf3ff',
        borderBottomWidth: 1,
        width: '100%',
    },
    text: { 
        fontFamily: 'Poppins_400Regular', 
        paddingVertical: 12,
        borderBottomColor: '#ecf3ff',
        borderBottomWidth: 1,
        width: '100%',
    }

  });

  export default styles;