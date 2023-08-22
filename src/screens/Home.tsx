import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Bienvenido</Text>
      <View>
        <Text>Series:</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SerieDetail', {name: 'SerieDetail'})
          }>
          <Text>Malcom en el medio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home