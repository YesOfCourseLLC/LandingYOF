import React from 'react'
import styles from '../../styles/GiftPoints.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'
import en from '../../locales/en'
import es from '../../locales/es'

const GiftPoints = ({ locale }) => {

    const len = locale === 'en-US' ? en : es;

    return (
        <section className="px-8 dark:text-white">
            <div className={styles.containerImages}>
                <figure className={styles.figureLogoV}>
                    <img className={styles.imgV} src="/images/backgroundpoints.png" alt="happy family" />
                </figure>
                <figure className={styles.figureLogo}>
                    <img className={styles.imgV} src="/images/cup.png" alt="illustration gift points" />
                </figure>
            </div>
            <div className={styles.containerTexts}>
                <p className={styles.residentialText}>{len.discount}</p>
                <figure className={styles.containerClean}>
                    <img className='w-full' src='/images/figures/IMG-20220930-WA0023.jpg' />
                    <img className={styles.imgClean} src='/images/5.png' />
                </figure>
                <ButtonBookMe />
                <span className={styles.spanWhen}>{len.gifAlert}</span>
            </div>
        </section>
    )
}

export default GiftPoints