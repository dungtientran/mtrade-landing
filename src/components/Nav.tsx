'use client'
import Link from 'next/link'
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
interface QueryParams {
    query: string;
}
const Nav = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );
    return (
        <div className='bg-black-light text-white'>
            <div className='wrapper flex items-center justify-end py-[11px] px-[15px]'>
                <Link href={"/contact-us"} className='uppercase text-[14px]'>Contact us</Link>
                &nbsp; &nbsp; |&nbsp; &nbsp;
                <p className='text-[12px] flex items-center gap-3'>
                    <Link
                        href="/"
                        aria-label='vi'
                        className={`${searchParams.get("lang") ? 'opacity-80' : 'font-semibold'}`}
                    >
                        Tiếng Việt
                    </Link>
                    <button
                        aria-label='en'
                        className={`${searchParams.get("lang") ? 'font-semibold' : 'opacity-80'}`}
                        onClick={() => {
                            router.push("/" + '?' + createQueryString('lang', 'en'));
                        }}
                    >
                        English
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Nav
