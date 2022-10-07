import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Vibes.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'
import en from '../../locales/en'
import es from '../../locales/es'

const Vibes = ({ locale, enabled, setEnabled }) => {

    const len = locale === 'en-US' ? en : es;

    return (
        <>
            <section className='pt-16 px-8'>
                <section className={styles.vibesContainer}>
                    <figure className={styles.figureLogo}>
                        <img className={styles.imgV} src="/images/logos/1-logo.png" alt="logo" />
                    </figure>
                    <h1 className={styles.titleScreenOne}>{len.newVibes}</h1>
                    <ButtonBookMe />
                </section>
            </section>
            <figure className={`${styles.figureCleaning} pt-8`}>
                <img className='w-full' src={`${enabled ? '/images/figures/IMG-20220930-WA0028.jpg' : '/images/figures/Path20.svg' }`} />
                <img className={styles.imageCleaningBath} src='/images/7.png' alt='cleaning bath' />
            </figure>
        </>
    )
}

export default Vibes