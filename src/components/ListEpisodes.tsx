import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {data} from '../data/data';
import {useNavigation} from '@react-navigation/native';

interface IsOpen {
  name: string;
  value: boolean;
}

const ListEpisodes = ({currentEpisode}) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState<IsOpen>({name: '', value: false});

  const showEpisodes = (name: string) => {
    if (name !== isOpen.name && isOpen.value === true) {
      return setIsOpen({...isOpen, name});
    }
    setIsOpen({...isOpen, name, value: !isOpen.value});
  };

  return (
    <View style={styles.containerMain}>
      {data.map((item, index) => {
        return (
          <View key={item.temp}>
            <TouchableOpacity
              style={styles.itemTemp}
              onPress={() => showEpisodes(item.temp)}>
              <Text style={styles.itemTempText}>{item.temp}</Text>
              {isOpen.value && item.temp === isOpen.name ? (
                <Icon name="caret-up-outline" size={30} color="#fff" />
              ) : (
                <Icon name="caret-down-outline" size={30} color="#fff" />
              )}
            </TouchableOpacity>
            {isOpen.value && item.temp === isOpen.name && (
              <View style={styles.containerEpisodes} key={index + 5}>
                {item.espisodes.map((episode, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.containerEpisode,
                        episode?.capitulo === currentEpisode && {
                          borderRightWidth: 10,
                          borderRightColor: 'red',
                        },
                      ]}
                      key={episode.capitulo}
                      onPress={() =>
                        navigation.navigate('Episode', {
                          capitulo: episode.capitulo,
                          video: episode.url,
                        })
                      }>
                      <Text style={styles.textEpisode}>{episode.capitulo}</Text>
                      {episode?.capitulo === currentEpisode && (
                        <Icon name="eye-outline" size={25} color="#000" />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    width: 370,
    marginVertical: 10,
  },
  itemTemp: {
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  itemTempText: {
    color: '#fff',
    fontSize: 17,
  },
  containerEpisodes: {
    marginLeft: 20,
    marginTop: 8,
  },
  containerEpisode: {
    paddingVertical: 8,
    marginVertical: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textEpisode: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ListEpisodes;
