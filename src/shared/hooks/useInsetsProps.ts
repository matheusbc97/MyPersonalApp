import {ViewStyle} from 'react-native';

export interface InsetsProps {
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
  mv?: number;
  pv?: number;
}

function useInsetsProps(props: InsetsProps) {
  const viewStyle: ViewStyle = {};

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

  if (props.mv) {
    viewStyle.marginVertical = props.mv;
  }

  if (props.pv) {
    viewStyle.paddingVertical = props.pv;
  }

  return viewStyle;
}

export default useInsetsProps;
