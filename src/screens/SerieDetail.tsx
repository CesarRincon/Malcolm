import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import TabDescription from '../components/TabDescription';

const SerieDetail = () => {
  return (
    <View style={styles.containerMain}>
      <Image
        style={styles.banner}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.njrzJIPg6zp972jtFsMIrAHaEK?pid=ImgDet&rs=1',
        }}
      />
      <TabDescription />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#1B1B1B',
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
});

export default SerieDetail;
