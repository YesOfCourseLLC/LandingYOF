import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Vibes.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'

const Vibes = () => {
    return (
        <main className='px-8'>
            <section className={styles.vibesContainer}>
                <figure className={styles.figureLogo}>
                    <img className={styles.imgV} src="/images/logos/1-logo.png" alt="logo" />
                </figure>
                <h1 className={styles.titleScreenOne}>NEW VIBES FOR YOUR HOME</h1>
                <ButtonBookMe />
            </section>
        </main>
    )
}

export default Vibes