import { environment } from "@/environment/environment";
import { IPoll } from "@/models/entities/IPoll";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (): Promise<IPoll[]> => {
  const response = await axios.get(`${environment.httpApiUrl}/api/polls`);
  return response.data.data;
}

export function useAllPollsData() {
  return useQuery<IPoll[]>({
    queryKey: ["poll"],
    queryFn: fetchData
  });
}
