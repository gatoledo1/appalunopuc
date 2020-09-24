import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f6ff',
    },
    list: {
      paddingHorizontal: 20,
    },
    cardItem: {
      backgroundColor: '#FFF',
      marginBottom: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 20,
      flex: 1,
      
    },
    listItem: {
  
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
      fontSize: 13,
      paddingLeft: 35,
      lineHeight: 25,
      flex: 1,
    },
    textItem: {
      fontFamily: 'Poppins_400Regular',
      color: '#6a6180',
      paddingTop: 10,
      fontSize: 12,
      lineHeight: 25,
      flex: 1,
    },
  });

export default styles;