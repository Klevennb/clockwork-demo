import { Button, Flex, Input, Label } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity } from '../../../redux/reducers/dayPlanner';
import { useState } from 'react';

export const ActivityAdder = () => {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState('');

  const updateList = () => {
    dispatch(addActivity(activity));
    clearField();
  };

  const clearField = () => {
    setActivity('');
  };

  return (
    <Flex direction="column" alignItems="center" marginBottom="large">
      <Flex direction="column" width="20rem">
        <Flex direction="column" gap="small" alignItems="center">
          <Label>Activity to Add</Label>
          <Input value={activity} isRequired onChange={(val) => setActivity(val.target.value)} />
        </Flex>
        <Button onClick={updateList} disabled={activity.length <= 1}>
          Add Activity
        </Button>
      </Flex>
    </Flex>
  );
};
