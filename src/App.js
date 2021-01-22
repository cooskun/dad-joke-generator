import React from 'react'
import RandomJoke from './components/RandomJoke'
import SearchJoke from './components/SearchJoke'
import SWRProvider from './SWRProvider'

function App() {
  return (
    <SWRProvider>
      <div className="App">
        <RandomJoke />
        <SearchJoke />
      </div>
    </SWRProvider>
  )
}

export default App
