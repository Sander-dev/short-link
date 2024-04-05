'use client'

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';


// Components
import ButtonLarge from "../components/ButtonLarge"
import Input from "../components/Input";
import LinkPhrase from "../components/LinkPhrase";

export default function login() {
    const rota = "/"
    const router = useRouter()

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login', {
                username: username,
                password: password
            });
            router.push(rota);

            const access_token = response.data.access_token
            localStorage.setItem("access_token", access_token)

            console.log('Access token saved:', access_token); // Verificar se o token de acesso está sendo corretamente salvo no localStorage
        } catch (error) {
            setError(error.response.data.message);
            console.error('Erro ao fazer login:', error);
        }
    }

    return (
        <div className='flex'>
            <section className="flex w-[50%] mt-12 bg-gray-50 dark:bg-gray-900 max-lg:w-screen justify-center items-center">
                <div className="flex flex-col px-6 py-8 mx-auto lg:py-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] justify-center items-center]">
                    <div className="bg-white rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Entrar na sua Conta
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-5">
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <div className='w-full'>
                                        <Input type="input" text="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <Input type="password" text="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Não tem uma conta? <LinkPhrase route='/register' text='Registrar'></LinkPhrase>
                                    </p>
                                </div>
                                <ButtonLarge text="Entrar"></ButtonLarge>
                                <LinkPhrase route='/forgot-password' text='Esqueceu a Senha?'></LinkPhrase>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-lg:hidden bg-cover lg:bg-capivara lg:w-[50%] my-custom-height object-bottom absolute right-0'></div>

        </div>
    );
}