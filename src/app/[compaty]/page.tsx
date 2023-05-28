/* eslint-disable @next/next/no-img-element */
// "use client"
import React, { useEffect, useState } from 'react';
import { listCompany } from '@/utils/listCompany';
import { BannerDetails } from '@/components/BannerDetails';
import { ICompaty } from '@/models/compaty';
import { LogoCompaty } from '@/components/LogoCompaty';
import { InforCompaty } from '@/components/InforCompaty';
import { convertString } from '@/utils/convertString';
import { Metadata } from 'next';



interface Props {
  params: {
    compaty: string;
  };
}

export function generateMetadata({ params }: Props) {
  const detailFindCompaty = listCompany?.find(
    item => convertString(item?.name) === params?.compaty
  )
  if (!detailFindCompaty)
    return {
      title: "Not Found",
    };

  return {
    title: detailFindCompaty?.name,
  };
}


const Compaty = ({ params }: Props) => {
  const detailCompaty = listCompany?.find(
    item => convertString(item?.name) === params?.compaty
  )

  if (!detailCompaty) {
    return <div className='h-screen flex justify-center items-center pt-16 text-4xl text-gray-400 uppercase'>Not Found</div>
  }

  return (
    <div>
      <div>
        <div className=' tablet:h-[450px] wrapper flex items-center justify-center my-[10px] px-[15px] '>
          <img
            src={detailCompaty?.bannerDetails}
            alt={detailCompaty?.name}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='bg-green-light flex items-center justify-center'>
          <div className='text-[14px] text-white py-3 font-noto'>
            <p>Malaysia Company at Vietnam</p>
            <p>Công Ty Malaysia Tại Việt Nam</p>
          </div>
        </div>
        <div>
          <div className=' tablet:wrapper py-[50px] tablet:py-[90px] tablet:flex items-center'>
            <LogoCompaty
              compaty={detailCompaty?.name}
              logo={detailCompaty?.src}
            />
            <InforCompaty
              website={detailCompaty?.website}
              name={detailCompaty?.name}
              infor={detailCompaty?.details}
              contactNumber={detailCompaty?.contactNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compaty
