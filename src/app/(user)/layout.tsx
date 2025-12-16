import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header'
import React from 'react'

function AppLayout({children}:Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default AppLayout