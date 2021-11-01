import React from 'react';
import { StyleSheet, View } from 'react-native';
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
  return (
    <View pointerEvents="none" style={styles.mapContainer}>
      {position && (
        <MapView
          style={styles.map}
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
    </View>
  );
};
