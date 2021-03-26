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
  /* const timeStamp = '1616765364';
  const apiKey = '103248e9efd30606097ef4c255d11c69';
  const md5 = 'fbaa19460146a8c38b2d5690f36e0a94';

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`,
    )
      .then(res => res.json())
      .then(res => {
        const {results} = res.data;
        setHeroes(results);
      });
  }, [timeStamp]); */

  const renderCard = ({item}) => {
    /* const {path, extension} = item.thumbnail; */
    console.log(item);
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

      {/* List Villains */}
      <S.ContainerLists>
        <S.ContainerTitleList>
          <SectionTitle>Vilões</SectionTitle>
          <TouchableOpacity>
            <Description>ver tudo</Description>
          </TouchableOpacity>
        </S.ContainerTitleList>
        <FlatList
          horizontal
          data={data.villains}
          renderItem={renderCard}
          keyExtractor={(_, index) => index}
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerLists>

      {/* List AntiHeroes */}
      <S.ContainerLists>
        <S.ContainerTitleList>
          <SectionTitle>Anti-heróis</SectionTitle>
          <TouchableOpacity>
            <Description>ver tudo</Description>
          </TouchableOpacity>
        </S.ContainerTitleList>
        <FlatList
          horizontal
          data={data.antiHeroes}
          renderItem={renderCard}
          keyExtractor={(_, index) => index}
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerLists>

      {/* List AntiHeroes */}
      <S.ContainerLists>
        <S.ContainerTitleList>
          <SectionTitle>Alienígenas</SectionTitle>
          <TouchableOpacity>
            <Description>ver tudo</Description>
          </TouchableOpacity>
        </S.ContainerTitleList>
        <FlatList
          horizontal
          data={data.aliens}
          renderItem={renderCard}
          keyExtractor={(_, index) => index}
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerLists>

      {/* List Humans */}
      <S.ContainerLists>
        <S.ContainerTitleList>
          <SectionTitle>Humanos</SectionTitle>
          <TouchableOpacity>
            <Description>ver tudo</Description>
          </TouchableOpacity>
        </S.ContainerTitleList>
        <FlatList
          horizontal
          data={data.humans}
          renderItem={renderCard}
          keyExtractor={(_, index) => index}
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerLists>
    </S.Container>
  );
};

export default Home;
