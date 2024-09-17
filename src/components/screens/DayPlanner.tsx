import { PotentialActivityList } from '../shared/DayPlanner/PotentialActivityList';
import { ActivityAdder } from '../shared/DayPlanner/ActivityAdder';
import { ParameterSetAndSubmit } from '../shared/DayPlanner/ParameterSetAndSubmit';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { ChosenList } from '../shared/DayPlanner/ChosenList';

function DayPlanner() {
  const chosenActivities = useSelector((state: RootState) => state.dayPlanner.chosenActivites);
  
  return (
    <>
      {chosenActivities.length === 0 ? (
        <>
          <ActivityAdder />
          <PotentialActivityList />
          <ParameterSetAndSubmit />
        </>
      ) : (
        <ChosenList />
      )}
    </>
  );
}

export default DayPlanner;
