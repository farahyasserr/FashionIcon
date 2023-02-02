import React from 'react';
import {Text, TextStyle} from 'react-native';
import * as Animatable from 'react-native-animatable';
import fonts from '../../theme/fonts';

type TextComponent = {
  color?: string;
  fontFamily?: string;
  children: JSX.Element | string;
  size?: number;
  style?: TextStyle;
  animation?: string;
  [x: string]: any;
};

export default ({
  fontFamily,
  color,
  children,
  size,
  style,
  animation,
  ...props
}: TextComponent): JSX.Element => {
  const customStyle: TextStyle = {
    fontFamily: fontFamily ? fontFamily : fonts.regular,
    color: color,
    fontSize: size,
    textAlign: 'center',
    ...style,
  };

  return (
    <>
      {animation ? (
        <Animatable.Text animation={animation} style={customStyle} {...props}>
          {children}
        </Animatable.Text>
      ) : (
        <Text style={customStyle} {...props}>
          {children}
        </Text>
      )}
    </>
  );
};
