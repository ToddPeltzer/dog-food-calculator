import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

export default function useDogsQuery() {

  const createKey = () => ['dog-breeds', {}]

  return useQuery (
    createKey(),
    async () => {
      const { data } = await axios.get (
        'https://api.api-ninjas.com/v1/dogs'
      );
      return data;
    }
  );
}
