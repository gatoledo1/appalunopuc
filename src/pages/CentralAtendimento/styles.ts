import { StyleSheet } from 'react-native';
import Colors from "../cores-global";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f6ff',
    },
    list: {
      paddingHorizontal: 20,
      paddingBottom: 60,
    },
    cardItem: {
      backgroundColor: '#FFF',
      marginBottom: 20,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 20,
      flex: 1,
      
    },
    icon: {
      borderTopLeftRadius: 20, 
      borderBottomRightRadius: 14,
      backgroundColor: '#e5fff1', 
      padding: 12,
      position: 'absolute', 
      left: -20, 
      top: -15,
    },
    titleItem: {
      fontFamily: 'Poppins_600SemiBold',
      color: '#6a6180',
      fontSize: 15,
      paddingLeft: 40,
      lineHeight: 25,
      flex: 1,
    },
    textItem: {
      fontFamily: 'Poppins_400Regular',
      color: '#6a6180',
      paddingTop: 20,
      paddingBottom: 10,
      fontSize: 13,
      lineHeight: 25,
      flex: 1,
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