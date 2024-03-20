'use client'

import Image from "next/image";
import { useState } from 'react';

// tw-elements
import "tw-elements-react/dist/css/tw-elements-react.min.css";

// Components
import InputWithIcon from './components/InputWithIcon'
import ButtonLarge from "./components/ButtonLarge";
import Circle from "./components/Circle";
import Input from "./components/Input";
import LinkIcon from '@/public/LinkIcon.png'
import Copy from '@/public/Copy.png'

export default function Home() {

  const [showInput, setShowInput] = useState(false);

  const toggleComponent = () => {
    setShowInput(true);
  };

  return (
    <main className='flex flex-col'>
      <div className='flex container-sm lg:container flex-col p-16'>
        {/* TEXTO TITULO DA PAGINA */}
        <h1 className='font-montserrat text-5xl'>Encurtador de link</h1>
        <div className='mt-20 ml-2 w-full '>
          <div className='w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6'>
            <InputWithIcon src={LinkIcon}></InputWithIcon>
            <div className=''>
              <ButtonLarge onClick={toggleComponent} text='Encurte seu link aqui'></ButtonLarge>
            </div>
            {showInput ? <InputWithIcon src={Copy}/> : ''}
          </div>
        </div>
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
