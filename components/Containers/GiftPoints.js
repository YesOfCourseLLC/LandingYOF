import React from 'react'
import styles from '../../styles/GiftPoints.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'
import en from '../../locales/en'
import es from '../../locales/es'

const GiftPoints = ({ locale, enabled }) => {

    const len = locale === 'en-US' ? en : es;
    return (
        <section className="px-8 dark:text-white">
            <div className={styles.containerImages}>
                <figure className={styles.figureLogoV}>
                    <img className={styles.imgV} src="/images/family.png" alt="happy family" />
                </figure>
                <figure className={styles.figureLogo}>
                    <img className={styles.imgV} src="/images/cup.png" alt="illustration gift points" />
                </figure>
            </div>
            <div className={styles.containerTexts}>
                <p className={styles.residentialText}>{len.discount}</p>
                <div className={styles.containerClean}>
                    <figure className='h-36'>
                        <img className='w-full' src={`${enabled ? '/images/figures/Rectangle31.svg' : '/images/figures/Rectangle3.svg' }`} />
                    </figure>
                    <figure>
                        <img className={styles.imgClean} src='/images/5.png' />
                    </figure>
                </div>
                <ButtonBookMe />
                <span className={styles.spanWhen}>{len.gifAlert}</span>
            </div>
        </section>
    )
}

export default GiftPoints