interface IOptions { 
  description: string
}

export interface ICreatePollRequest {
  title: string;
  start_date: string;
  end_date: string;
  options: IOptions []
}
