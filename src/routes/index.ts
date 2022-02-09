import constants from "src/constants";

const { HOME, PROFILE, PROTECTED } = constants.routes;

interface IRoute {
  path: string;
  label: string;
}

export const routes: IRoute[] = [
  {
    path: HOME,
    label: "Home"
  },
  {
    path: PROFILE,
    label: "Profile"
  },
  {
    path: PROTECTED,
    label: "Protected"
  }
];
