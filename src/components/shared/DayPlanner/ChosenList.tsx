import { Flex, Text, Card, View, CheckboxField, Button } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted,resetAllActivities } from '~/redux/reducers/dayPlanner';
import { RootState } from '~/redux/store';

export const ChosenList = () => {
  const dispatch = useDispatch();
  const chosenActivities = useSelector((state: RootState) => state.dayPlanner.chosenActivites);

  const toggleActivity = (name: string) => {
    dispatch(toggleCompleted(name))
  };

  return (
    <>
      <Flex alignItems={'center'} alignContent={'center'} justifyContent={'center'} margin={'large'}>
        <View className="w-1/3" marginBottom={'large'}>
          {chosenActivities.map((activity) => (
            <Card variation="elevated" key={activity.name}>
              <Flex direction={'row'} justifyContent={'space-between'}>
                <Text key={activity.name}>{activity.name}</Text>
                <div>
                  <CheckboxField
                    name="subscribe-controlled"
                    value="yes"
                    checked={activity.completed}
                    onChange={() => toggleActivity(activity.name)}
                    label="Complete"
                  />{' '}
                </div>
              </Flex>
            </Card>
          ))}
        </View>
        <Button type='reset' variation='destructive' onClick={() => dispatch(resetAllActivities())}>Reset ALL</Button>
      </Flex>
    </>
  );
};
