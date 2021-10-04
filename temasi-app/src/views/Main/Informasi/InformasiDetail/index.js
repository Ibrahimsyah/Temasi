import { useRoute } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  loadingIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

const LoadingIndicator = () => {
  return (
    <>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="small" />
      </View>
    </>
  );
};
export default () => {
  const route = useRoute();
  const { url } = route.params;

  return (
    <>
      <WebView
        source={{ uri: url }}
        startInLoadingState={true}
        renderLoading={() => <LoadingIndicator />}
      />
    </>
  );
};
