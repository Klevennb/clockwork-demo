import { Button, Flex, Input, Label } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '~/components/shared/Header';
import { addActivity } from '../redux/reducers/dayPlanner';
import { useState } from 'react';

function DayPlanner() {

  const dispatch = useDispatch();

  const [activity, setActivity] = useState('');

  const updateList = () => {
    dispatch(addActivity(activity));
    setActivity('');
  };

  return (
    <Flex direction="column" alignItems="center">
      <Header />
      <Flex direction="column" width="20rem">
        <Flex direction="column" gap="small" alignItems="center">
          <Label>Activity to Add</Label>
          <Input id="email" isRequired onChange={(val) => setActivity(val.target.value)} />
        </Flex>
        <Button onClick={updateList}>Add Activity</Button>
      </Flex>
    </Flex>
  );
}

export default DayPlanner;
