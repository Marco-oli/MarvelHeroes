import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles, * as S from './styles';
import {
  backIcon,
  universeIcon,
  heightIcon,
  ageIcon,
  weightIcon,
} from '../../assets/icons';

import {
  SectionTitle,
  ProfileSubtitle,
  ProfileTitle,
  Caracteristic,
  Description,
  Ability,
} from '../../assets/typography';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const {weight, height, universe} = item.caracteristics;

  const date = new Date();
  const year = date.getFullYear();

  const styleImageBackground = {
    flex: 1,
    width: '100%',
    height: 812,
  };

  const renderMovies = ({item}) => {
    return <ImageBackground source={{uri: item}} style={styles.listMovies} />;
  };

  return (
    <>
      <StatusBar translucent barStyle="light-content" />
      <S.Container>
        <ImageBackground
          source={{uri: item.imageBig}}
          style={styleImageBackground}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
            style={styles.imageBackground}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} tintColor="#fff" />
            </TouchableOpacity>

            <S.TitleContainer>
              <ProfileSubtitle>{item.alterEgo}</ProfileSubtitle>
              <ProfileTitle>{item.name}</ProfileTitle>
            </S.TitleContainer>

            <S.CharacteristicsContainer>
              {/* Age */}
              <S.Characteristics>
                <Image
                  source={ageIcon}
                  tintColor="#fff"
                  style={{marginBottom: 12}}
                />
                <Caracteristic>
                  {year - item.caracteristics.birth + ' ' + 'anos'}
                </Caracteristic>
              </S.Characteristics>

              {/* Weight */}
              <S.Characteristics>
                <Image
                  source={weightIcon}
                  tintColor="#fff"
                  style={{marginBottom: 12}}
                />
                <Caracteristic>
                  {weight.value + ' ' + weight.unity}
                </Caracteristic>
              </S.Characteristics>

              {/* height */}
              <S.Characteristics>
                <Image
                  source={heightIcon}
                  tintColor="#fff"
                  style={{marginBottom: 12}}
                />
                <Caracteristic>{height.value + height.unity}</Caracteristic>
              </S.Characteristics>

              {/* Universe */}
              <S.Characteristics>
                <Image
                  source={universeIcon}
                  tintColor="#fff"
                  style={{marginBottom: 12}}
                />
                <Caracteristic>{universe}</Caracteristic>
              </S.Characteristics>
            </S.CharacteristicsContainer>

            {/* Description */}
            <S.DescriptionContainer>
              <Description>{`${item.biographyPt1}\n`}</Description>
              <Description>{item.biographyPt2}</Description>
            </S.DescriptionContainer>
          </LinearGradient>
        </ImageBackground>

        <S.Container2>
          {/* Habilities */}
          <S.SectionHabilities>
            <SectionTitle>Habilidades</SectionTitle>
            <S.HabilitiesContainer>
              <S.Habilities>
                <Ability>Força</Ability>
              </S.Habilities>

              <S.Habilities>
                <Ability>Inteligência</Ability>
              </S.Habilities>

              <S.Habilities>
                <Ability>Agilidade</Ability>
              </S.Habilities>

              <S.Habilities>
                <Ability>Resistência</Ability>
              </S.Habilities>

              <S.Habilities>
                <Ability>Velocidade</Ability>
              </S.Habilities>
            </S.HabilitiesContainer>
          </S.SectionHabilities>

          {/* Movies */}
          <SectionTitle>Filmes</SectionTitle>
          {console.log(item.movies)}
          <FlatList
            horizontal
            data={item.movies}
            renderItem={renderMovies}
            keyExtractor={(_, index) => index}
          />
        </S.Container2>
      </S.Container>
    </>
  );
};

export default Details;
