import useSWR from 'swr'

const BASE_URL = 'https://icanhazdadjoke.com'

const fetcher = url =>
  fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json())

export const useRandomJoke = () => {
  const { data, error, mutate } = useSWR(BASE_URL, fetcher, {
    revalidateOnFocus: false,
  })

  return {
    data: data?.joke,
    loading: !data?.joke && !error,
    error: error,
    mutate,
  }
}

export const useSearchedJokes = searchTerm => {
  const url = `${BASE_URL}/search?term=${searchTerm}`
  const { data, error } = useSWR(searchTerm ? url : null, fetcher, {
    revalidateOnFocus: false,
  })

  return {
    data: data?.results ?? [],
    loading: !data?.results?.length > 0 && !error,
    error: error,
  }
}
