import React, {
  ForwardedRef,
  forwardRef,
  RefObject,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {Separator, NewExerciseContainedButton} from '@/shared/components';
import GymExerciseFormTemplate, {
  GymExerciseForm,
  GymExerciseFormHandles,
} from './GymExerciseForm';

interface GymExercisesFormTemplateProps {
  style?: StyleProp<ViewStyle>;
  initialState?: GymExerciseForm[];
}

export interface GymExercisesFormListHandles {
  submitExercisesFormList: () => {
    isValid: boolean;
    form: GymExerciseForm[];
  };
}

function GymExercisesFormList(
  {style, initialState}: GymExercisesFormTemplateProps,
  ref: ForwardedRef<GymExercisesFormListHandles>,
) {
  const [formRefs, setFormRefs] = useState<RefObject<GymExerciseFormHandles>[]>(
    initialState
      ? initialState.map(() => React.createRef())
      : [React.createRef()],
  );

  useImperativeHandle(
    ref,
    () => ({
      submitExercisesFormList: () => {
        const forms: GymExerciseForm[] = [];
        let allFormsAreValid = false;

        formRefs.forEach(formRef => {
          if (formRef.current) {
            if (forms.length === 0) {
              allFormsAreValid = true;
            }

            const {form, isValid} = formRef.current?.submit();

            forms.push(form);

            if (!isValid) {
              allFormsAreValid = false;
            }
          }
        });

        return {form: forms, isValid: allFormsAreValid};
      },
    }),
    [formRefs],
  );

  const addNewExercise = () => {
    setFormRefs(oldRefs => [...oldRefs, React.createRef()]);
  };

  return (
    <View style={style}>
      {formRefs.map((formRef, index) => (
        <View style={{marginVertical: 5}}>
          <GymExerciseFormTemplate
            ref={formRef}
            initialState={initialState?.[index]}
          />
          <Separator defaultMargin />
        </View>
      ))}

      <NewExerciseContainedButton
        style={{marginHorizontal: 10, marginVertical: 15}}
        onPress={addNewExercise}
      />
    </View>
  );
}

export default forwardRef(GymExercisesFormList);
