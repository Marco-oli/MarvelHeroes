import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 30px;
  padding-left: 30px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  padding-right: 30px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 32px;
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
`;

export const CategoriesButton = styled.TouchableOpacity``;

export const ContainerLists = styled.View`
  margin-top: 48px;
`;

export const ContainerTitleList = styled(CategoriesContainer)`
  margin-bottom: 16px;
`;

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
