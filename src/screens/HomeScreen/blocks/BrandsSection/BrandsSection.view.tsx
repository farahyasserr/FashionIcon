import React from 'react';
import {View, FlatList, Image} from 'react-native';
import brands from '../../../../constants/dummydata/brands';
import Dividor from '../../../../ui/components/Dividor/Dividor.view';
import styles from './BrandsSection.styles';

const BrandsSection = (): JSX.Element => {
  type brandObject = {
    imagePath: any;
  };

  const renderItem = ({item}: {item: brandObject}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imagePath} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Dividor />
      <FlatList
        data={brands.data}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContentContainerStyle}
        style={styles.list}
      />
      <Dividor />
    </View>
  );
};

export default BrandsSection;
