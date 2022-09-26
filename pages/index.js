import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'
import Calendar from '../components/Calendar'
import Vibes from '../components/Containers/Vibes'
import Layout from '../components/Layout/Layout'
import ResidentialCleaning from '../components/Containers/Residential'
import GiftPoints from '../components/Containers/GiftPoints'

export default function Home() {

  return (
    <main>
      <Head>
        <title>Yeah Of Course | YOF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Vibes />
        <ResidentialCleaning />
        <GiftPoints />
      </Layout>
    </main>
  )
}
