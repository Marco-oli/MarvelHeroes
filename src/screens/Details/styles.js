import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const TitleContainer = styled.View`
  max-width: 200px;
  margin-top: 250px;
  margin-bottom: 48px;
`;

export const CharacteristicsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Characteristics = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
`;

export const Container2 = styled.View`
  padding-horizontal: 30px;
  background-color: #000;
`;

export const SectionHabilities = styled.View`
  margin-bottom: 32px;
  margin-top: 32px;
`;

export const HabilitiesContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  height: 156px;
`;

export const Habilities = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 812,
    padding: 30,
  },
  listMovies: {
    width: 140,
    height: 230,
    marginRight: 16,
    marginTop: 24,
    marginBottom: 24,
    borderRadius: 20,
  },
});

export default styles;
