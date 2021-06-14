import * as React from 'react';
import { Provider } from 'react-redux';
import useCachedResources from './app/hooks/useCachedResources';
import initializeStore from './app/redux/store';
import AppContent from './AppContent';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const store = initializeStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <AppContent/>
      </Provider>
    );
  }
};

export default App;
