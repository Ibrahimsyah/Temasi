import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../config/style';

const styles = StyleSheet.create({
  input: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    borderRadius: 20,
    backgroundColor: Color.MED_GRAY,
  },
  hiddenButton: {
    position: 'absolute',
    right: 20,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default props => {
  const [hidden, setHidden] = useState(true);
  const { style, placeholder, value, onChange, type, ...rest } = props;

  return (
    <View style={{ width: '100%', ...style }}>
      <TextInput
        {...rest}
        secureTextEntry={type === 'password' && hidden}
        textAlignVertical="top"
        style={{ ...styles.input }}
        placeholder={placeholder}
        placeholderTextColor={Color.DARK_GRAY}
        autoCorrect={false}
        onChangeText={onChange}
        value={value}
      />
      {type === 'password' && (
        <View style={styles.hiddenButton}>
          <Icon
            name={!hidden ? 'eye-slash' : 'eye'}
            color={Color.DARKER_GRAY}
            onPress={() => setHidden(!hidden)}
          />
        </View>
      )}
    </View>
  );
};
