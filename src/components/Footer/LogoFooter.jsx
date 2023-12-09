import React from 'react'
import { NavLink } from 'react-router-dom'

function LogoFooter({ className }) {
    return (
        <NavLink to='/' className={className}>
            <svg width="139" height="117" viewBox="0 0 139 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.7115 117C141.341 57.4364 82.4317 53.1818 69.6158 53.1818C56.7999 53.1818 0 55.4689 0 42.5455C67.5062 53.1954 20.9372 0 33.7531 0C46.569 0 221.505 12.7637 90.7115 117Z" fill="white" />
                <path d="M24.89 116.764L6.63728 63.5824H6.30766C6.47247 65.6321 6.60981 67.668 6.71968 69.69C6.82956 71.435 6.91196 73.277 6.9669 75.2159C7.0493 77.1271 7.09051 78.8721 7.09051 80.451V116.764H0.0036696V56.0206H11.3756L28.351 105.546H28.5982L45.6561 56.0206H57.028V116.764H49.3643V79.9109C49.3643 78.4705 49.3918 76.8224 49.4467 74.9666C49.5017 73.1108 49.5703 71.3381 49.6527 69.6484C49.7626 67.6818 49.8587 65.6875 49.9412 63.6655H49.6115L31.194 116.764H24.89Z" fill="white" />
                <path d="M75.5444 116.764H67.8807V56.0206H99.1535V62.8345H75.5444V84.2734H97.5878V91.0873H75.5444V116.764Z" fill="url(#paint0_linear_3001_3402)" />
                <defs>
                    <linearGradient id="paint0_linear_3001_3402" x1="369.175" y1="59.5637" x2="582.51" y2="120.309" gradientUnits="userSpaceOnUse">
                        <stop offset="0.377016" stopColor="#E13C52" />
                        <stop offset="0.937899" stopColor="#B92283" />
                    </linearGradient>
                </defs>
            </svg>
        </NavLink>
    )
}

export default LogoFooter