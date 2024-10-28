import { environment } from "@/environment/environment";
import { ICreatePollRequest } from "@/models/request/ICreatePollRequest";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postData = async (pollData: ICreatePollRequest) => {
  return await axios.post(`${environment.httpApiUrl}/api/polls/`, pollData);
}

export function useCreatePollMutate() {
  const mutate = useMutation({
    mutationFn: postData
  });

  return mutate;
}
