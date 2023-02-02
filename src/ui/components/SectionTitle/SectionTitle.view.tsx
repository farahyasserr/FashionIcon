import React from 'react';
import {TextStyle} from 'react-native/types';
import TextView from '../Text/Text.view';
import styles from './SectionTitle.styles';

type SectionTitle = {
  title: string;
  style?: TextStyle;
};

const SectionTitle = ({title, style}: SectionTitle): JSX.Element => {
  const customStyle: TextStyle = {...styles.title, ...style};

  return <TextView style={customStyle}>{title}</TextView>;
};

export default SectionTitle;
