import {
  GoalForm,
  GoalFormHandles,
  Row,
  SaveContainedButton,
  ScreenWrapper,
} from '@/shared/components';
import {useCreateGoal} from '@/shared/hooks';
import {ScreenProps} from '@/shared/types';
import {useRef} from 'react';

function CreateGoalFormPage({navigation}: ScreenProps<'CreateGoalForm'>) {
  const goalFormRef = useRef<GoalFormHandles>(null);

  const createGoal = useCreateGoal();

  const submitForm = async () => {
    if (goalFormRef.current) {
      const {form, isValid} = goalFormRef.current.submit();

      if (isValid) {
        try {
          await createGoal({
            name: form.name,
          });

          navigation.pop();
        } catch (error) {}
      }
    }
  };

  return (
    <ScreenWrapper>
      <GoalForm ref={goalFormRef} initialState={{name: ''}} />
      <Row flexEnd>
        <SaveContainedButton onPress={submitForm} />
      </Row>
    </ScreenWrapper>
  );
}

export default CreateGoalFormPage;
