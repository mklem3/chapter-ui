import { observable } from 'mobx';

export interface Chapter {
  id: number;
  users: User[];
  date: Date;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  created: Date;
  lastUpdated: Date;
  completed: boolean;
}

export interface Event {
  id: number;
  text: string;
  created: Date;
  lastUpdated: Date;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  created: Date;
  lastUpdated: Date;
  deleted: Date;
  active: boolean;
  events: Event[];
  issues: Issue[];
}

class ChapterStore {
  @observable
  public chapters: Chapter[] = [{ id: 1, users: [], date: new Date() }];

  public addChapter = () => {
    this.chapters.push({ id: this.chapters.length + 1, users: [], date: new Date() })
  }
}

export default ChapterStore;

export const chapterStore = ((window as any).chapterStore = new ChapterStore());