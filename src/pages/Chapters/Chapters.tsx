import * as React from 'react';
import { inject, observer } from "mobx-react";

import ChapterStore from "../../mobx/chapterStore";
import ChaptersTable from '../../components/ChaptersTable';
import FloatingActionButton from '../../components/FloatingAtionButton';

interface InjectedProps {
  store: ChapterStore
}

@inject('store')
@observer
class Chapters extends React.Component {

  private get injected() {
    return this.props as InjectedProps
  }

  private onClick = () => {
    const { store } = this.injected;
    store.addChapter();
  }

  public render() {
    return (
      <div>
       <ChaptersTable />
       <FloatingActionButton onClick={this.onClick}/>
     </div>
    );
  }
}

export default Chapters;
