import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { chapterStore } from './mobx/chapterStore';

import Header from './components/Header';
import Actions from './pages/Actions';

import HeaderOption from './data/ui/header-option';

import './App.css';
import Chapters from './pages/Chapters/Chapters';

const store = chapterStore;
store.loadChapters();

const renderHome = () => {
	return <div>HELLO</div>;
};

const renderChapters = () => {
	return <Chapters />;
};

const renderActions = () => {
	return <Actions />;
};


const headerOptions : HeaderOption[] = [
  { title: 'Chapters', route: 'chapters' },
  { title: 'Issues', route: 'issues'},
  { title: 'Actions', route: 'actions'}
];

const App = () =>
    <Provider store={store}>
      <main>
        <Header title='Frontend Chaper UI' options={headerOptions} />
        <Switch>
          <Route exact={true} path="/" render={renderHome} />
          <Route exact={true} path="/chapters" render={renderChapters} />
          <Route exact={true} path="/actions" render={renderActions} />
        </Switch>
      </main>
    </Provider>;

export default App;
