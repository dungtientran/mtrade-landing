/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { listCompany } from '@/utils/listCompany';

const BannerIcons = () => {
    return (
        <div className='bg-gray-200 hidden tablet:block'>
            <ul className='wrapper flex items-center justify-between p-3 gap-5 px-[15px]'>
                {listCompany?.map((item, index) => (
                    <li key={index} className=''>
                        <div className='rounded-lg overflow-hidden tablet:w-12 tablet:h-12 laptop:w-14 laptop:h-14 tablet:flex items-center justify-center bg-white'>
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
