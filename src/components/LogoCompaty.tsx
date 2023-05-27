/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export interface ILogoCompatyProps {
    logo?: string
    compaty?: string
}

export function LogoCompaty({ logo, compaty }: ILogoCompatyProps) {
    return (
        <div className='px-[15px] h-[30vh] target:w-[555px] tablet:h-[222px] flex-1 flex items-center justify-center mb-[10px]'>
            <img src={logo} alt={compaty} className='w-full h-full object-contain' />
        </div>
    );
}
