import constants from 'src/constants';

const { HOME, PROFILE, PROTECTED, JS, FILTERS } = constants.routes;

interface IRoute {
  path: string;
  label: string;
}

export const routes: IRoute[] = [
  {
    path: HOME,
    label: 'Home',
  },
  {
    path: PROFILE,
    label: 'Profile',
  },
  {
    path: PROTECTED,
    label: 'Protected',
  },
  {
    path: JS,
    label: 'Js',
  },
  {
    path: FILTERS,
    label: 'Filters',
  },
];
