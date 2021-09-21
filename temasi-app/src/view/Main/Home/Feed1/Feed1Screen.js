import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Feed1 = () => {
  const nav = useNavigation();

  const onNavClick = () => {
    nav.navigate('feed2');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello Form Feed 2</Text>
      <TouchableOpacity onPress={onNavClick}>
        <Text>Goto Feed 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed1;
