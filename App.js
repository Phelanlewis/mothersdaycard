import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ padding: 5, borderRadius: 5 }}
          onPress={() => Alert.alert('Happy Mothers Day', 'From Up on the Mountain')}
        >
          <Image
            source={{uri: 'https://s-media-cache-ak0.pinimg.com/236x/b1/5e/12/b15e12194f2e52530ab9f058f84dbf25.jpg'}}
            style={{
                    width: 200,
                    height: 200,
                    marginBottom: 10,
                    borderWidth: 5,
                    borderColor: 'red',
                    borderRadius: 10
                  }}
          />
        </TouchableOpacity>
        <Image
          source={{uri: 'https://img.clipartfest.com/b194ddf2f9b1a6ba56619da460e83570_red-arrows-set-up-clip-art-symbols-arrow-pointing-up-clipart_450-592.png'}}
          style={{width: 100, height: 130, marginTop: 10, marginBottom: 10}}
        />
        <Text style={{ padding: 10, borderRadius: 10, fontSize: 30, backgroundColor: '#444', color: '#fff' }}>Click on Me!</Text>
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
