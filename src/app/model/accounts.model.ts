import {IUser} from "./users.model";
import {IApp} from "./apps.model";

export interface IAccount {
  id: number,
  name: string,
  user_id: number,
  app_id: number,
  user: IUser,
  app: IApp,
}
