import IconButton from './buttons/IconButton';
import Row from './containers/Row';
import Text from './Text';

interface ArrowsOptionsProps {
  value: string;
  onRightArrowPress?: () => void;
  onLeftArrowPress?: () => void;
}

function ArrowsOptions({
  value,
  onLeftArrowPress,
  onRightArrowPress,
}: ArrowsOptionsProps) {
  return (
    <Row mv={5}>
      <IconButton
        onPress={onLeftArrowPress}
        size={30}
        fontFamily="MaterialIcons"
        iconName="chevron-left"
      />
      <Text type="big">{value}</Text>
      <IconButton
        onPress={onRightArrowPress}
        size={30}
        fontFamily="MaterialIcons"
        iconName="chevron-right"
      />
    </Row>
  );
}

export default ArrowsOptions;
