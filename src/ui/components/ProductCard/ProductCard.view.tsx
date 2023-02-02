import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import TextView from '../Text/Text.view';
import styles from './ProductCard.styles';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

type ProductCard = {
  item: {[key: string]: any};
  cardWidth?: number | string;
  cardHeight?: number | string;
};

const ProductCard = ({
  item,
  cardWidth,
  cardHeight,
}: ProductCard): JSX.Element => {
  const mainContainerStyle = {
    ...styles.cardContainer,
    width: cardWidth ? cardWidth : '48%',
    height: cardHeight ? cardHeight : 280,
  };

  return (
    <TouchableOpacity style={mainContainerStyle}>
      <Image
        style={styles.productImage}
        source={{
          uri: 'https://' + item.imageUrl,
        }}
      />
      <TextView
        style={styles.nameText}
        numberOfLines={2}
        fontFamily={fonts.light}>
        {item.name}
      </TextView>

      <TextView
        color={colors.price}
        style={styles.priceText}
        fontFamily={fonts.regular}>
        {item.price.current.text}
      </TextView>
    </TouchableOpacity>
  );
};

export default ProductCard;
