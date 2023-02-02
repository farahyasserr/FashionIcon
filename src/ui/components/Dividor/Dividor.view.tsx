import React from 'react';
import {Image} from 'react-native';
import images from '../../../assets/images';
import styles from './Dividor.styles';

const Dividor = (): JSX.Element => {
  return <Image source={images.dividor} style={styles.dividor} />;
};

export default Dividor;
