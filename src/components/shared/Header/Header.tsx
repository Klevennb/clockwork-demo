import { Flex, Heading, Image, Tabs } from '@aws-amplify/ui-react';
import image from 'clockwork.svg';
import { Link } from 'react-router-dom';
import { urlParser } from '~/utils/urlParcer';

export const Header = () => {
  return (
    <Flex direction="flex-start">
      <Flex alignItems="center">
        <Heading>Wannabe</Heading>
        <Link to="/">
          <Image alt="clockwork" src={image} />
        </Link>

        <Flex direction="column" gap="2rem"></Flex>

        <Tabs.Container defaultValue={urlParser().toString()}>
          <Tabs.List spacing="equal">
            <Tabs.Item value="1">
              <Link to="/day-planner"> Day Planner </Link>
            </Tabs.Item>
            <Tabs.Item value="2">
              <Link to="/writing-assistant"> Writing Assistant </Link>
            </Tabs.Item>
            <Tabs.Item value="3">
              <Link to="/library"> Library </Link>
            </Tabs.Item>
          </Tabs.List>
        </Tabs.Container>
      </Flex>
    </Flex>
  );
};
