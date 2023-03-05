import theme from '@/assets/theme';
import {ViewStyle} from 'react-native';
import useInsetsProps, {InsetsProps} from './useInsetsProps';

interface GetJustifyContentProps {
  spaceBetween?: boolean;
  justifyEnd?: boolean;
}

type GetJustifyContentReturn =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

function getJustifyContent({
  spaceBetween,
  justifyEnd,
}: GetJustifyContentProps): GetJustifyContentReturn {
  if (justifyEnd) {
    return 'flex-end';
  }

  if (spaceBetween) {
    return 'space-between';
  }

  return undefined;
}

export interface EnhancedViewStyleProps extends InsetsProps {
  spaceBetween?: boolean;
  alignCenter?: boolean;
  justifyEnd?: boolean;
  width?: number | string;
  background?: boolean;
  surface?: boolean;
  flex?: number;
  alignEnd?: boolean;
}

function useEnhancedViewStyle({
  spaceBetween,
  alignCenter = false,
  justifyEnd,
  width,
  background,
  surface,
  flex,
  alignEnd,
  ...insetsProps
}: EnhancedViewStyleProps) {
  const viewStyle: ViewStyle = {};

  if (justifyEnd || spaceBetween) {
    viewStyle.justifyContent = getJustifyContent({
      justifyEnd,
      spaceBetween,
    });
  }

  if (alignCenter) {
    viewStyle.alignItems = 'center';
  }

  if (alignEnd) {
    viewStyle.alignItems = 'flex-end';
  }

  if (width) {
    viewStyle.width = width;
  }

  if (background) {
    viewStyle.backgroundColor = theme.background;
  }

  if (surface) {
    viewStyle.backgroundColor = theme.surface;
  }

  if (flex) {
    viewStyle.flex = flex;
  }

  const insetStyles = useInsetsProps(insetsProps);

  return {...viewStyle, ...insetStyles};
}

export default useEnhancedViewStyle;
