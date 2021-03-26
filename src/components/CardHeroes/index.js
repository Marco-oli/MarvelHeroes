import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import * as S from './styles';
import {CardSubtitle, CardTitle} from '../../assets/typography';

const CardHeroes = ({name, image, heroName, onPress}) => {
  const styles = StyleSheet.create({
    styleImage: {
      flex: 1,
      padding: 12,
      justifyContent: 'flex-end',
    },
  });

  return (
    <S.Container onPress={onPress}>
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
