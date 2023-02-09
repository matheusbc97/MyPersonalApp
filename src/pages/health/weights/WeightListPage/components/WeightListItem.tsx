import {Card, Row, Text} from '@/shared/components';
import {Weight} from '@/shared/types';
import formatDate from '@/shared/utils/formatDate';

interface WeightListItemProps {
  weight: Weight;
}

function WeightListItem({weight}: WeightListItemProps) {
  return (
    <Card style={{marginVertical: 10}}>
      <Row spaceBetween>
        <Text>{weight.value} kg</Text>
        <Text>{formatDate(weight.date, 'dateAndTime')}</Text>
      </Row>
    </Card>
  );
}

export default WeightListItem;
