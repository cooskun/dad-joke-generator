import React, { useEffect } from 'react'
import anime from 'animejs'
import classnames from 'classnames'
import styles from './Searchbar.module.scss'
import { animationConfig } from './lib'

const Searchbar = ({ onSubmit, onChange }) => {
  const formClasses = classnames(
    styles.form,
    'js-anime-search-form',
    'cy-search-form'
  )
  const inputClasses = classnames(styles.input, 'cy-searchbar')
  const effectClasses = classnames(styles.effect, 'js-anime-wave-effect')

  useEffect(() => {
    const timeline = anime.timeline(animationConfig.timelineBase)

    timeline
      .add(animationConfig.waveEffectForward)
      .add(animationConfig.formEffectForward, '-=400')
  }, [])

  return (
    <div className={styles.scene}>
      <div className={effectClasses} />

      <form onSubmit={onSubmit} className={formClasses}>
        <input
          type="text"
          onChange={onChange}
          placeholder="Search..."
          className={inputClasses}
        />
      </form>
    </div>
  )
}

export default Searchbar
