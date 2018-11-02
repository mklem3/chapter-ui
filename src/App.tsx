import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Header from './components/Header';
import Home from './pages/Home';
import { chapterStore } from './mobx/chapterStore';

const store = chapterStore;

const renderHome = () => {
	return <Home />;
};

const App = () =>
    <Provider store={store}>
      <main>
        <Header />
        <Switch>
          <Route exact={true} path="/" render={renderHome} />
        </Switch>
      </main>
    </Provider>;

export default App;
