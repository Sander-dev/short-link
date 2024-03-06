'use client'

import React from "react";
import { TERipple } from "tw-elements-react";
import { useRouter } from 'next/navigation'

export default function Button({ text, attribute = 'bg-white', route }) {
  const router = useRouter()
  return (
    <>
      <TERipple rippleColor="#5b514a">
        <button
          onClick={() => router.push(route)}
          type="button"
          className={`rounded px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-[#8B451A] shadow-md transition duration-150 ease-in-out hover:bg-[#d9d9d9] hover:shadow-lg focus:bg-buttonColor focus:shadow-xl focus:outline-none focus:ring-0 active:bg-[#bababa] active:shadow-xl dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-xl dark:active:shadow-xl ${attribute}`}

        >
          {text}
        </button>
      </TERipple>
    </>
  );
}

