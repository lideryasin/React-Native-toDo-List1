/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import Button from './src/component/Button';

const items = [];
export default class App extends Component {

  constructor(props){
    super(props)

    this.addItems = this.addItems.bind(this)
  }

  state = {
    toDo: '',
  }

  addItems() {

    items.push(this.state.toDo)
    this.setState({ toDo: '' })

  }

  render2(item) {
    return (
      <View style={{ height: 100, margin: 10, backgroundColor: '#024f7d', borderRadius: 10 }}>
        <Text>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#024f7d', padding: 4, flexDirection: 'row', height: 100, }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 15, flex: 4, marginRight: 4 }}>
            <TextInput value={this.state.toDo} onChangeText={(v)=> this.setState({ toDo: v })} style={{ borderRadius: 10, backgroundColor: '#ccc', height: 30, marginTop: 25 }} />
          </View>
          <View style={{ backgroundColor: '#fff', borderRadius: 15, flex: 1 }}>
            <Button onPress={this.addItems} text={'Ekle'} />
          </View>
        </View>
        <ScrollView>
          {
            items.map( (item) => this.render2(item) )
          }
        </ScrollView>
      </View>
    );
  }
}

/*const styles = StyleSheet.create({
});*/
