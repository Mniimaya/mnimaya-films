import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function Layout() {
    return (
        <>
            <div className='main'>
                <Header />
                <main >
                    <Outlet />
                </main>
                <Footer />
            </div >
        </>
    )
}

export default Layout