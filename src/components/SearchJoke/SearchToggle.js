import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import styles from './SearchToggle.module.scss'

const SearchToggle = ({ exitAnimation }) => {
  return (
    <div className={styles.toggler}>
      <Switch>
        <Route exact path="/">
          <Link to="/search">
            <GoSearch className={styles.icon} />
          </Link>
        </Route>

        <Route path="/search">
          <FaTimes onClick={exitAnimation} className={styles.icon} />
        </Route>
      </Switch>
    </div>
  )
}

export default SearchToggle
