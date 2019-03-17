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
  highlights: string[];
  title: string;
}

type Role = {
  highlights: string[];
  dates: Dates;
  employerName: string;
  roleTitle: string;
}

type RoleProps = {
  job: Role;
}
