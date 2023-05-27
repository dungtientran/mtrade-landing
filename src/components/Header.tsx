/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='bg-red-light w-full' >
                <div className='wrapper h-[112px] tablet:h-[122px] flex items-center justify-center gap-6 px-[30px]'>
                    
                    <Link href={"/"} className='w-[160px] overflow-hidden rounded-sm'>
                        <img
                            src="/icons/compaty/gamuda land.png"
                            alt="icon"
                            className='w-full h-full object-contain'
                        />
                    </Link>
                    <Link href={"/"}>
                        <img
                            src="/icons/header-icons/header-icon.png"
                            alt="icon"
                            className='w-full h-full object-contain'
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
