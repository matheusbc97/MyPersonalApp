import theme from '@/assets/theme';
import {ViewStyle} from 'react-native';

interface InsetsProps {
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mh?: number;
  ph?: number;
}

interface GetJustifyContentProps {
  spaceBetween?: boolean;
  flexEnd?: boolean;
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
  flexEnd,
}: GetJustifyContentProps): GetJustifyContentReturn {
  if (flexEnd) {
    return 'flex-end';
  }

  if (spaceBetween) {
    return 'space-between';
  }

  return undefined;
}

export interface EnhancedViewProps extends InsetsProps {
  spaceBetween?: boolean;
  alignCenter?: boolean;
  flexEnd?: boolean;
  width?: number | string;
  background?: boolean;
  surface?: boolean;
  flex?: number;
}

function useInsetsProps(viewStyle: ViewStyle, props: InsetsProps) {
  if (props.p) {
    viewStyle.padding = props.p;
  }

  if (props.pb) {
    viewStyle.paddingBottom = props.pb;
  }

  if (props.pl) {
    viewStyle.paddingLeft = props.pl;
  }

  if (props.pr) {
    viewStyle.paddingRight = props.pr;
  }

  if (props.pt) {
    viewStyle.paddingTop = props.pt;
  }

  if (props.m) {
    viewStyle.margin = props.m;
  }

  if (props.mb) {
    viewStyle.marginBottom = props.mb;
  }

  if (props.ml) {
    viewStyle.marginLeft = props.ml;
  }

  if (props.mr) {
    viewStyle.marginRight = props.mr;
  }

  if (props.mt) {
    viewStyle.marginTop = props.mt;
  }

  if (props.mh) {
    viewStyle.marginHorizontal = props.mh;
  }

  if (props.ph) {
    viewStyle.paddingHorizontal = props.ph;
  }

  return viewStyle;
}

function useEnhancedViewStyle({
  spaceBetween,
  alignCenter = true,
  flexEnd,
  width,
  background,
  surface,
  flex,
  ...insetsProps
}: EnhancedViewProps) {
  const viewStyle: ViewStyle = {};

  if (flexEnd || spaceBetween) {
    viewStyle.justifyContent = getJustifyContent({flexEnd, spaceBetween});
  }

  if (alignCenter) {
    viewStyle.alignItems = 'center';
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

  const viewStyleWithInsets = useInsetsProps(viewStyle, insetsProps);

  return viewStyleWithInsets;
}

export default useEnhancedViewStyle;
