import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import db from '../config';
import { SearchBar } from 'react-native-elements';

export default class Read extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      author: '',
      story: '',
      ref: [],
    };
  }

  searchStory = async (text) => {
    const storyRef = await db.collection('stories').where('title', '===', text).get();

    storyRef.docs.map((doc) => {
      this.setState({
        ref:[...this.state.ref, doc.data()],
          author: doc.data().author,
          story: '',
      });
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#A8D1DF', margin: 0, height: 700 }}>

        <View style={styles.head}>
          <Text style={styles.headT}> Read Stories ...</Text>
        </View>

        <TextInput
          style={styles.inputBox}

          placeholder="Search Here - Title of The Story"
          onChangeText={(text) => {
            this.setState({
              search: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.searchStory(this.state.search);
          }}
          style={styles.button}>
          <Text style={{color: 'white',fontSize: 20,fontWeight: 'bold'}}> 
            Go
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={styles.text}>
            Title : {this.state.search}
          </Text>
          <Text
            style={styles.text}>
            Author : {this.state.author}
          </Text>
          <Text
            style={styles.text}>
            Story : {this.state.story}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#FFD700',
    marginTop: 3,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    borderWidth: 2,
    borderColor: 'white',
    padding: 5,
  },

  headT: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
  },

  inputBox:{
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 30,
    marginRight: 15,
    marginTop: 30,
    width: 260,
    color: 'white',
  },

  button:{
    backgroundColor: '#FFD700',
    marginBottom: 5,
    textAlign: 'center',
    borderRadius: 100,
    borderWidth: 3,
    marginRight: 0,
    marginLeft: 270,
    borderColor: 'white',
    marginTop: -40,
    width: 50,
    alignItems: 'center'
  },

  text:{
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  }
});
