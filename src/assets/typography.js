import {color} from 'react-native-reanimated';
import {getFontScale} from 'react-native/Libraries/Utilities/PixelRatio';
import styled from 'styled-components/native';
import colors from './colors';

export const ProfileTitle = styled.Text`
  font-size: 40px;
  font-family: 'gilroy-heavy';
  color: ${colors.primary_white};
`;

export const HomeTitle = styled.Text`
  font-size: 32px;
  font-family: 'gilroy-heavy';
  color: ${colors.primary_black};
`;

export const CardTitle = styled(HomeTitle)`
  font-size: 20px;
  font-family: 'gilroy-heavy';
  color: ${colors.primary_white};
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-family: 'gilroy-bold';
  color: ${props =>
    props.primary ? colors.primary_red : colors.primary_white};
`;

export const ProfileSubtitle = styled.Text`
  font-size: 16px;
  font-family: 'gilroy-medium';
  color: ${colors.primary_white};
`;

export const HomeSubtitle = styled.Text`
  font-size: 14px;
  font-family: 'gilroy-semibold';
  color: ${colors.primary_grey};
`;

export const Description = styled(HomeSubtitle)`
  font-family: 'gilroy-medium';
`;

export const Caracteristic = styled.Text`
  font-family: 'gilroy-medium';
  font-size: 12px;
  color: ${colors.primary_white};
`;

export const Ability = styled(Caracteristic)`
  font-family: 'gilroy-regular';
`;

export const CardSubtitle = styled.Text`
  font-size: 10px;
  font-family: 'gilroy-medium';
  color: ${colors.primary_white};
`;
