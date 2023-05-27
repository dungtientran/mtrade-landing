/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { listCompany } from '@/utils/listCompany';

const BannerIcons = () => {
    return (
        <div className='bg-gray-200'>
            <ul className='wrapper flex items-center justify-between p-3 '>
                {listCompany?.map((item, index) => (
                    <li key={index} className=''>
                        <div className='rounded-lg overflow-hidden w-14 h-14 flex items-center justify-center bg-white'>
                            <img
                                src={item?.src}
                                alt={item?.name}
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BannerIcons
