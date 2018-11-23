import * as React from "react";
import { inject, observer } from "mobx-react";
import ChapterStore from "../../mobx/chapterStore";

import ChaptersTableItem from "../ChaptersTableItem";
import './styles.css';

interface InjectedProps {
  store: ChapterStore
}

@inject('store')
@observer
export class ChaptersTable extends React.Component {

  private get injected() {
    return this.props as InjectedProps
  }

  public render() {
    const { store } = this.injected;

    const { chapters } = store;

    return <div className={'chapters-table-container'}>
      {
        chapters.length === 0 && (<div>
          There are no currently no chapters
        </div>)
      }
      {chapters.length > 0 && chapters.map(chapter => (
        <ChaptersTableItem key={`chapter_${chapter.id}`} chapter={chapter} store={store} />
      ))}
    </div>
  }
}

export default ChaptersTable;