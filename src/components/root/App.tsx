import Main from '~/components/root/Main';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Providers will be added here
export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
