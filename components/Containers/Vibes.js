import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Vibes.module.css'

const Vibes = () => {
    return (
        <main className=''>
            <section className={styles.vibesContainer}>
                <figure className={styles.figureLogo}>
                    <Image width="1000" height="800" className='start-logo' src="/images/logos/1-logo.png" alt="logo" />
                </figure>
                <h1 className='start-tittle'>NEW VIBES FOR YOUR HOME</h1>
                <Link className='start-buttonBookme buttonBookme' href="/bookme">Book me</Link>
            </section>

            <section className='services'>
                <h2 className='services-residential_tittle'>Residential Cleaning</h2>
                <p className='services-residential_text'>We take care of cleaning your home, you may be calm at work or your vacation.</p>
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

                <h2 className='services-airbnb_tittle'>AirBnb Cleaning</h2>
                <p className='services-airbnb_text'>Your property will be in the best hands for a fast and efficent cleaning, your clients will feel like a home.</p>
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
                <Link className='services-buttonBookme buttonBookme' href="/bookme">Book me</Link>
            </section>

            <section>
                <div>
                    <Image width={50} height={100} src="/images/backgroundpoints.png" alt="happy family" />
                    <Image width={50} height={100} src="/images/cup.png" alt="illustration gift points" />
                </div>
                <p>We believe in our clients, so we work to generate greater benefits for our most loyal clients. For every 5 points, there is a $2 discount to use whenever you want.</p>
                <Link className='services-buttonBookme buttonBookme' href="/bookme">Book me</Link>
                <span>*When you make a reservation with us, don't forget your user login, or your could lose your gifts.</span>
            </section>

            <footer>
            </footer>
        </main>
    )
}

export default Vibes