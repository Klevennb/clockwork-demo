import { useState } from 'react';
import { Editor } from './Editor';
import { Button, Flex, Input, View } from '@aws-amplify/ui-react';
import { PromptModal } from './PromptModal';

export const NewEntry = () => {
  const [editorContents, setEditorContents] = useState('');
  const [prompt, setPrompt] = useState('');
  const [modalOpen, setModalOpen] = useState(false)

  const updateEditorContents = (val: string) => {
    setEditorContents(val);
  };

  const togglePromptDialogue = () => {
    setModalOpen(!modalOpen)
  };

  const setNewPrompt = (prompt: string) => {
    setPrompt(prompt)
    togglePromptDialogue()
  }

  return (
    <View margin={'large'}>
        <PromptModal open={modalOpen} toggle={togglePromptDialogue} usePrompt={setNewPrompt}/>
      <Flex direction={'column'}>
        <View>
          <Flex>
            <Input placeholder="Title your entry"></Input>
 
            <Button textAlign={'center'} backgroundColor={'darkturquoise'} onClick={() => setModalOpen(true)}>
              Get Prompt
            </Button>
          </Flex>
          {prompt && (
              <View
                as="div"
                ariaLabel="View example"
                backgroundColor="var(--amplify-colors-white)"
                borderRadius="6px"
                border="1px solid var(--amplify-colors-black)"
                boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
                color="var(--amplify-colors-blue-60)"
                // height="4rem"
                maxWidth="100%"
                padding="1rem"
                margin={'large'}
              >
                {prompt}
              </View>
            )}
        </View>
        {!modalOpen && <Editor initialValue="" onChange={updateEditorContents} />}
      </Flex>
    </View>
  );
};
