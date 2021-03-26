import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import * as S from './styles';
import {CardSubtitle, CardTitle} from '../../assets/typography';

const CardHeroes = ({name, image, heroName}) => {
  const styles = StyleSheet.create({
    styleImage: {
      flex: 1,
      padding: 12,
      justifyContent: 'flex-end',
    },
  });

  return (
    <S.Container>
      <ImageBackground source={{uri: image}} style={styles.styleImage}>
        <S.ContainerText>
          <CardSubtitle>{name}</CardSubtitle>
          <CardTitle>{heroName}</CardTitle>
        </S.ContainerText>
      </ImageBackground>
    </S.Container>
  );
};

export default CardHeroes;
