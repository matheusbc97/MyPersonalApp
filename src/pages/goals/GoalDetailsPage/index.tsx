import theme from '@/assets/theme';
import {
  Card,
  CreateFab,
  DeleteIconButtonWithModal,
  EditIconButton,
  Row,
  ScreenWrapper,
  Text,
} from '@/shared/components';
import {FabAction} from '@/shared/components/buttons/FabGroup';
import {CardProps} from '@/shared/components/containers/Card';
import Column from '@/shared/components/containers/Column';
import {useDeleteGoal} from '@/shared/hooks';
import useFabGroup from '@/shared/hooks/useFabGroup';
import {ScreenProps} from '@/shared/types';
import {View} from 'react-native';

interface Quest {
  id: number;
  name: string;
}

interface QuestListItemProps extends CardProps {
  quest: Quest;
}

function QuestListItem({quest, ...rest}: QuestListItemProps) {
  return (
    <Row>
      <Circle />
      <Card ml={10} alignCenter {...rest}>
        <Text>{quest.name}</Text>
      </Card>
    </Row>
  );
}

interface CircleProps {
  size?: number;
}

function Circle({size = 8}: CircleProps) {
  return (
    <View
      style={{
        backgroundColor: theme.text,
        width: size,
        height: size,
        borderRadius: size / 2 + 1,
      }}
    />
  );
}

interface BulletListItemProps {
  text: string;
}

function BulletListItem({text}: BulletListItemProps) {
  return (
    <Row>
      <Circle />
      <Text ml={5}>{text}</Text>
    </Row>
  );
}

const quests = [
  {
    id: 1,
    name: 'Editar a cidade invisível',
  },
  {
    id: 2,
    name: 'Dar um nome pro projeto B (Isaac) e editar para melhora a história',
  },
  {
    id: 3,
    name: 'Rever o inferno de Agon',
  },
];

const fabActions: FabAction[] = [
  {iconName: 'rocket', label: 'Editar', onPress: () => {}},
  {iconName: 'star', label: 'Criar', onPress: () => {}},
  {iconName: 'certificate', label: 'Alterar Descrição', onPress: () => {}},
];

function GoalDetailsPage({route, navigation}: ScreenProps<'GoalDetails'>) {
  const {goal} = route.params;

  const setFabActions = useFabGroup();

  const deleteGoal = useDeleteGoal();

  const handleDeleteGoal = async () => {
    try {
      await deleteGoal(goal.id);
      navigation.navigate('GoalsHome');
    } catch (error) {}
  };

  return (
    <ScreenWrapper>
      <Column mt={15} flex={1}>
        <Text type="title-extra-big">{goal.name}</Text>

        <Text mt={15}>
          <Text type="title">Data objetivo: </Text>
          01/10/2024
        </Text>

        <Text mt={15} type="title">
          Descrição
        </Text>
        <Text mt={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        </Text>

        <Text mt={15} type="title">
          Possíveis livros a publicar:
        </Text>
        <Column mt={5}>
          <BulletListItem text="A cidade invisível" />
          <BulletListItem text="O Inferno de Agon" />
          <BulletListItem text="Projeto B" />
        </Column>

        <Text type="title" mt={15}>
          Missões
        </Text>
        <Column mt={5}>
          {quests.map(quest => (
            <QuestListItem quest={quest} mv={5} />
          ))}
        </Column>
      </Column>
      <Row spaceBetween>
        <Row>
          <DeleteIconButtonWithModal
            deleteText={goal.name}
            onConfirmPress={handleDeleteGoal}
          />
          <EditIconButton
            onPress={() => navigation.navigate('UpdateGoal', {goal})}
          />
        </Row>

        <CreateFab onPress={() => setFabActions(fabActions)} />
      </Row>
      {/*<FabGroup />*/}
    </ScreenWrapper>
  );
}

export default GoalDetailsPage;
