import Link from 'next/link';
import * as React from 'react';

export interface IInforCompatyProps {
  name?: string
  infor?: string
  email?: string
  website?: string
  contactNumber?: string
}

export function InforCompaty({ name, email, infor, website, contactNumber }: IInforCompatyProps) {
  return (
    <>
      
      <div className='px-[15px] text-[14px] flex-1 space-y-[10px] font-noto'>
        <strong>{name}</strong>
        <div>
          {/* <p>Address:</p> */}
          <p>{infor}</p>
        </div>
        <div>
          <p>Website:</p>
          <Link href={`${website}`} className='text-green-link' >{website}</Link>
        </div>
        <div>
          <p>Email:</p>
          <p className='text-green-link'> {email || "..."}</p>
        </div>
        <div>
          <p>Contact Number:</p>
          <p>{contactNumber}</p>
        </div>
      </div>
    </>
  );
}
