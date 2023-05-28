/* eslint-disable @next/next/no-img-element */
"use client"
import { listCompany } from '@/utils/listCompany'
import Link from 'next/link'
import React from 'react'
import { CardCompaty } from './CardCompaty'
import { useSearchParams } from 'next/navigation'

const Compaties = () => {
    const searchParams = useSearchParams();
    return (
        <div className='wrapper py-[70px] pt-[60px]'>
            <section>
                <h3 className='text-[24px] py-[20px] text-center mb-[25px] px-[15px]'>
                {searchParams.get('lang') === 'en' 
                    ?"Featured Malaysian products and services" 
                    :"Các sản phẩm và dịch vụ nổi bật của Malaysia"
                    }
                </h3>
                <div >
                    <ul className='grid grid-cols-3 tablet:grid-cols-6 tablet:gap-y-[80px] font-noto'>
                        {listCompany?.map((item, index) => (
                            <CardCompaty
                                key={index}
                                business={item?.business}
                                image={item?.src}
                                name={item?.name}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Compaties
