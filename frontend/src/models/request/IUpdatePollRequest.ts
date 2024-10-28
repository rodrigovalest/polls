interface IOptions {
  description: string;
}

export interface IUpdatePollRequest {
  title: string;
  start_date: string;
  end_date: string;
  options: IOptions[];
}
