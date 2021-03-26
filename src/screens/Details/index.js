import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import * as S from './styles';
import {backIcon} from '../../assets/icons';
import {
  ProfileSubtitle,
  HomeTitle,
  ProfileTitle,
} from '../../assets/typography';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  console.log(item);
  return (
    <S.Container>
      <ImageBackground
        source={{uri: item.imageBig}}
        style={{flex: 1, width: 495, height: 800, padding: 30}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} tintColor="#fff" />
        </TouchableOpacity>

        <S.TitleContainer>
          <ProfileSubtitle>{item.alterEgo}</ProfileSubtitle>
          <ProfileTitle>{item.name}</ProfileTitle>
        </S.TitleContainer>
      </ImageBackground>
    </S.Container>
  );
};

export default Details;
