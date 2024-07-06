import axios from "axios";
import React from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import getUrl from "./useVariables";
import { useRouter } from "next/navigation";

const logoutUser = () => {
  const token = window.localStorage.getItem("access_token");
  if (token) {
    localStorage.removeItem("access_token");
  }
};

const deleteLink = async (shortLink) => {
  const accessToken = window.localStorage.getItem("access_token");
  try {
    await axios.delete(`${getUrl}/${shortLink}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const setContext = (context) => {
  if (context === "Sair") {
    const title = "Você está saindo";
    const body = (
      <div className="text-wrap text-secondary-900 font-normal">
        Ao clicar em sair, você está ciente de que terá de fazer o login
        novamente, para verificar seus links criados e obter informações dos
        respectivos links.
      </div>
    );

    const buttonName = "Sair";
    const buttonAction = logoutUser;
    const route = "/";

    return { title, body, buttonName, buttonAction, route };
  } else {
    const title = "Você está apagando um Link";
    const body = (
      <div className="text-wrap text-secondary-900 font-normal">
        Ao clicar em excluir, você vai perder o acesso de verificação deste link
        criado. Você tem certeza dessa ação?
      </div>
    );
    const buttonName = "Excluir";
    const buttonAction = deleteLink;
    const route = "/meus-links";

    return { title, body, buttonName, buttonAction, route };
  }
};

export default function Modal({
  context,
  idShortLink,
  showModal,
  setShowModal,
  onDelete,
}) {
  const constructModal = setContext(context);
  const router = useRouter();

  const handleAction = async () => {
    setShowModal(false);
    await constructModal.buttonAction(idShortLink ? idShortLink : null);
    if (onDelete && typeof onDelete === "function") {
      onDelete(idShortLink);
    }
    if (context === "Sair") {
      router.push(constructModal.route);
      window.location.reload();
    }
  };

  return (
    <div>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              <h5 className="text-xl font-bold leading-normal dark:text-neutral-200 text-danger-700">
                {constructModal.title}
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            <TEModalBody>{constructModal.body}</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-success-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-success-700 transition duration-150 ease-in-out hover:bg-success-100 focus:bg-success-100 focus:outline-none focus:ring-0 active:bg-success-200"
                  onClick={() => setShowModal(false)}
                >
                  Fechar
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  onClick={handleAction}
                >
                  {constructModal.buttonName}
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
