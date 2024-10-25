import { IOption } from "./IOption";

export interface IPoll {
  id?: number;
  title: string;
  start_date: string;
  end_date: string;
  options: IOption[];
}