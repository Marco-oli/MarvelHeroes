import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 32px;
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoriesButton = styled.TouchableOpacity``;

const styles = StyleSheet.create({
  categories: {
    borderRadius: 100,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
