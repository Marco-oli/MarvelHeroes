import React from 'react';
import {View, Image, ImageBackground, StyleSheet} from 'react-native';

import * as S from './styles';
import {CardSubtitle, CardTitle} from '../../assets/typography';

const CardHeroes = ({name, image, heroName}) => {
  const styles = StyleSheet.create({
    styleImage: {
      width: 140,
      height: 230,
      padding: 12,
      justifyContent: 'flex-end',
    },
  });

  return (
    <S.Container>
      <ImageBackground
        source={require('../../assets/chars/spider-man.png')}
        style={styles.styleImage}>
        <S.ContainerText>
          {console.log(image)}
          <CardSubtitle>{name}</CardSubtitle>
          <CardTitle>{heroName}</CardTitle>
        </S.ContainerText>
      </ImageBackground>
    </S.Container>
  );
};

export default CardHeroes;
