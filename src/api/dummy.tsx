import { Chapter, UserChapter, Event, Issue, Action } from "../mobx/chapterStore";

export const dummyActions: Action[] = [
  {
    id: 1,
    status: 'pending',
    name: 'Build frontend UI',
    createdAt: 'Yesterday',
    updatedAt: 'Now',
    deletedAt: null
  },
  {
    id: 2,
    status: 'resolved',
    name: 'Plan frontend UI',
    createdAt: 'Yesterday',
    updatedAt: 'Now',
    deletedAt: null
  }
];

export const dummyEvents: Event[] = [
  {
    id: 1,
    text: 'Did some cool work',
    created: new Date(),
    lastUpdated: new Date()
  },
  {
    id: 2,
    text: 'Did health reforms work :/',
    created: new Date(),
    lastUpdated: new Date()
  }
];

export const dummyIssues: Issue[] = [
  {
    id: 1,
    title: 'Dummy Issue 1',
    status: 'pending',
    description: '',
    createdAt: '20/11/18',
    lastUpdated: 'Today',
    completed: false
  },
  {
    id: 2,
    title: 'Dummy Issue 2',
    status: 'pending',
    description: '',
    createdAt: '20/11/18',
    lastUpdated: 'Yesterday',
    completed: false
  }
];

export const dummyUsers: UserChapter[] = [
  {
    id: 1,
    firstName: 'Matthew',
    lastName: 'Klemm',
    email: 'matthew.klemm@comparethemarket.com.au',
    created: new Date(),
    lastUpdated: new Date(),
    deleted: new Date(),
    active: true,
    events: dummyEvents,
    issues: dummyIssues
  },
  {
    id: 2,
    firstName: 'Artem',
    lastName: 'Moskvyak',
    email: 'artem.moskvyak@comparethemarket.com.au',
    created: new Date(),
    lastUpdated: new Date(),
    deleted: new Date(),
    active: true,
    events: dummyEvents,
    issues: dummyIssues
  }
];



export const dummyChapters: Chapter[] = [
  {
    id: 1,
    users: dummyUsers,
    date: new Date(2018, 10, 20)
  },
  {
    id: 2,
    users: dummyUsers,
    date: new Date(2018, 10, 27)
  }
];