import React, {Component} from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Img1 from '../../assets/images/campus-i-1.jpg';
import Img2 from '../../assets/images/campus-i-2.jpg';
import Swiper from 'react-native-swiper';
import styles from './styles';


const { width } = Dimensions.get('window');

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          autoplay={true}
          autoplayTimeout={6}
          height={240}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 7,
                height: 7,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#367DFF',
                width: 24,
                height: 7,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
            title={
              <Text style={styles.text} numberOfLines={2}>Campus I - CLC e CEATEC</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img1}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text} numberOfLines={2}>Campus I - CEATEC e Biblioteca</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img2}
            />
          </View>
          
          
        </Swiper>
      </View>
    )
  }
}

