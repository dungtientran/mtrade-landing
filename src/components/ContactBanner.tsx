/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ContactBanner = () => {
    return (
        <div className='bg-black-light py-[80px]'>
            <div className='px-[15px] wrapper space-y-[30px] tablet:flex  justify-between text-white'>
                <div className='text-[12px] tablet:w-1/3 space-y-[10px]'>
                    <strong className='text-[16px] inline-block w-2/3'>Consulate General of Malaysia Trade Section (MATRADE)</strong>
                    <p>1206-1207,12th Floor, Me Linh Point Tower. No. 2, Ngo Duc Ke Street, District 1, Ho Chi Minh City, 00084, Vietnam</p>
                    <p className='text-left'>
                        <span>Tel: 028 3822 1468</span><br />
                        <span>Email: hcmc@matrade.gov.my</span><br />
                        <span>Facebook: @matrade.hochiminh</span>
                    </p>
                </div>

                <div className='flex flex-col tablet:w-1/3 items-end  space-y-[10px]'>
                    <p className='text-[10px]'>Managed by:</p>
                    <div className='w-[360px] h-[36px]'>
                        <img src="/footer/logo.png" alt="selfi" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-[11.9px]'>www.getshelfi.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
