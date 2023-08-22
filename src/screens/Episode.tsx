import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import TabDescription from '../components/TabDescription';
import ButtonGoBack from '../components/ButtonGoBack';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';
import {ActivityIndicator} from 'react-native';

const Episode = ({route}) => {
  const {capitulo, video} = route?.params;
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setIsProgress] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(true);
  const ref = useRef();

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <View style={styles.containerMain}>
      <TouchableOpacity
        style={[styles.screenPlayer, fullScreen && {height: '100%'}]}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Video
          source={{
            uri: video,
          }} // the video file
          paused={!isPlaying} // make it start
          ref={ref}
          style={styles.backgroundVideo} // any style you want
          repeat={false} // make it a loop
          muted={false}
          onLoad={x => x.duration > 0 && setIsLoading(false)}
          FullScreen={fullScreen}
          fullscreenOrientation="landscape"
          onProgress={x => setIsProgress(x)}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            style={styles.screenControls}
            onPress={() => handleClicked()}>
            {isLoading ? (
              <ActivityIndicator color={"#fff"} size={25}/>
            ) : (
              <>
                <ButtonGoBack size={28} />
                <View style={styles.controls}>
                  <TouchableOpacity
                    onPress={() =>
                      ref?.current?.seek(parseInt(progress?.currentTime) - 10)
                    }>
                    <Icon
                      name="play-back-circle-outline"
                      size={40}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconPlayOrPause}
                    onPress={() => setIsPlaying(!isPlaying)}>
                    <Icon
                      name={
                        !isPlaying
                          ? 'play-circle-outline'
                          : 'pause-circle-outline'
                      }
                      size={40}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      ref?.current?.seek(parseInt(progress?.currentTime) + 10);
                    }}>
                    <Icon
                      name="play-forward-circle-outline"
                      size={40}
                      color="#fff"
                    />
                  </TouchableOpacity>
                </View>
                {progress?.currentTime >= 0 && (
                  <View style={styles.barProgressContainer}>
                    <Text style={styles.textTime}>
                      {format(progress?.currentTime)}
                    </Text>
                    <Slider
                      style={styles.barProgress}
                      minimumValue={0}
                      maximumValue={progress?.seekableDuration}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#fff"
                      onValueChange={time => {
                        ref?.current?.seek(time);
                      }}
                    />
                    <Text style={styles.textTime}>
                      {format(progress?.seekableDuration)}
                    </Text>
                  </View>
                )}
                <TouchableOpacity
                  style={styles.fullScreenIcon}
                  onPress={() => {
                    if (fullScreen) {
                      Orientation.lockToPortrait();
                      StatusBar.setHidden(false);
                    } else {
                      Orientation.lockToLandscape();
                      StatusBar.setHidden(true);
                    }
                    setFullScreen(!fullScreen);
                  }}>
                  <Icon
                    name={fullScreen ? 'contract-outline' : 'expand-outline'}
                    size={25}
                    color="#fff"
                  />
                </TouchableOpacity>
              </>
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{capitulo}</Text>
      <TabDescription currentEpisode={capitulo} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#1B1B1B',
    flex: 1,
  },
  screenPlayer: {
    width: '100%',
    height: 300,
  },
  banner: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 23,
    color: '#fff',
    backgroundColor: '#000',
    paddingLeft: 10,
  },
  backgroundVideo: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  screenControls: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
  },
  iconPlayOrPause: {
    marginHorizontal: 40,
  },
  barProgressContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
  },
  barProgress: {
    width: '78%',
    height: 40,
  },
  textTime: {
    color: '#fff',
  },
  fullScreenIcon: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Episode;
