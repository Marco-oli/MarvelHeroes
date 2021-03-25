import {getFontScale} from 'react-native/Libraries/Utilities/PixelRatio';
import styled from 'styled-components/native';
import colors from './colors';

export const HomeTitle = styled.Text`
  font-size: 32px;
  font-family: 'gilroy-heavy';
`;

export const CardTitle = styled(HomeTitle)`
  font-size: 20px;
  font-family: 'gilroy-heavy';
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-family: 'gilroy-bold';
`;

export const ProfileSubtitle = styled.Text`
  font-size: 16px;
  font-family: 'gilroy-medium';
`;

export const HomeSubtitle = styled.Text`
  font-size: 14px;
  font-family: 'gilroy-semibold';
  color: ${colors.primary_grey};
`;

export const Description = styled(HomeSubtitle)`
  font-family: 'gilroy-medium';
`;

export const Caracteristic = styled(Description)`
  font-size: 12px;
`;

export const Ability = styled(Caracteristic)`
  font-family: 'gilroy-regular';
`;

export const CardSubtitle = styled.Text`
  font-size: 10px;
  font-family: 'gilroy-medium';
`;
