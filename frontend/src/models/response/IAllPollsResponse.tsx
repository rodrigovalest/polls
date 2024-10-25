import { IPoll } from "../entities/IPoll";

export interface IAllPollsResponse {
    message: string;
    data: IPoll[];
}