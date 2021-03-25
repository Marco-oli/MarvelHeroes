import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Components
import CardHeroes from '../../components/CardHeroes';
import data from '../../assets/application.json';

// Styles and Assets
import styles, * as S from './styles';
import {
  HomeSubtitle,
  HomeTitle,
  SectionTitle,
  Description,
} from '../../assets/typography';

import {
  menuIcon,
  searchIcon,
  titleImage,
  heroIcon,
  antiHeroIcon,
  villainIcon,
  humanIcon,
  alienIcon,
} from '../../assets/icons';

const Home = () => {
  const renderCard = ({item}) => {
    return (
      <CardHeroes
        name={item.alterEgo}
        image={item.imagePath}
        heroName={item.name}
      />
    );
  };
  return (
    <S.Container>
      <S.HeaderContainer>
        <TouchableOpacity>
          <Image source={menuIcon} />
        </TouchableOpacity>

        <Image source={titleImage} />

        <TouchableOpacity>
          <Image source={searchIcon} />
        </TouchableOpacity>
      </S.HeaderContainer>

      <S.TitleContainer>
        <HomeSubtitle>Bem vindo ao Marvel Heroes</HomeSubtitle>
        <HomeTitle>Escolha o seu personagem</HomeTitle>
      </S.TitleContainer>

      <S.CategoriesContainer>
        <S.CategoriesButton>
          <LinearGradient
            colors={['#005BEA', '#00C6FB']}
            style={styles.categories}>
            <Image
              source={heroIcon}
              tintColor="#fff"
              style={{height: 32, width: 32}}
            />
          </LinearGradient>
        </S.CategoriesButton>

        <S.CategoriesButton>
          <LinearGradient
            colors={['#ED1D24', '#ED1F69']}
            style={styles.categories}>
            <Image
              source={villainIcon}
              tintColor="#fff"
              style={{height: 32, width: 32}}
            />
          </LinearGradient>
        </S.CategoriesButton>

        <S.CategoriesButton>
          <LinearGradient
            colors={['#B224EF', '#7579FF']}
            style={styles.categories}>
            <Image
              source={antiHeroIcon}
              tintColor="#fff"
              style={{height: 32, width: 32}}
            />
          </LinearGradient>
        </S.CategoriesButton>

        <S.CategoriesButton>
          <LinearGradient
            colors={['#0BA360', '#3CBA92']}
            style={styles.categories}>
            <Image
              source={alienIcon}
              tintColor="#fff"
              style={{height: 32, width: 32}}
            />
          </LinearGradient>
        </S.CategoriesButton>

        <S.CategoriesButton>
          <LinearGradient
            colors={['#FF7EB3', '#FF758C']}
            style={styles.categories}>
            <Image
              source={humanIcon}
              tintColor="#fff"
              style={{height: 32, width: 32}}
            />
          </LinearGradient>
        </S.CategoriesButton>
      </S.CategoriesContainer>

      {/* List Heroes */}
      <S.ContainerLists>
        <S.ContainerTitleList>
          <SectionTitle>Heroes</SectionTitle>
          <TouchableOpacity>
            <Description>ver tudo</Description>
          </TouchableOpacity>
        </S.ContainerTitleList>
        <FlatList
          horizontal
          data={data.heroes}
          renderItem={renderCard}
          keyExtractor={(_, index) => index}
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerLists>
    </S.Container>
  );
};

export default Home;
