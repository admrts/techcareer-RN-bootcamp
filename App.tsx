import React from 'react';
import {EventsStack} from './src/routes/EventsStack/EventsStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import BottomTabbar from './src/routes/BottomTabbar/BottomTabbar';

const App = () => {
  return (
    <Provider store={store}>
      <BottomTabbar />
    </Provider>
  );
};

export default App;
