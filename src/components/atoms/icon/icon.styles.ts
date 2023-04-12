import styled from 'styled-components/native';

export const IconStyles = {
  Press: styled.TouchableOpacity<{
    isDisabledWithOpacity?: boolean;
    isWithoutPadding?: boolean;
  }>`
    display: flex;
    justify-content: center;
    ${({ isDisabledWithOpacity }) => isDisabledWithOpacity && 'opacity: 0.4'}
    align-items: center;
    padding-left: ${({ isWithoutPadding }) => (isWithoutPadding ? 24 : 0)}px;
  `,
  Wrapper: styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
