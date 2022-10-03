import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/GiftPoints.module.css'

const ButtonBookMe = () => {
  const router = useRouter()
  return (
    <button className={styles.buttonBookme} onClick={() => router.push('/bookme')}>Book me</button>
  )
}

export default ButtonBookMe