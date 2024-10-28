import { environment } from "@/environment/environment";
import { IVoteRequest } from "@/models/request/IVoteRequest";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const postData = async ({ pollId, voteData }: { pollId: string | number; voteData: IVoteRequest }): Promise<AxiosResponse<any>> => {
  return await axios.post(`${environment.httpApiUrl}/api/polls/${pollId}/vote`, voteData);
}

export function usePollVoteMutate() {
  const pollVoteMutate = useMutation({
    mutationFn: postData
  });

  return { pollVoteMutate };
}
