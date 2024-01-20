import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

export default function useDogsQuery() {
  const createKey = () => ["dog-breeds", {}];

  return useQuery({
    queryKey: createKey(),
    queryFn: async () => {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      return data;
    },
  });
}
