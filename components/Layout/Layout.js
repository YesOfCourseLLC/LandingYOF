import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ enabled, setEnabled, children }) => {
  return (
    <>
      <Header enabled={enabled} setEnabled={setEnabled} />
      {children}
      <Footer />
    </>
  )
}

export default Layout