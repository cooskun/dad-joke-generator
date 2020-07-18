import useSWR from "swr";

const BASE_URL = "https://icanhazdadjoke.com";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const useRandomJoke = () => {
  const { data, error, mutate } = useSWR(BASE_URL, fetcher);

  return {
    joke: data?.joke,
    loading: !data?.joke && !error,
    error: error,
    refresh: () => mutate(BASE_URL),
  };
};

export const useSearchedJokes = (searchTerm) => {
  const url = `${BASE_URL}/search?term=${searchTerm}`;
  const { data, error, mutate } = useSWR(url, fetcher);

  return {
    results: data?.results ?? [],
    loading: !data?.results?.length > 0 && !error,
    error: error,
    search: () => mutate(url),
  };
};
