import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Vibes.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'

const Vibes = () => {
    return (
        <>
            <section className='pt-16 px-8'>
                <section className={styles.vibesContainer}>
                    <figure className={styles.figureLogo}>
                        <img className={styles.imgV} src="/images/logos/1-logo.png" alt="logo" />
                    </figure>
                    <h1 className={styles.titleScreenOne}>NEW VIBES FOR YOUR HOME</h1>
                    <ButtonBookMe />
                </section>
            </section>
            <figure className={`${styles.figureCleaning} pt-8`}>
                <img className='w-full' src='/images/figures/Path20.svg' />
                <img className={styles.imageCleaningBath} src='/images/7.png' alt='cleaning bath' />
            </figure>
        </>
    )
}

export default Vibes