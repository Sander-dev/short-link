"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function Button(props) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const context = props.text;
  const handleButtonClick = () => {
    if (props.route) {
      router.push(props.route);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        type="button"
        className={`bg-white rounded px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-[#8B451A] shadow-md transition duration-150 ease-in-out hover:bg-[#d9d9d9] hover:shadow-lg focus:bg-buttonColor focus:shadow-xl focus:outline-none focus:ring-0 active:bg-[#bababa] active:shadow-xl dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-xl dark:active:shadow-xl whitespace-nowrap overflow-hidden ${props.attribute}`}
      >
        {props.text}
      </button>

      {showModal && (
        <Modal
          context={context}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
