import React, { Component, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../../components/PageHeader';
import { Feather } from '@expo/vector-icons'; 
import styles from '../styles'

export default class NotifyCurso extends Component {

    
  state = {
    data: [
      { id: 0, title: 'Etiam interdum justo ut aliquet', text: 'Etiam interdum justo ut aliquet pulvinar.' },
      { id: 1, title: 'Nunc facilisis tristique viverra', text: 'Mauris quis pellentesque est. Nunc facilisis tristique viverra.' },
      { id: 2, title: 'Praesent vel elit vel purus maximus', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 3, title: 'Lorem Ipsum Dolor', text: 'Etiam interdum justo ut aliquet pulvinar. Praesent vel elit vel purus maximus dictum blandit quis nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 4, title: 'Mauris quis pellentesque est', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam interdum justo ut aliquet pulvinar.' },
      { id: 5, title: 'Lorem Ipsum Dolor', text: 'Mauris quis pellentesque est. Nunc facilisis tristique viverra.' },
      { id: 6, title: 'Nunc facilisis tristique viverra', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum justo ut aliquet pulvinar. Praesent vel elit vel purus maximus dictum blandit quis nisi. Mauris quis pellentesque est. Nunc facilisis tristique viverra.' },
      { id: 7, title: 'Mauris quis pellentesque est', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum justo ut aliquet pulvinar.' },
      { id: 8, title: 'Praesent vel elit vel purus maximus', text: 'Etiam interdum justo ut aliquet pulvinar. Praesent vel elit vel purus maximus dictum blandit quis nisi.' },
      { id: 9, title: 'Lorem Ipsum Dolor', text: 'Praesent vel elit vel purus maximus dictum blandit quis nisi. Mauris quis pellentesque est. Nunc facilisis tristique viverra.' },
      
    ],
  };

  renderItem = ({ item }) => (
    <RectButton style={styles.cardItem}>
        <View style={styles.listItem}>
          <View style={styles.icon}>
            <Feather name="info" size={24} color="#2CC272" />
          </View>
          <Text style={styles.titleItem}>{item.title}</Text>
          <Text style={styles.textItem}>{item.text}</Text>
        </View>
    </RectButton>
    
  );

  render() {
    return (

        <View style={styles.container}>
            <PageHeader title="Notificações" backColor="#367DFF"></PageHeader>

                <ScrollView style={{ marginTop: -90 }}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </ScrollView >
        </View>
      
    );
  }
}