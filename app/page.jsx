'use client'

import { useState } from 'react';
import axios from 'axios';


// tw-elements
import "tw-elements-react/dist/css/tw-elements-react.min.css";

// Components
import InputWithIcon from './components/InputWithIcon'
import ButtonLarge from "./components/ButtonLarge";
import Circle from "./components/Circle";
import Paste from '@/public/Paste.png'
import Copy from '@/public/Copy.png'
import Alert from './components/Alert';
import UseCopy from './components/UseCopy';
import UsePaste from './components/UsePaste';

export default function Home() {

  const pasteFromClipboard = UsePaste();
  const copyToClipboard = UseCopy();

  const [showInput, setShowInput] = useState(false);
  const [shortLink, setShortLink] = useState('');
  const [longLink, setLongLink] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);


  const handleLink = async (event) => {
    event.preventDefault();

    if (!longLink.trim()) {
      setError("Insira um link válido para encurtar");
      setShowInput(false);
      setShowError(true);
      return;
    }

    try {
      const access_token = window.localStorage.getItem('access_token');
      let response;
      if (access_token) {
        response = await axios.post('http://127.0.0.1:8000/api/v1/link/shorten-link', {
          link_long: longLink
        }, {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        });
      } else {
        setShowInfo(true);
        response = await axios.post('http://127.0.0.1:8000/api/v1/link/shorten-link-no-auth', {
          link_long: longLink
        });
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
    <main className='flex flex-col'>
      <div className='flex container-sm lg:container flex-col p-16'>
        <form onSubmit={handleLink}>
          <h1 className='font-montserrat text-5xl'>Encurtador de link</h1>
          <div className='mt-20 ml-2 w-full '>
            <div className='w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6'>
              <InputWithIcon src={Paste} onChange={(e) => setLongLink(e.target.value)} value={longLink}></InputWithIcon>
              <div className=''>
                <ButtonLarge text='Encurte seu link aqui'></ButtonLarge>
              </div>
              {showError && <Alert alert="error" text={error} />}
              {showInput && <InputWithIcon onClick={() => copyToClipboard(shortLink)} src={Copy} value={shortLink} />}
              {showInfo && <Alert alert="info" text="Ao fazer login, você terá acesso privilegiado a estatísticas detalhadas sobre quem clicou nos seus links" title="Aviso!" />}
            </div>
          </div>
        </form>
      </div>
      <div className='max-lg:invisible bg-cover lg:bg-logooficial w-[500px] h-[400px] absolute right-40 mt-14'></div>
      <div className='fixed bottom-0 left-0 w-full flex justify-around'>
        <div>
          <Circle></Circle>
          <p>lorem meu pau 1</p>
        </div>
        <div>
          <Circle></Circle>
          <p>lorem meu pau 2</p>
        </div>
        <div>
          <Circle></Circle>
          <p>lorem meu pau 3</p>
        </div>
      </div>
    </main>
  );
}
