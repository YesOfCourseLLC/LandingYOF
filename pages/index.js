/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import LogoImage from '../public/images/logos/1-logo.png'
import backgroundImagePoints from '../public/images/backgroundpoints.png'
import cupoints from '../public/images/cup.png'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Yes Of Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>

      </header>

      <main>
      </main>
        <section className='start'>
          <Image className='start-logo' src={LogoImage} alt="logo" />
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
            <Image src={backgroundImagePoints} alt="happy family"/>
            <Image src={cupoints} alt="illustration gift points"/>
          </div>
          <p>We believe in our clients, so we work to generate greater benefits for our most loyal clients. For every 5 points, there is a $2 discount to use whenever you want.</p>
          <Link className='services-buttonBookme buttonBookme' href="/bookme">Book me</Link>
          <span>*When you make a reservation with us, don't forget your user login, or your could lose your gifts.</span>
        </section>

      <footer>
      </footer>
    </div>
  )
}
