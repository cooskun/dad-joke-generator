import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import classnames from 'classnames'
import styles from './SearchToggle.module.scss'

const SearchToggle = ({ exitAnimation }) => {
  const iconClasses = classnames(styles.icon, 'cy-toggle-search')

  return (
    <div className={styles.toggler}>
      <Switch>
        <Route exact path="/">
          <Link to="/search">
            <GoSearch className={iconClasses} />
          </Link>
        </Route>

        <Route path="/search">
          <FaTimes onClick={exitAnimation} className={iconClasses} />
        </Route>
      </Switch>
    </div>
  )
}

export default SearchToggle
