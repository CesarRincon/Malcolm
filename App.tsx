import React from 'react';
import Video from 'react-native-video';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SerieDetail from './src/screens/SerieDetail';
import Episode from './src/screens/Episode';

function App(): JSX.Element {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SerieDetail"
          component={SerieDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Episode"
          component={Episode}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  backgroundVideo: {
    width: '100%',
    height: 300,
  },
});

export default App;
