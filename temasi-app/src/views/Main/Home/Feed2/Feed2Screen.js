import Geolocation from '@react-native-community/geolocation';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Feed2 = () => {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      setPosition({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );
  }, []);
  return (
    <>
      <View
        pointerEvents="none"
        style={{
          width: '100%',
          height: 200,
          overflow: 'hidden',
          borderRadius: 20,
        }}>
        {position && (
          <MapView
            style={{
              height: 150,
              margin: 20,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#000000',
            }}
            initialRegion={{
              latitude: position.latitude,
              longitude: position.longitude,
              longitudeDelta: 0.03,
              latitudeDelta: 0.03,
            }}>
            <Marker
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
            />
          </MapView>
        )}
      </View>
    </>
  );
};

export default Feed2;
