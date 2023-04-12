import {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

export interface IImage extends Partial<ImageProps> {
  size: number;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}
