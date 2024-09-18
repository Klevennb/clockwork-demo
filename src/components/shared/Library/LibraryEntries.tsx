import { Card, Flex, Heading, Text } from '@aws-amplify/ui-react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { EmptyEntries } from './EmptyLibrary';

export const LibraryEntries = () => {
  const entries = useSelector((state: RootState) => state.writingAssistant.writings);

  return (
    <>
      {entries.length > 0 ? (
        <Flex direction={'column'} justifyContent={'center'} margin={'large'}>
          {entries.map((entry) => (
            <Card variation="elevated" key={entry.title}>
              <Flex direction={'column'} justifyContent={'space-between'}>
                <Heading level={6} marginBottom={'medium'}>
                  {entry.title}
                </Heading>
                <Text key={entry.title}>{entry.editorContents}</Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      ) : (
        <EmptyEntries />
      )}
    </>
  );
};
