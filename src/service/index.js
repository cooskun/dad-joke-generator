import useSWR from 'swr'

export const useRandomJoke = () => {
  const { data, error, mutate } = useSWR('/')

  return {
    data: data?.joke,
    loading: !data?.joke && !error,
    error: error,
    mutate,
  }
}

export const useSearchedJokes = searchTerm => {
  const { data, error } = useSWR(
    searchTerm ? `/search?term=${searchTerm}` : null
  )

  return {
    data: data?.results ?? [],
    loading: !data?.results?.length > 0 && !error,
    error: error,
  }
}
