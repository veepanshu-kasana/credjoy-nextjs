import Header from '@/components/common/Header'
import React from 'react'

function AuthLayout({children}:Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
        <Header/>
        <main>{children}</main>
    </div>
  )
}

export default AuthLayout