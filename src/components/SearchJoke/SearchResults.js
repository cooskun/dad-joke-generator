import React from 'react'
import classnames from 'classnames'
import styles from './SearchResults.module.scss'

const Wrapper = ({ children }) => {
  return (
    <div className={styles.results}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

const SearchResults = ({ results }) => {
  const itemClasses = classnames(styles.resultItem, 'cy-search-result-item')
  const noResultClasses = classnames(
    styles.resultItem,
    'cy-search-no-result-item'
  )

  if (!results.length) {
    return (
      <Wrapper>
        <p className={noResultClasses}>
          No found any joke belongs your search term!
        </p>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {results.map(result => (
        <p key={result.id} className={itemClasses}>
          {result.joke}
        </p>
      ))}
    </Wrapper>
  )
}

export default SearchResults
