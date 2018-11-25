import { observable } from 'mobx';
import { allChapters } from 'src/api/allChapters';
import { allActions } from 'src/api/allActions';
import { allIssues } from 'src/api/allIssues';

export interface Chapter {
  id: number;
  users: UserChapter[];
  date: Date;
}

export interface Issue {
  id: number;
  title: string;
  status: 'resolved' | 'cancelled' | 'pending';
  description: string;
  createdAt: string;
  lastUpdated: string;
  completed: boolean;
}

export interface Event {
  id: number;
  text: string;
  created: Date;
  lastUpdated: Date;
}

export interface UserChapter {
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
  public chapters: Chapter[] = [];

  @observable
  public actions: Action[] = [];

  @observable
  public issues: Issue[] = [];

  public addChapter = () => {
    this.chapters.push({ id: 0, users: [], date: new Date() })
  }


  public removeChapter = (chapterId: number) => {
    const chapterIndex = this.chapters.findIndex(chapter => chapter.id === chapterId);
    this.chapters.splice(chapterIndex, 1);
  }
  
  public chapter = (id: number): Chapter | undefined => {
    const foundChapter = this.chapters.find((chapter: Chapter) => chapter.id === id)
    return foundChapter
  }
  public loadChapters = async () => {
    const data =  await allChapters();
    this.chapters = [...data.allChapters];
  }

  public loadActions = async () => {
    const data =  await allActions();
    this.actions = [...data.allActions];
  }

  public loadIssues = async () => {
    const data =  await allIssues();
    this.issues = [...data.allIssues];
  }
}

export default ChapterStore;

export const chapterStore = ((window as any).chapterStore = new ChapterStore());
