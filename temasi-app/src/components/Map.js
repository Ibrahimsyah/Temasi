import React from 'react';
import { StyleSheet, Pressable, Linking, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 8,
    height: 200,
    overflow: 'hidden',
    borderRadius: 8,
  },

  map: {
    height: '100%',
  },
});

export const Map = ({ position }) => {
  const onMapPress = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${position.latitude},${position.longitude}`;
    const label = 'Directions';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  };
  return (
    <Pressable style={styles.mapContainer}>
      {position && (
        <MapView
          onPress={onMapPress}
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          initialRegion={{
            latitude: position.latitude,
            longitude: position.longitude,
            longitudeDelta: 0.003,
            latitudeDelta: 0.003,
          }}>
          <Marker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        </MapView>
      )}
    </Pressable>
  );
};
