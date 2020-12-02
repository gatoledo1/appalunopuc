import React, {Component} from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Img1 from '../../assets/images/CampusI_01.jpg';
import Img2 from '../../assets/images/CampusI_02.jpg';
import Img3 from '../../assets/images/CampusI_03.jpg';
import Img4 from '../../assets/images/CCHSA_3.jpg';
import Img5 from '../../assets/images/CampusII_01.jpg';
import Img6 from '../../assets/images/CampusII_04.jpg';
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
              <Text style={styles.text} numberOfLines={2}>Campus I - CEATEC</Text>
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
              <Text style={styles.text} numberOfLines={2}>Campus I - Biblioteca e Mescla</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img2}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text} numberOfLines={2}>Campus I - CLC e CEATEC</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img3}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text} numberOfLines={2}>Campus I - CCHSA</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img4}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text} numberOfLines={2}>Campus II - Ciências da Vida</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img5}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text style={styles.text} numberOfLines={2}>Campus II - Ciências da Vida</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={Img6}
            />
          </View>
          
          
        </Swiper>
      </View>
    )
  }
}

