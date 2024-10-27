import { environment } from "@/environment/environment";
import { IPoll } from "@/models/entities/IPoll";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export function usePollData(pollId: string | number) {
  const router = useRouter();
  
  return useQuery<IPoll>({
    queryKey: ["poll", pollId],
    queryFn: async () => {
      try {
        const response = await axios.get(`${environment.httpApiUrl}/api/polls/${pollId}`);
        return response.data.data;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404)
          router.push("/not-found");
        throw err;
      }
    },
    // refetchInterval: 1
  });
}
