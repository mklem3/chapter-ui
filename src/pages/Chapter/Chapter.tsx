import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import ChapterStore from '../../mobx/chapterStore';

interface InjectedProps extends Props {
  store: ChapterStore;
}
interface Props {
  id: string;
}

@inject('store')
@observer
class Chapter extends React.Component<Props> {
  private get injected() {
    return this.props as InjectedProps;
  }

  public render() {
    const idInt = parseInt(this.props.id, 10);
    const chapter = this.injected.store.chapter(idInt);
    if (!chapter) {
      return <Redirect to="/404" />;
    }

    return (
      <div>
        Well well {this.props.id} {chapter.date.toDateString()}
      </div>
    );
  }
}

export default Chapter;
