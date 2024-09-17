import { Badge, Card, Flex, Icon, Text, View } from '@aws-amplify/ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { removeActivity } from '../../../redux/reducers/dayPlanner';

export const PotentialActivityList = () => {
  const potentialActivities = useSelector((state: RootState) => state.dayPlanner.possibleActivities);
  const dispatch = useDispatch();

  const removeActivitiy = (activity: string) => {
    dispatch(removeActivity(activity));
  };

  return (
    <>
      <Flex alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
        <View className="w-1/3">
          {potentialActivities.map((activity) => (
            <Card variation="elevated" key={activity}>
              <Flex direction={'row'} justifyContent={'space-between'}>
                <Text key={activity}>{activity}</Text>
                <div>
                  <Badge onClick={() => removeActivitiy(activity)} className="cursor-wait">
                    X
                  </Badge>
                </div>
              </Flex>
            </Card>
          ))}
        </View>
      </Flex>
    </>
  );
};
