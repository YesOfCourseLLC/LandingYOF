import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ locale, enabled, setEnabled, children }) => {
  return (
    <>
      <Header locale={locale} enabled={enabled} setEnabled={setEnabled} />
      {children}
      <Footer />
    </>
  )
}

export default Layout