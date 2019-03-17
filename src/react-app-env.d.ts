/// <reference types="react-scripts" />

/**
 * No type safety for this imported module :/
 */
declare module 'react-router-transition';

type RawDateRange = {
  start: string;
  until: string;
}

type Role = {
  highlights: string[];
  dates: RawDateRange;
  employer: string;
  title: string;
}

type RoleDatesProps = {
  started: string | null;
  until: string | null;
}

type RoleDetailsProps = {
  highlights: string[];
  title: string;
}

type RoleProps = {
  role: Role;
}

type RouteStyles = {
  left: string;
  opacity: number;
}

type RouteStylesNumeric = {
  left: number;
  opacity: number;
}
