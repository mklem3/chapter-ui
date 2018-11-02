import { observable } from 'mobx';

export interface Chapter {
  id: number;
}

export interface Action {
  id: number;
  status: 'resolved' | 'cancelled' | 'pending';
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

class ChapterStore {
  @observable
  public chapters: Chapter[] = [{ id: 1 }, { id: 2 }];

  @observable
  public actions: Action[] = [
    {
      id: 1,
      status: 'resolved',
      name: 'Fix linting issues in Habitat Project',
      createdAt: 'Yesterday',
      updatedAt: 'now',
      deletedAt: null
    },
    {
      id: 2,
      status: 'pending',
      name: 'Teach Louis how to write proper code',
      createdAt: '2 weeks ago',
      updatedAt: '2 weeks ago',
      deletedAt: null
    },
    {
      id: 3,
      status: 'cancelled',
      name: 'Resolve commitizen issues',
      createdAt: 'Yesterday',
      updatedAt: 'now',
      deletedAt: null
    },
    {
      id: 4,
      status: 'pending',
      name: 'improve PR attendance',
      createdAt: 'Yesterday',
      updatedAt: 'now',
      deletedAt: null
    }
  ];

  public addChapter = () => {
    this.chapters.push({ id: this.chapters.length });
  };
}

export default ChapterStore;

export const chapterStore = ((window as any).chapterStore = new ChapterStore());
