import React from 'react';
import {EventsStack} from './src/routes/EventsStack/EventsStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <EventsStack />
    </Provider>
  );
};

export default App;
