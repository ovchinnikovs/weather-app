import styled, { css } from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';

import { Icon } from '@components/atoms/icon';
import { Text } from '@components/atoms/text';
import { TButton } from './button.types';

import { COLOR } from '@theme/colors';

interface IButton extends SpaceProps {
  type?: TButton;
  bgColor?: string;
  height?: number;
  isRow?: boolean;
  isDisabled?: boolean;
  isDisabledWithOpacity?: boolean;
  isFullSizeButton?: boolean;
  wrapperSize?: number;
}

const BUTTONS = ({
  isRow,
  height,
  bgColor,
  isDisabled,
  wrapperSize = 32,
}: IButton) => ({
  default: css`
    ${isRow && 'flex: 1'};
    flex-direction: row;
    height: ${height ? `${height}px` : '40px'};
    border-radius: 8px;
    padding: 0 10px;
    background-color: ${isDisabled
      ? COLOR.gray.primary
      : bgColor || COLOR.primary.main};
  `,
  rounded: css`
    width: ${wrapperSize}px;
    height: ${wrapperSize}px;
    border-radius: ${wrapperSize}px;
    background-color: ${bgColor || COLOR.transparent.haki};
  `,
});

export const ButtonStyles = {
  Button: styled.TouchableOpacity<IButton>`
    justify-content: center;
    align-items: center;
    ${({ isDisabledWithOpacity }) => isDisabledWithOpacity && 'opacity: 0.4'}
    ${({ isFullSizeButton }) => isFullSizeButton && 'align-self: stretch'};
    ${({ type, ...props }) => BUTTONS(props)[type || 'default']};
    ${space};
  `,
  Icon: styled(Icon)<{ iconSpacingLeft?: number }>`
    margin-left: ${({ iconSpacingLeft }) => iconSpacingLeft || 0}px;
  `,
  Text: styled(Text)``,
};
