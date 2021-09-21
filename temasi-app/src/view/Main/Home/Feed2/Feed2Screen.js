import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';

const colors = ['#ff00ff', '#ffff00', '#ffffff'];
const Feed2 = () => {
  const [color, setColor] = useState(colors[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(colors[Math.round(Math.random() * 2)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Form Feed 2</Text>
      </View>
    </>
  );
};

export default Feed2;
