'use client'

import { useState } from 'react';
import axios from 'axios';


// tw-elements
import "tw-elements-react/dist/css/tw-elements-react.min.css";

// Components
import InputWithIcon from './components/InputWithIcon'
import ButtonLarge from "./components/ButtonLarge";
import Circle from "./components/Circle";
import LinkIcon from '@/public/LinkIcon.png'
import Copy from '@/public/Copy.png'

export default function Home() {

  const [showInput, setShowInput] = useState(false);
  const [shortLink, setShortLink] = useState();
  const [longLink, setLongLink] = useState();
  const [error, setError] = useState('');

  const handleLink = async (event) => {
    event.preventDefault();

    const access_token = window.localStorage.getItem('access_token');
    if (access_token) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/link/short_link', {
          link_long: longLink
        }, {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        });
        console.log(response.data)
        setShortLink(response.data.link_short);
        setShowInput(true);
      } catch (error) {
        setError(error.response.data.message);
        console.error('Erro ao encurtar o link:', error);
      }
    }

  }


  return (
    <main className='flex flex-col'>
      <div className='flex container-sm lg:container flex-col p-16'>
        {/* TEXTO TITULO DA PAGINA */}
        <form onSubmit={handleLink}>
          <h1 className='font-montserrat text-5xl'>Encurtador de link</h1>
          <div className='mt-20 ml-2 w-full '>
            <div className='w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6'>
              <InputWithIcon src={LinkIcon} onChange={(e) => setLongLink(e.target.value)} value={longLink}></InputWithIcon>
              <div className=''>
                <ButtonLarge text='Encurte seu link aqui'></ButtonLarge>
              </div>
              {showInput ? <InputWithIcon src={Copy} value={shortLink} /> : ''}
            </div>
          </div>
        </form>
      </div>
      {/* IMAGEM LOGO CAPI CLOUD */}
      <div className='max-lg:invisible bg-cover lg:bg-logooficial w-[500px] h-[400px] absolute right-40 mt-14'></div>
      {/* CIRCULOS*/}
      <div className='flex w-screen mt-28 justify-around'>
        <div>
          <Circle></Circle>
          {/* Continuar AQUI, espaçamento do mesmo tamanho com os paragrafos */}
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
