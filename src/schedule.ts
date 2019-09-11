import moment from 'moment';

export interface HackathonEvent {
  name: string;
  startTime: Date;
  durationInHours: number;
}

export const Schedule: HackathonEvent[] = [
  {
    name: 'Breakfast',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 8, minute: 0, second: 0}).toDate(),
    durationInHours: 0.5,
  },
  {
    name: 'Opening Event',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 10, minute: 0, second: 0}).toDate(),
    durationInHours: 0.5,
  },
  {
    name: 'Lunch',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 12, minute: 45, second: 0}).toDate(),
    durationInHours: 1,
  },
  {
    name: 'Refreshments',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 15, minute: 0, second: 0}).toDate(),
    durationInHours: 0.5,
  },
  {
    name: 'Dinner',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 19, minute: 0, second: 0}).toDate(),
    durationInHours: 1,
  },
  {
    name: 'Night Yoga',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 20, minute: 30, second: 0}).toDate(),
    durationInHours: 1,
  },
  {
    name: 'MAD Surprise',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 22, minute: 0, second: 0}).toDate(),
    durationInHours: 0.5,
  },
  {
    name: 'Relaxation Time',
    startTime: moment({day: 11, month: 8, year: 2019, hour: 23, minute: 0, second: 0}).toDate(),
    durationInHours: 0.1,
  },
  {
    name: 'More Food',
    startTime: moment({day: 12, month: 8, year: 2019, hour: 23, minute: 30, second: 0}).toDate(),
    durationInHours: 1,
  },
  {
    name: 'Sunrise Yoga',
    startTime: moment({day: 12, month: 8, year: 2019, hour: 6, minute: 0, second: 0}).toDate(),
    durationInHours: 1,
  },
  {
    name: 'Breakfast',
    startTime: moment({day: 12, month: 8, year: 2019, hour: 8, minute: 0, second: 0}).toDate(),
    durationInHours: 0.5,
  },
  {
    name: 'Showtime!',
    startTime: moment({day: 12, month: 8, year: 2019, hour: 10, minute: 0, second: 0}).toDate(),
    durationInHours: 1.5,
  },
];
