'use client'

import React from 'react';
import { useState } from 'react';
import { TERipple } from 'tw-elements-react';

// Components
import Input from './Input';


export default function SearchWithButtonExample( props ) {


    return (
        <>
            <TERipple className='mb-3 flex w-full flex-wrap items-stretch'>
                <button
                    onClick={props.onClick}
                    className={`bg-brown h-11 text-white relative m-0 -mr-0.5 block min-w-0 flex-auto rounded border border-solid bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-normal transition duration-250 ease-in-out focus:z-[3] border-brown shadow-md focus:shadow-xl focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:active:border-brown hover:bg-[#6b5e56] hover:shadow-lg focus:ring-0 active:bg-blak active:shadow-xl dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-xl dark:active:shadow-xl`}
                >
                    {props.text}
                </button>
            </TERipple>

        </>
    );
}