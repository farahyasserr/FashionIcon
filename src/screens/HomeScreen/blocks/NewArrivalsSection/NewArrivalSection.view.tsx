import React from 'react';
import {View, FlatList} from 'react-native';
import Dividor from '../../../../ui/components/Dividor/Dividor.view';
import ProductCard from '../../../../ui/components/ProductCard/ProductCard.view';
import TextView from '../../../../ui/components/Text/Text.view';
import styles from './NewArrivalSection.styles';

type NewArrivalSection = {
  data: {[key: string]: any};
};

const renderItem = ({item}: {[key: string]: any}): JSX.Element => (
  <ProductCard item={item} />
);

const NewArrivalSection = ({data}: NewArrivalSection): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <TextView>{data.categoryName}</TextView>
      <Dividor />
      {data.products && (
        <FlatList
          numColumns={2}
          data={data.products.slice(0, 4)}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      )}
    </View>
  );
};

export default NewArrivalSection;
