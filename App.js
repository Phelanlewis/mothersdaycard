import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            padding: 5,
            borderWidth: 5,
            borderColor: 'red',
            borderRadius: 20,
            backgroundColor: '#444'
          }}
          onPress={
            () => Alert.alert('Happy Mothers Day', 'From Up on the Mountain, Love Phelan')
          }>
          <Image
            source={{uri: 'https://s-media-cache-ak0.pinimg.com/236x/b1/5e/12/b15e12194f2e52530ab9f058f84dbf25.jpg'}}
            style={{
                    width: 200,
                    height: 200,
                    padding: 10,
                    margin: 10,
                    borderWidth: 5,
                    borderColor: 'red',
                    borderRadius: 20,
                  }}
          />
        </TouchableOpacity>
        <Image
          source={{uri: 'https://img.clipartfest.com/b194ddf2f9b1a6ba56619da460e83570_red-arrows-set-up-clip-art-symbols-arrow-pointing-up-clipart_450-592.png'}}
          style={{
            width: 100,
            height: 135,
            margin: 10,
          }}
        />
        <Text style={{
          padding: 20,
          overflow: 'hidden',
          borderRadius: 20,
          borderWidth: 5,
          fontSize: 30,
          backgroundColor: '#444',
          color: '#fff'
        }}>
          Click on Me!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
