import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/GiftPoints.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'

const GiftPoints = () => {
    return (
        <section className="px-8">
            <div className={styles.containerImages}>
                <figure className={styles.figureLogoV}>
                    <img className={styles.imgV} src="/images/backgroundpoints.png" alt="happy family" />
                </figure>
                <figure className={styles.figureLogo}>
                    <img className={styles.imgV} src="/images/cup.png" alt="illustration gift points" />
                </figure>
            </div>
            <div className={styles.containerTexts}>
                <p className={styles.residentialText}>We believe in our clients, so we work to generate greater benefits for our most loyal clients. For every 5 points, there is a $2 discount to use whenever you want.</p>
                <figure className={styles.containerClean}>
                    <img className='w-full' src='/images/figures/IMG-20220930-WA0023.jpg' />
                    <img className={styles.imgClean} src='/images/5.png' />
                </figure>
                <ButtonBookMe />
                <span className={styles.spanWhen}>*When you make a reservation with us, don&apos;t forget your user login, or your could lose your gifts.</span>
            </div>
        </section>
    )
}

export default GiftPoints