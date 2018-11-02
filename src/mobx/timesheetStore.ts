// import { observable, computed } from 'mobx';

// export interface TimesheetItem {
// 	id: number;
// 	comment: string;
// 	duration: number;
// 	from: string;
// 	to: string;
// 	project: { id: number, name:  string};
// }
// export interface Timesheet {
// 	id: number;
// 	code: string;
// 	company: string;
// 	status: string;
// 	lastUpdated: string;
// 	numberOfHours: number;
// 	items: TimesheetItem[];
// }
// export interface Company {
// 	id: number;
// 	name: string;
// 	projects: Project[];
// }
// export interface Project {
// 	id: number;
// 	name: string;
// }
// class TimesheetStore {
// 	@observable
// 	public timesheets: Timesheet[] = [
// 		{
// 			id: 1,
// 			code: 'CSDAG1',
// 			company: 'CompareTheMarket',
// 			status: 'DRAFT',
// 			lastUpdated: '19th October',
// 			numberOfHours: 40,
// 			items: [
// 				{
// 					id: 1,
// 					comment: 'AAA',
// 					duration: 10,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Meerkat'}
// 				},
// 				{
// 					id: 2,
// 					comment: 'BBB',
// 					duration: 20,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Apple'}
// 				}
// 			]
// 		},
// 		{
// 			id: 2,
// 			code: 'CSDAG2',
// 			company: 'Auto&General',
// 			status: 'SUBMITTED',
// 			lastUpdated: '19th October',
// 			numberOfHours: 43,
// 			items: [
// 				{
// 					id: 1,
// 					comment: 'AAA',
// 					duration: 10,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Meerkat'}
// 				},
// 				{
// 					id: 2,
// 					comment: 'BBB',
// 					duration: 20,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Apple'}
// 				}
// 			]
// 		},
// 		{
// 			id: 3,
// 			code: 'CSDAG3',
// 			company: 'CompareTheMarket',
// 			status: 'APPROVED',
// 			lastUpdated: '19th October',
// 			numberOfHours: 60,
// 			items: [
// 				{
// 					id: 1,
// 					comment: 'AAA',
// 					duration: 10,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Banana'}
// 				},
// 				{
// 					id: 2,
// 					comment: 'BBB',
// 					duration: 20,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Meerkat'}
// 				}
// 			]
// 		},
// 		{
// 			id: 4,
// 			code: 'CSDAG5',
// 			company: 'CompareTheMarket',
// 			status: 'CANCELLED',
// 			lastUpdated: '20th October',
// 			numberOfHours: 4,
// 			items: [
// 				{
// 					id: 1,
// 					comment: 'AAA',
// 					duration: 10,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Banana'}
// 				},
// 				{
// 					id: 2,
// 					comment: 'BBB',
// 					duration: 20,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'NASA'}
// 				}
// 			]
// 		},
// 		{
// 			id: 5,
// 			code: 'AAAAAA',
// 			company: 'Auto&General',
// 			status: 'APPROVED',
// 			lastUpdated: '19th October',
// 			numberOfHours: 3,
// 			items: [
// 				{
// 					id: 1,
// 					comment: 'AAA',
// 					duration: 10,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'NASA'}
// 				},
// 				{
// 					id: 2,
// 					comment: 'BBB',
// 					duration: 20,
// 					from: new Date().toString(),
// 					to: new Date().toString(),
// 					project: { id: 35, name:  'Meerkat'}
// 				}
// 			]
// 		}
// 	];
// 	@observable
// 	public companies = [
// 		{
// 			id: 1,
// 			name: 'CompareTheMarket',
// 			projects: [
// 				{
// 					id: 35,
// 					name: 'Meerkat'
// 				},
// 				{
// 					id: 36,
// 					name: 'Baby Oleg'
// 				}
// 			]
// 		},
// 		{
// 			id: 2,
// 			name: 'iSelect',
// 			projects: [
// 				{
// 					id: 37,
// 					name: 'Banana'
// 				},
// 				{
// 					id: 38,
// 					name: 'NASA'
// 				}
// 			]
// 		},
// 		{
// 			id: 3,
// 			name: 'Budget direct',
// 			projects: [
// 				{
// 					id: 39,
// 					name: 'Apple'
// 				}
// 			]
// 		}
// 	];
	
// 	@computed
// 	get getLoading(): Timesheet[] {
// 		return this.timesheets;
// 	}

// 	@computed
// 	get getDraftTimesheets(): Timesheet[] {
// 		return this.timesheets.filter(t => t.status === 'DRAFT');
// 	}
// 	public addTimesheet = (timesheet: Timesheet) => {
// 		this.timesheets.push(timesheet);
// 	};
// 	public deleteTimesheet = (id: number) => {
// 		const index = this.timesheets.findIndex(timesheet => timesheet.id === id);
// 		this.timesheets.splice(index, 1);
// 	}

// 	public async loadTimesheets(client: ApolloClient<any>) {
// 		const data: any = await allTimesheets(client);
// 		console.log(data);
// 		if (data.allTimesheets) {
// 			this.timesheets = [...data.allTimesheets];
// 		}
// 	}
// 	public async loadCompanies(client: ApolloClient<any>) {
// 		const data: any = await allCompanies(client);
// 		console.log(data);
// 		if (data.allCompanies) {
// 			this.companies = [...data.allCompanies];
// 		}
// 	}
// }

// export default TimesheetStore;

// export const timesheetStore = ((window as any).timesheet = new TimesheetStore());
