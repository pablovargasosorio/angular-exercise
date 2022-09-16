import {IApp} from "./apps.model";

export interface IUser {
  id: number,
  name: string,
  apps: IApp[],
}
