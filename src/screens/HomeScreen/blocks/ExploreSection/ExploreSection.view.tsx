import React from 'react';
import TextView from '../../../../ui/components/Text';
import * as Animatable from 'react-native-animatable';
import colors from '../../../../ui/theme/colors';
import fonts from '../../../../ui/theme/fonts';
import {ImageBackground, View} from 'react-native';
import images from '../../../../assets/images';
import styles from './ExploreSection.styles';
import Button from '../../../../ui/components/Button/Button.view';

const ExploreSection = (): JSX.Element => {
  return (
    <Animatable.View animation="fadeInDown">
      <ImageBackground
        source={images.homeScreen.mainHomeImage}
        style={styles.imageBackground}>
        <View style={styles.mainTextContainer}>
          <TextView
            color={colors.darkGray}
            style={styles.mainText}
            size={30}
            animation="fadeInLeft">
            LUXURY
          </TextView>
          <TextView
            color={colors.darkGray}
            style={styles.mainText}
            size={30}
            fontFamily={fonts.italic}
            animation="fadeInLeft">
            FASHION
          </TextView>
          <TextView
            color={colors.darkGray}
            style={styles.mainText}
            size={30}
            fontFamily={fonts.light}
            animation="fadeInLeft">
            & ACCESSORIES
          </TextView>
        </View>
        <Button
          viewStyle={styles.exploreButton}
          backgroundColor={colors.black}
          title="EXPLORE COLLECTION"
          titleColor={colors.white}
          fontFamily={fonts.regular}
        />
      </ImageBackground>
    </Animatable.View>
  );
};

export default ExploreSection;
