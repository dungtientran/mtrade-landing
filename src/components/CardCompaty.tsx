/* eslint-disable @next/next/no-img-element */
import { convertString } from '@/utils/convertString';
import Link from 'next/link';
import React from 'react';

export interface ICardCompatyProps {
    image: string
    name: string
    business: string
}

export function CardCompaty(props: ICardCompatyProps) {
    const { business, image, name } = props;
    const a = 'MHTC / KPJ Group';


    return (
        <li className='px-[15px] flex flex-col items-center justify-between gap-2 overflow-hidden'>
            <Link
                href={`/${convertString(name)}`}
                className='h-[165px] shrink-0 p-3'
            >
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-contain'
                />
            </Link>
            <div className='text-center flex-1 flex flex-col tablet:gap-2 justify-between'>
                <Link
                    href={`/${convertString(name)}`}
                    className='text-[12px] line-clamp-2 tablet:line-clamp-3 tablet:text-[14px] h-[40px] text-[#314269] uppercase'
                >
                    {name}
                </Link>
                <p className='text-[12px] line-clamp-2 tablet:line-clamp-3 flex-1 text-gray-400  leading-4 '
                >
                    {business}
                </p>
            </div>
        </li>
    );
}
