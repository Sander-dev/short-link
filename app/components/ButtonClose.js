import { useState } from "react";
import Modal from "./Modal";

export default function ButtonClose({ idShortLink }) {
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        type="button"
        className={`bg-danger-400 rounded px-3 py-3 text-base font-medium leading-normal text-[#000000] shadow-md transition duration-150 ease-in-out hover:bg-danger hover:text-white hover:shadow-lg focus:bg-buttonColor focus:shadow-xl focus:outline-none focus:ring-0 active:bg-[#bababa] active:shadow-xl dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-xl dark:active:shadow-xl`}
        onClick={() => handleButtonClick()}
      >
        <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      {showModal && (
        <Modal
          context={"Excluir"}
          showModal={showModal}
          setShowModal={setShowModal}
          idShortLink={idShortLink}
        />
      )}
    </>
  );
}
