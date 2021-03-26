import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import MarvelSplash from '../../assets/iron-man.json';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LottieView
        autoSize
        resizeMode="contain"
        source={MarvelSplash}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
