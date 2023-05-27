"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const searchParams = useSearchParams();
    return (
        <div>
            <div className="bg-[url('/banner/banner.jpeg')] w-full h-[284px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <h3 className='wrapper text-[24px] wrapper text-center text-white leading-7 px-[15px]'>
                    {searchParams.get('lang') === 'en' 
                    ?"MATRADE's overseas offices in strategic locations around the globe assist Malaysian exporters and foreign buyers alike in doing business." 
                    :'Các văn phòng nước ngoài của MATRADE được đặt tại các vị trí chiến lược trên toàn cầu nhằm hỗ trợ các nhà xuất khẩu ở Malaysia và người mua hàng ở nước ngoài cùng kinh doanh.'
                    }
                </h3>
            </div>
        </div>
    )
}

export default Banner
