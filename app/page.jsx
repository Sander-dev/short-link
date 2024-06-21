"use client";

import { useState } from "react";
import axios from "axios";

// tw-elements
import "tw-elements-react/dist/css/tw-elements-react.min.css";

// Components
import InputWithIcon from "./components/InputWithIcon";
import ButtonLarge from "./components/ButtonLarge";
import Circle from "./components/Circle";
import Paste from "@/public/Paste.png";
import Copy from "@/public/Copy.png";
import Alert from "./components/Alert";
import UseCopy from "./components/UseCopy";

export default function Home() {
  const copyToClipboard = UseCopy();

  const [showInput, setShowInput] = useState(false);
  const [shortLink, setShortLink] = useState("");
  const [longLink, setLongLink] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleLink = async (event) => {
    event.preventDefault();

    if (!longLink.trim()) {
      setError("Insira um link válido para encurtar");
      setShowInput(false);
      setShowError(true);
      setShowInfo(false);
      return;
    }

    try {
      const access_token = window.localStorage.getItem("access_token");
      let response;
      if (access_token) {
        response = await axios.post(
          "http://127.0.0.1:8000/api/v1/link/shorten-link",
          {
            link_long: longLink,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
      } else {
        setShowError(false);
        setShowInfo(true);
        response = await axios.post(
          "http://127.0.0.1:8000/api/v1/link/shorten-link-no-auth",
          {
            link_long: longLink,
          }
        );
      }
      setShortLink(response.data.link_short);
      setShowInput(true);
      setShowError(false);
    } catch (error) {
      setError(error.response.data.detail);
      setShowInput(false);
      setShowError(true);
    }
  };

  return (
    <main className="flex items-center justify-center">
      <div className="flex lg:w-1/2 md:w-full h-[60vh] justify-center items-center">
        <form onSubmit={handleLink} className="flex flex-col lg:m-16 m-1">
          <h1 className="font-montserrat text-5xl flex justify-center">
            Encurtador de link
          </h1>
          <div className="flex flex-col items-center mt-16 w-full ">
            <div className="w-full">
              <InputWithIcon
                src={Paste}
                onChange={(e) => setLongLink(e.target.value)}
                value={longLink}
              ></InputWithIcon>
              <div className="">
                <ButtonLarge text="Encurte seu link aqui"></ButtonLarge>
              </div>
              {showError ? <Alert alert="error" text={error} /> : null}
              {showInput && (
                <InputWithIcon
                  onClick={() => copyToClipboard(shortLink)}
                  src={Copy}
                  value={shortLink}
                />
              )}
              {showInfo && (
                <Alert
                  alert="info"
                  text="Ao fazer login, você terá acesso privilegiado a estatísticas detalhadas sobre quem clicou nos seus links"
                  title="Aviso!"
                />
              )}
            </div>
          </div>
        </form>
      </div>
      <aside className="flex justify-center items-center w-1/2 h-[60vh] max-lg:w-0 max-lg:hidden">
        <div className="max-lg:hidden bg-cover lg:bg-logooficial w-[520px] h-[400px]  mt-14"></div>
      </aside>
      <div className="fixed bottom-8 left-0 w-full flex justify-around">
        <div>
          <Circle img="/teste1.png"></Circle>
          <p></p>
        </div>
        <div>
          <Circle img="/teste2.png"></Circle>
          <p></p>
        </div>
        <div>
          <Circle img="/teste3.png"></Circle>
          <p></p>
        </div>
      </div>
    </main>
  );
}
