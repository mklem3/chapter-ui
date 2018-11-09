import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Header from './components/Header';
import Home from './pages/Home';
import { chapterStore } from './mobx/chapterStore';

import './App.css';
import HeaderOption from './data/ui/header-option';

const store = chapterStore;

const renderHome = () => {
	return <div>HELLO</div>;
};

const renderChapters = () => {
	return <Home />;
};

const headerOptions : HeaderOption[] = [
  { title: 'Chapters', selected: false, route: 'chapters' },
  { title: 'Issues', selected: false, route: 'issues'},
  { title: 'Actions', selected: false, route: 'actions'}
];

const App = () =>
    <Provider store={store}>
      <main>
        <Header title='Frontend Chaper UI' options={headerOptions} />
        <Switch>
          <Route exact={true} path="/" render={renderHome} />
          <Route exact={true} path="/chapters" render={renderChapters} />
        </Switch>
      </main>
    </Provider>;

export default App;
