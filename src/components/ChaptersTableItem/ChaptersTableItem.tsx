import * as React from "react";
import { inject, observer } from "mobx-react";
import DeleteIcon from 'mdi-react/DeleteIcon';
import EditIcon from 'mdi-react/EditIcon';
import DoneIcon from 'mdi-react/DoneIcon';

import ChapterStore, { Chapter } from "src/mobx/chapterStore";

import './styles.css';

interface ChaptersTableItemProps {
  chapter: Chapter;
  store: ChapterStore;
}

interface ChaptersTableItemState {
  editMode: boolean;
}

@inject('store')
@observer
export class ChaptersTableItem extends React.Component<ChaptersTableItemProps, ChaptersTableItemState> {

  private itemRef: React.RefObject<HTMLDivElement>;

  constructor(props: ChaptersTableItemProps){
    super(props);
    this.itemRef = React.createRef();
    this.state = {
      editMode: this.props.chapter.id === 0
    }
  }

  private remove = () => {
    const { store, chapter } = this.props;

    if(this.itemRef.current !== null) {
    this.itemRef.current.classList.add('chapter-table-item-remove');

      window.setTimeout(() => {
        store.removeChapter(chapter.id);
      }, 250);
    }
  }

  private edit = () => {
    this.setState({ editMode: true });
  }

  private save = () => {
    this.setState({ editMode: false });
  }

  private renderEditOptions = () => {
    return[
      <div key='edit-icon' className='chapters-table-item-edit' onClick={this.edit}>
        <EditIcon className='edit-icon' />
      </div>,
      <div key='delete-icon' className='chapters-table-item-delete' onClick={this.remove}>
        <DeleteIcon className='delete-icon'/>
      </div>
    ]
  };

  private renderEditingOptions = () => {
    return <div className='chapters-table-item-done' onClick={this.save}>
        <DoneIcon className='done-icon' />
    </div>
  }

  public render() {
    const { chapter } = this.props;
    const { editMode } = this.state;

    return (
    <div className={'chapters-table-item'} ref={this.itemRef}>
      <div className={'chapters-table-item-content'}>
       <div className='title'>Frontend Chapter</div> 
       <div>{chapter.date.toDateString()}</div>
      </div>
     {!editMode && this.renderEditOptions()}
     {editMode && this.renderEditingOptions()}
    </div>
    );
  }
}

export default ChaptersTableItem;