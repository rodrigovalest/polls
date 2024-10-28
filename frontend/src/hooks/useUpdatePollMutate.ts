import { environment } from "@/environment/environment";
import { IUpdatePollRequest } from "@/models/request/IUpdatePollRequest";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const postData = async ({ pollId, data }: { pollId: string | number; data: IUpdatePollRequest }): Promise<AxiosResponse<any>> => {
  return await axios.put(`${environment.httpApiUrl}/api/polls/${pollId}`, data);
}

export function useUpdatePollMutate() {
  const updatePollMutate = useMutation({
    mutationFn: postData
  });

  return { updatePollMutate };
}
