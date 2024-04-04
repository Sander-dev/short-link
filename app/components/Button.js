'use client'

import React from "react";
import { useRouter } from 'next/navigation'

export default function Button(props) {
  const router = useRouter()
  return (
    <>
      <button
        onClick={() => router.push(props.route)}
        type="button"
        className={`bg-white rounded px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-[#8B451A] shadow-md transition duration-150 ease-in-out hover:bg-[#d9d9d9] hover:shadow-lg focus:bg-buttonColor focus:shadow-xl focus:outline-none focus:ring-0 active:bg-[#bababa] active:shadow-xl dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-xl dark:active:shadow-xl ${props.attribute}`}

      >
        {props.text}
      </button>
    </>
  );
}

