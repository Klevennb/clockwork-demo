import { Flex, Heading, Image, Tabs } from '@aws-amplify/ui-react';
import image from 'clockwork.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="flex-start">
      <Flex alignItems="center">
        <Heading>Wannabe</Heading>
        <Link to="/">
          <Image alt="clockwork" src={image} />
        </Link>

        <Flex direction="column" gap="2rem"></Flex>

        <Tabs.Container defaultValue="1">
          <Tabs.List spacing="equal">
            <Tabs.Item value="1">
              <Link to="/day-planner"> Day Planner </Link>
            </Tabs.Item>
            <Tabs.Item value="2">Item 2</Tabs.Item>
            <Tabs.Item value="3">Item 3</Tabs.Item>
          </Tabs.List>
        </Tabs.Container>
      </Flex>
    </Flex>
  );
};
