import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import styles from './SearchToggle.module.scss'

const SearchToggle = ({ enable, onClick }) => {
  return (
    <div className={styles.toggler}>
      {enable ? (
        <FaTimes onClick={onClick} className={styles.icon} />
      ) : (
        <GoSearch onClick={onClick} className={styles.icon} />
      )}
    </div>
  )
}

export default SearchToggle
