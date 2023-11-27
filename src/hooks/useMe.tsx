import useSWR from "swr";
import { User } from "../../type/user";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useMe() {
  const { data, error, isLoading } = useSWR<User>(`/api/me`, fetcher);

  return { data, error, isLoading };
}
