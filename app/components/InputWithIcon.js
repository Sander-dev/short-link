'use client'

import React from 'react';
import Image from 'next/image'
import { TERipple } from 'tw-elements-react';



export default function SearchWithButtonExample(props) {
    return (
        <div className=" mb-3 relative flex w-full items-stretch">
            {/* <!--Icon Link--> */}
            <div
                className="relative z-[2] rounded-l border-y border-l border-brown  px-5 py-2 text-xs font-medium uppercase text-brown transition duration-150 ease-in-out bg-transparent hover:bg-brown  hover:border-opacity-15 focus:outline-none focus:ring-0 shadow-md"
            >
                <Image
                    width={24}
                    height={10}
                    alt='Link Icon logo'
                    src={props.src}
                    className=''>
                </Image>
            </div>
            <input
                value={props.value}
                onChange={props.onChange}
                type="input"
                className="h-11 relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-r border border-solid bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] transition duration-200 ease-in-out focus:z-[3] border-brown shadow-md focus:shadow-lg focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-brown"
                placeholder="digite sua url" ></input>


        </div>
    );
}