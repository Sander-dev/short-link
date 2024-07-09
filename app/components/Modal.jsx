import axios from "axios";
import React from "react";
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
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto z-10">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <h5 className="text-xl font-bold leading-normal text-danger-700">
                  {constructModal.title}
                </h5>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
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
              </div>
              <div className="mt-4">{constructModal.body}</div>
            </div>
            <div className="px-6 py-4 bg-gray-100 flex justify-end space-x-4">
              <button
                type="button"
                className="inline-block rounded bg-success-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-success-700 transition duration-150 ease-in-out hover:bg-success-100 focus:bg-success-100 focus:outline-none focus:ring-0 active:bg-success-200"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-danger-600 focus:bg-danger-600 focus:outline-none focus:ring-0 active:bg-danger-700"
                onClick={handleAction}
              >
                {constructModal.buttonName}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
