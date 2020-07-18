import React from 'react'
import classnames from 'classnames'
import { FaSyncAlt } from 'react-icons/fa'

import Waves from '../Waves'
import styles from './index.module.scss'
import { useRandomJoke } from '../../service'

const RandomJoke = ({ ...props }) => {
  const { joke, loading, error, refresh } = useRandomJoke()

  const sceneClassNames = classnames(styles.scene, props.className)

  const iconClassNames = classnames(styles.icon, {
    [styles.iconAnimation]: loading,
  })

  if (error) return <p>Failed to load!</p>

  return (
    <div className={sceneClassNames}>
      <p className={styles.text}>{joke ?? ''}</p>
      <FaSyncAlt className={iconClassNames} onClick={refresh} />
      <Waves className={styles.waves} />
    </div>
  )
}

export default RandomJoke
