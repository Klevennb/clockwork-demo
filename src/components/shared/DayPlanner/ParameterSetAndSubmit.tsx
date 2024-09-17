import { Button, Flex, StepperField } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { choseActivities } from '~/redux/reducers/dayPlanner';
import { randomRemove } from '~/utils/random';

const MINIMIMUM_REQUIRED_LENGTH = 3;

export const ParameterSetAndSubmit = () => {
  const dispatch = useDispatch();
  const potentialActivities = useSelector((state: RootState) => state.dayPlanner.possibleActivities);

  const [numberToChose, setNumberToChose] = useState(1);

  const submitActivities = () => {
   

    const tests = randomRemove(potentialActivities, numberToChose)
    const chosenArr = randomRemove(potentialActivities, numberToChose).map((act) => ({ name: act, completed: false }));
    
    dispatch(choseActivities(chosenArr));
  };

  return (
    <>
      {potentialActivities.length > MINIMIMUM_REQUIRED_LENGTH && (
        <Flex direction={'row'} justifyContent={'center'} marginTop={'large'}>
          <StepperField
            max={potentialActivities.length}
            min={1}
            step={1}
            label="Number of Activities to Chose"
            onStepChange={(val) => setNumberToChose(val)}
          />{' '}
          <Button onClick={submitActivities}>
            Submit
          </Button>
        </Flex>
      )}
    </>
  );
};
