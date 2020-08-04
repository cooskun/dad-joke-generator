import React from 'react'
import classnames from 'classnames'
import { FaSyncAlt } from 'react-icons/fa'

import Waves from '../Waves'
import styles from './index.module.scss'
import { useRandomJoke } from '../../service'

const RandomJoke = ({ ...props }) => {
  const { joke, loading, error, refresh } = useRandomJoke()

  const jokeClasses = classnames(styles.text, 'cy-joke')
  const sceneClasses = classnames(styles.scene, props.className)
  const iconClasses = classnames(styles.icon, 'cy-refresh-joke', {
    [styles.iconAnimation]: loading,
  })

  if (error) return <p>Failed to load!</p>

  return (
    <div className={sceneClasses}>
      <p className={jokeClasses}>{joke ?? ''}</p>
      <FaSyncAlt className={iconClasses} onClick={refresh} />
      <Waves className={styles.waves} />
    </div>
  )
}

export default RandomJoke
