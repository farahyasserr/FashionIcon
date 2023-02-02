import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import images from '../../assets/images';
import colors from '../../ui/theme/colors';
import fonts from '../../ui/theme/fonts';
import BrandsSection from './blocks/BrandsSection/BrandsSection.view';
import JustForYouSection from './blocks/JustForYouSection/JustForYouSection.view';
import NewArrivalSection from './blocks/NewArrivalsSection/NewArrivalSection.view';
import styles from './HomeScreen.styles';
import Video from 'react-native-video';
import SectionTitle from '../../ui/components/SectionTitle/SectionTitle.view';
import ExploreSection from './blocks/ExploreSection/ExploreSection.view';

type HomeScreenView = {
  productsData: {[key: string]: any};
};

function HomeScreenView({productsData}: HomeScreenView): JSX.Element {
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <ExploreSection />
        <NewArrivalSection data={productsData} />
        <BrandsSection />

        <SectionTitle
          title="COLLECTIONS"
          style={{
            fontSize: 18,
            color: colors.darkGray,
            fontFamily: fonts.light,
          }}
          // size={20} //add props to section title
        />
        <Image
          style={{width: '100%', backgroundColor: 'red', height: 250}}
          resizeMode="cover"
          source={images.homeScreen.octoberCollection}
        />
        <Image
          style={{alignSelf: 'center', marginVertical: 40}}
          source={images.homeScreen.autumnCollection}
        />
        <Video
          source={images.videos.homeVideo}
          style={styles.backgroundVideo}
          paused={false}
          repeat={true}
        />

        <JustForYouSection data={productsData} />
      </View>
    </ScrollView>
  );
}

export default HomeScreenView;
