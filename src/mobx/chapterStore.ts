import { observable } from 'mobx';

export interface Chapter {
  id: number;
}

class ChapterStore {
  @observable
  public chapters: Chapter[] = [{ id: 1 }, { id: 2 }];

  public addChapter = () => {
    this.chapters.push({ id: this.chapters.length })
  }
}

export default ChapterStore;

export const chapterStore = ((window as any).chapterStore = new ChapterStore());