import React, { Component, } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
  } from 'react-native';

import Notes from './Notes';

class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ''
    }
  }

  render() {
    let notes = this.state.noteArray.map((value, key) => {
      return <Notes key={key} keyValue={value} deleteMethod={()=> this.deleteNote(key)} />
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Notes App</Text>
        </View>
        
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        
        <View style={styles.footer}>
          <TextInput
          style={styles.textInput}
          onChangeText={(noteText) => this.setState({noteText: noteText})}
          placeholder= 'Notes'
          placeholderTextColor='white'
          value={this.state.noteText}
          underlineColorAndroid='transparent'>
          </TextInput>
        </View>
        
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
        <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
  addNote() {

    if(this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + "/" + (d.getFullMonth+1) + "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26
    },
    scrollContainer: {
      flex: 1,
      marginBottom: 100,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#FFF',
      padding: 30,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#EDEDED'
    },
    addButton: {
      position: 'absolute',
//       zIndex: 11,
      right: 10,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 60,
      height: 60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#FFF',
      fontSize: 24,
    }
  });
export default Main