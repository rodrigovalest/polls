import { environment } from "@/environment/environment";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postData = async (pollId: string) => {
  return await axios.delete(`${environment.httpApiUrl}/api/polls/${pollId}`);
}

export function useDeletePollMutate() {
  const deletePollMutate = useMutation({
    mutationFn: postData
  });

  return { deletePollMutate };
}
