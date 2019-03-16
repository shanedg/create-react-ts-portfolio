/// <reference types="react-scripts" />

/**
 * No type safety for this imported module :/
 */
declare module 'react-router-transition';

type Dates = {
  start: string | Date;
  end: 'present' | Date;
}

type RoleDetailsProps = {
  bullets: string[];
  title: string;
}

type Job = {
  bullets: string[];
  dates: Dates;
  employerName: string;
  roleTitle: string;
}

type JobProps = {
  job: Job;
}
