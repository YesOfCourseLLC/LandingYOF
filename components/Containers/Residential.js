import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Residential.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'

const ResidentialCleaning = () => {
    return (
        <>
            <section className={`${styles.services} dark:text-white`}>
                <h2 className={styles.titleResidential}>Residential Cleaning</h2>
                <p className={styles.residentialText}>We take care of cleaning your home, you may be calm at work or your vacation.</p>
                
                <div className='flex flex-wrap justify-center dark:text-white'>
                    <ul className='services-residential_list list-disc pl-4 font-medium mb-8'>
                    <li>Bedrooms & Living Rooms</li>
                    <li>Bathrooms</li>
                    <li>Kitchen</li>
                    <li>Windows</li>
                    <li>Walls</li>
                    <li>Appliances</li>
                    <li>Move in / Move out</li>
                    <li>Hardwood & Carpet Floors</li>
                </ul>
                <figure className={styles.containerStand}>
                    <img className={styles.imgRectangle2} src='/images/figures/Rectangle2.svg' />
                    <img className={styles.imgStand} src='/images/9.png' alt='cleaning' />
                </figure>
                </div>
                
                <h2 className={styles.titleAirbnb}>AirBnb Cleaning</h2>
                <p className={`${styles.residentialText} dark:text-white`}>Your property will be in the best hands for a fast and efficent cleaning, your clients will feel like a home.</p>
                <div className='flex flex-wrap justify-center dark:text-white'>
                   <ul className='services-airbnb_list list-disc pl-4 font-medium'>
                    <li>Bedrooms & Living Rooms</li>
                    <li>Bathrooms</li>
                    <li>Kitchen</li>
                    <li>Windows</li>
                    <li>Walls</li>
                    <li>Appliances</li>
                    <li>Hardwood & Carpet Floors</li>
                    <li>Dishes</li>
                </ul> 
                <figure className={styles.containerStandTwo}>
                    <img className={styles.imgStandTwo} src='/images/2.png' />
                </figure>
                </div>
                
                <ButtonBookMe />
            </section>
        </>
    )
}

export default ResidentialCleaning