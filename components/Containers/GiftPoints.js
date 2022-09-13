import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/GiftPoints.module.css'

const GiftPoints = () => {
    return (
        <section>
            <div>
                <Image width={50} height={100} src="/images/backgroundpoints.png" alt="happy family" />
                <Image width={50} height={100} src="/images/cup.png" alt="illustration gift points" />
            </div>
            <p>We believe in our clients, so we work to generate greater benefits for our most loyal clients. For every 5 points, there is a $2 discount to use whenever you want.</p>
            <button className={styles.buttonBookme} href="/bookme">Book me</button>
            <span>*When you make a reservation with us, don't forget your user login, or your could lose your gifts.</span>
        </section>
    )
}

export default GiftPoints