import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useMe() {
  const { data, error, isLoading } = useSWR(`/api/me`, fetcher);

  return { data, error, isLoading };
}
