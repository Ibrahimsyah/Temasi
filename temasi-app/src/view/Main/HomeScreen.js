import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';

export default props => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(value => value + 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Hehe - {count}</Text>
        <Pressable onPress={onButtonClick}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </>
  );
};
