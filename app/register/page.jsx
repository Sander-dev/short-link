'use client'

import React, { useState } from "react";
import axios from "axios";


// Components
import ButtonLarge from "../components/ButtonLarge"
import Input from "../components/Input";
import LinkPhrase from "../components/LinkPhrase";

export default function Register() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/register', {
                username: username,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            setError(error.response.data.message);
            console.error('Erro ao fazer registro:', error);
        }
    }

    return (
        <div className='flex'>
            <section className="flex w-[50%] mt-12 bg-gray-50 dark:bg-gray-900 max-lg:w-screen justify-center items-center">
                <div className="flex flex-col px-6 py-8 mx-auto lg:py-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] justify-center items-center]">
                    <div className="bg-white rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up your account
                            </h1>
                            <form className="space-y-4 md:space-y-5" action="/">
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <div className='w-full'>
                                        <Input text="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <Input type="password" text="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm your password</label>
                                    <Input type="password" text="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Já tem uma conta? <LinkPhrase route='/login' text='Entrar' ></LinkPhrase>
                                    </p>
                                </div>
                                <ButtonLarge onClick={handleRegister} text="Registrar"></ButtonLarge>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-lg:hidden bg-cover lg:bg-capivara lg:w-[50%] my-custom-height object-bottom absolute right-0'></div>

        </div>
    )
}