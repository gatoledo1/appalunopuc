import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, Animated, Easing } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../../components/PageHeader';

export default class NotifyCurso extends Component {

    
  state = {
    data: [
      { id: 0, full_name: 'Repo 6' },
      { id: 1, full_name: 'Repo 7' },
      { id: 2, full_name: 'Repo 8' },
      { id: 3, full_name: 'Repo 9' },
      { id: 4, full_name: 'Repo 10' },
      { id: 5, full_name: 'Repo 11' },
      { id: 6, full_name: 'Repo 12' },
      { id: 7, full_name: 'Repo 13' },
      { id: 8, full_name: 'Repo 14' },
      { id: 9, full_name: 'Repo 15' },
      
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.full_name}</Text>
    </View>
  );

  render() {
    return (

        <View style={styles.container}>
            <PageHeader title="Notificações" backColor="#367DFF"></PageHeader>

                <ScrollView style={{ marginTop: -90 }}>
                    <StatusBar style="dark" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFF',
  },
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#FFF',
    marginTop: 10,
    padding: 30,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 3,
  },
});