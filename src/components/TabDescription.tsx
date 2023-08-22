import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ListEpisodes from './ListEpisodes';

const TabDescription = ({currentEpisode}) => {
  const [isEpidodes, setIsEpidodes] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabs,
            isEpidodes && {borderBottomColor: 'red', opacity: 1},
          ]}
          onPress={() => setIsEpidodes(true)}>
          <Text style={styles.title}>Episodios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabs,
            !isEpidodes && {borderBottomColor: 'red', opacity: 1},
          ]}
          onPress={() => setIsEpidodes(false)}>
          <Text style={styles.title}>Descripción</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={false}
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainerScroll}>
        {isEpidodes ? (
          <View style={styles.containerEpisodes}>
            <ListEpisodes currentEpisode={currentEpisode}/>
          </View>
        ) : (
          <View style={styles.containerDescription}>
            <View style={styles.itemTabReseña}>
              <Text style={{...styles.subTitle, marginBottom: 2}}>Reseña:</Text>
              <Text style={styles.textItem}>
                El show se centra en Malcolm lidiando con las dificultades de
                ser un adolescente y aguantar las excentricidades de su vida y
                de su familia. La historia inicia cuando se descubre que
                Malcolm, quien al igual que sus hermanos es calificado como un
                chico con tendencia al desorden y la mala conducta, es un chico
                genio con un IQ radicalmente sobre la media, por lo que es
                reasignado a la clase de superdotados, un salón lleno de chicos
                nerds acostumbrados a ser abusados por los otros alumnos y
                consentidos por los profesores. En las siguientes temporadas
                gradualmente se explora a otros miembros de la familia y sus
                amigos en mayor profundidad, incluyendo a otros personajes como
                Craig Feldspar, el compañero de trabajo de Lois y el amigo de
                Malcolm, Stevie Kenarban o su padre, Abe.
              </Text>
            </View>
            <View style={styles.itemTab}>
              <Text style={styles.subTitle}>Episodios:</Text>
              <Text style={styles.textItem}>151</Text>
            </View>
            <View style={styles.itemTab}>
              <Text style={styles.subTitle}>Idioma:</Text>
              <Text style={styles.textItem}>Español Latino</Text>
            </View>
            <View style={{...styles.itemTab, borderBottomWidth: 0}}>
              <Text style={styles.subTitle}>Año:</Text>
              <Text style={styles.textItem}>2000</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    backgroundColor: '#0B0B0B',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  tabs: {
    borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    opacity: 0.5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  containerDescription: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '95%',
    padding: 10,
    marginTop: 12,
    borderRadius: 8,
  },
  containerEpisodes: {
    flex: 1,
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerScroll: {
    alignItems: 'center',
  },
  itemTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTabReseña: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 10,
  },
  textItem: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default TabDescription;
