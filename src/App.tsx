import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { chapterStore } from './mobx/chapterStore';

import Header from './components/Header';
import Actions from './pages/Actions';
import Issues from './pages/Issues';
import Chapters from './pages/Chapters';
import Chapter from './pages/Chapter';

import HeaderOption from './data/ui/header-option';

import './App.css';

const store = chapterStore;
store.loadChapters();
store.loadActions();
store.loadIssues();

const renderHome = () => {
	return <div>HELLO</div>;
};

const renderChapters = () => {
	return <Chapters />;
};

const renderIssues = () => {
	return <Issues />;
};

const renderActions = () => {
	return <Actions />;
};

const renderChapter = ({ match }: any) => {
  return <Chapter id={match.params.id}/>
}

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
          <Route exact={false} path="/chapter/:id" render={renderChapter} />
          <Route exact={true} path="/issues" render={renderIssues} />
          <Route exact={true} path="/actions" render={renderActions} />
        </Switch>
      </main>
    </Provider>;

export default App;
