import {Goal} from '@/shared/types';
import Card, {CardProps} from '../containers/Card';
import Text from '../Text';

interface GoalListItemProps extends CardProps {
  goal: Goal;
}

function GoalListItem({goal, ...rest}: GoalListItemProps) {
  return (
    <Card {...rest}>
      <Text>{goal.name}</Text>
    </Card>
  );
}

export default GoalListItem;
