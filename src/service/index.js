import useSWR from "swr";

const GET_RANDOM_JOKE = "https://icanhazdadjoke.com/";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const useRandomJoke = () => {
  const { data, error, mutate } = useSWR(GET_RANDOM_JOKE, fetcher);

  return {
    joke: data?.joke,
    loading: !data?.joke && !error,
    error: error,
    refresh: () => mutate(GET_RANDOM_JOKE),
  };
};
