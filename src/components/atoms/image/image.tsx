import React, { FC } from 'react';
import styled from 'styled-components/native';

import { IImage } from './image.types';

const Img = styled.Image<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const Image: FC<IImage> = ({ source, size, style }) => {
  return <Img style={style} source={source} size={size} />;
};
