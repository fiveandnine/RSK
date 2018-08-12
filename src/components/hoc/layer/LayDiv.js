import React from 'react'
import cx from 'classnames'
import styles from './layer.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
const Dialog = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
    </div>
    <div className={styles.message}>{message}</div>
    <div className={styles.buttons}>
      <button className={styles.button} onClick={onCancel}>
        取消
      </button>
      <button className={cx(styles.button, styles.active)} onClick={onConfirm}>
        确定
      </button>
    </div>
  </div>
)

export default (Dialog)
