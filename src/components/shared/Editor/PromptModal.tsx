const WRITING_PROMPT =
  "You drank a snake oil salesman's drink only for it to make you actually immortal in the old west now 300 years later you see that same salesman";

type PromptModalProps = {
  open: boolean;
  toggle: () => void;
  usePrompt: (prompt: string) => void;
};
export const PromptModal = (props: PromptModalProps) => {
    const {open, toggle, usePrompt } = props

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="mb-4">{WRITING_PROMPT}</p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={toggle}
            >
              Close
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => usePrompt(WRITING_PROMPT)}
            >
              Use Prompt
            </button>
          </div>
        </div>
      </div>
      );
};
