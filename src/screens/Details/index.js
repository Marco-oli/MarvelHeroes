import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import * as S from './styles';

const Details = ({route}) => {
  const {item} = route.params;

  console.log(item);
  return (
    <S.Container>
      <ImageBackground
        source={{uri: item.imagePath}}
        style={{flex: 1, width: 495, height: 812}}>
        <Text>DEtails</Text>
      </ImageBackground>
    </S.Container>
  );
};

export default Details;
