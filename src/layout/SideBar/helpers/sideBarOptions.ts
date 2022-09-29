import { APP_ROUTES } from "../../../shared/routes/app/APP_ROUTES";

export enum SideBarIcons {
  SCHEMA = "SCHEMA",
}

export const sideBarOptions = [
  { icon: SideBarIcons.SCHEMA, label: "My Schemas", url: APP_ROUTES.MY_SCHEMA },
];
