import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Residential.module.css'
import ButtonBookMe from '../Components/ButtonBookMe'

const ResidentialCleaning = () => {
    return (
        <>
            <section className={styles.services}>
                <h2 className={styles.titleResidential}>Residential Cleaning</h2>
                <p className={styles.residentialText}>We take care of cleaning your home, you may be calm at work or your vacation.</p>
                <ul className='services-residential_list'>
                    <li>Bedrooms & Living Rooms</li>
                    <li>Bathrooms</li>
                    <li>Kitchen</li>
                    <li>Windows</li>
                    <li>Walls</li>
                    <li>Appliances</li>
                    <li>Move in / Move out</li>
                    <li>Hardwood & Carpet Floors</li>
                </ul>

                <h2 className={styles.titleAirbnb}>AirBnb Cleaning</h2>
                <p className={styles.residentialText}>Your property will be in the best hands for a fast and efficent cleaning, your clients will feel like a home.</p>
                <ul className='services-airbnb_list'>
                    <li>Bedrooms & Living Rooms</li>
                    <li>Bathrooms</li>
                    <li>Kitchen</li>
                    <li>Windows</li>
                    <li>Walls</li>
                    <li>Appliances</li>
                    <li>Hardwood & Carpet Floors</li>
                    <li>Dishes</li>
                </ul>
                <ButtonBookMe />
            </section>
        </>
    )
}

export default ResidentialCleaning