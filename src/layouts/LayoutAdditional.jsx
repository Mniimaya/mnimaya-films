import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAdditional() {
    return (
        <>
            <div className='main-additional'>
                <main >
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default LayoutAdditional