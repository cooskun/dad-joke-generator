import React from 'react'
import { SWRConfig } from 'swr'

const BASE_URL = 'https://icanhazdadjoke.com'

const fetcher = endpoint => {
  return fetch(BASE_URL + endpoint, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json())
}

const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
      }}>
      {children}
    </SWRConfig>
  )
}

export default SWRProvider
