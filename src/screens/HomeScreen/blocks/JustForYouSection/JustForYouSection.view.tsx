import React from 'react';
import {View, FlatList} from 'react-native';
import Dividor from '../../../../ui/components/Dividor/Dividor.view';
import ProductCard from '../../../../ui/components/ProductCard/ProductCard.view';
import TextView from '../../../../ui/components/Text/Text.view';
import styles from './JustForYouSection.styles';

type JustForYouSection = {
  data: {[key: string]: any};
};

const renderItem = ({item}: {[key: string]: any}): JSX.Element => (
  <ProductCard item={item} cardWidth={250} cardHeight={400} />
);

const JustForYouSection = ({data}: JustForYouSection): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <TextView>{data.categoryName}</TextView>

      <Dividor />
      {data.products && (
        <FlatList
          data={data.products.slice(0, 8)}
          renderItem={renderItem}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default JustForYouSection;
