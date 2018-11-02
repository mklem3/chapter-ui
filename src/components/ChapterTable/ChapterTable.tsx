import * as React from "react";
import { inject, observer } from "mobx-react";
import ChapterStore from "../../mobx/chapterStore";

interface InjectedProps {
  store: ChapterStore
}

@inject('store')
@observer
export class ChapterTable extends React.Component {

  private get injected() {
    return this.props as InjectedProps
  }

  private onClick = () => {
    const { store } = this.injected;
    store.addChapter();
  }

  public render() {
    const { store } = this.injected;

    const { chapters } = store;

    return <div>
      This is the Chapter Table
      {chapters.map(chapter => (
        <div>This is chapter: {chapter.id}</div>
      ))}
      <button onClick={this.onClick}>
        Add Chapter
      </button>
    </div>
  }
}

export default ChapterTable;