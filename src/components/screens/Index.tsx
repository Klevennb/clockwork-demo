import { Flex, View, Text, Button } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <View color="darkorange" backgroundColor="darkorange" className="h-screen w-full">
        <Flex alignItems="center" direction={'column'}>
          <Flex direction="column">
            <Text fontSize="10em">Check these</Text>
              <Text fontWeight="bold" fontSize="10em" color="white">
                Out
              </Text>
          </Flex>
          <Link to="/day-planner">
            <Button color="blue.80" backgroundColor={'white'}>
              Get Started
            </Button>
          </Link>
        </Flex>
      </View>
    </>
  );
}

export default Index;
