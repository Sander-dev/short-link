import Image from "next/image";

// tw-elements
import "tw-elements-react/dist/css/tw-elements-react.min.css";

// Components
import InputWithIcon from './components/InputWithIcon'
import ButtonLarge from "./components/ButtonLarge";
import Circle from "./components/Circle";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='flex container-sm lg:container flex-col p-16'>
        {/* TEXTO TITULO DA PAGINA */}
        <h1 className='font-montserrat text-5xl'>Encurtador de link</h1>
        <div className='mt-20 ml-2 w-full '>
          <div className='w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6'>
          <InputWithIcon></InputWithIcon>
          <ButtonLarge text='Encurte seu link aqui'></ButtonLarge>
          </div>
        </div>
      </div>
      {/* IMAGEM LOGO CAPI CLOUD */}
      <div className=' bg-cover lg:bg-logooficial w-[500px] h-[400px] absolute right-40 mt-14'></div>
      {/* CIRCULOS*/}
      <div className='flex w-screen mt-28 justify-around'>
        <div>
          <Circle></Circle>
          {/* Continuar AQUI, espaçamento do mesmo tamanho com os paragrafos */}
          <p className=''>lorem meu pau 1</p>
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
