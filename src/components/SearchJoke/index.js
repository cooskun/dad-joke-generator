import React, { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import anime from 'animejs'
import classnames from 'classnames'

import Searchbar from './Searchbar'
import SearchToggle from './SearchToggle'
import SearchResults from './SearchResults'

import styles from './index.module.scss'
import { animationConfig } from './lib'
import { useSearchedJokes } from '../../service'

const SearchJoke = () => {
  const history = useHistory()
  const [term, setTerm] = useState('')
  const [finalTerm, setFinalTerm] = useState('')
  const { data } = useSearchedJokes(finalTerm)

  const wrapperClasses = classnames(styles.wrapper, 'cy-search-section')

  const exitSearchArea = () => {
    const timeline = anime.timeline({
      ...animationConfig.timelineBase,
      complete: () => history.push('/'),
    })

    timeline
      .add(animationConfig.formEffectBackward)
      .add(animationConfig.waveEffectBackward, '-=200')
  }

  const handleChange = e => setTerm(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setFinalTerm(term)

    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <SearchToggle exitAnimation={exitSearchArea} />

      <Route path="/search">
        <div className={wrapperClasses}>
          <Searchbar onChange={handleChange} onSubmit={handleSubmit} />
          <SearchResults
            results={data}
            feedbackMessage={!finalTerm && 'Type something to find a joke'}
          />
        </div>
      </Route>
    </>
  )
}

export default SearchJoke
