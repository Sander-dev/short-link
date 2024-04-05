'use client'

import React, { useState } from "react";
import axios from "axios";


// Components
import ButtonLarge from "../components/ButtonLarge"
import Input from "../components/Input";

export default function ForgotPassword() {

    const [userEmail, setUserEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const [error, setError] = useState('');

    const handleResetPassword = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.patch('http://127.0.0.1:8000/user/reset_password', {
                user_email: userEmail,
                new_password: newPassword
            });
            console.log(response.data)
        } catch (error) {
            setError(error.response.data.message);
            console.error('Erro ao resetar senha:', error);
        }
    }

    const [code, setCode] = useState();

    const handleConfirmCode = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://127.0.0.1:8000/user/valid_reset', {
                params: {
                    email: userEmail,
                    code: code
                }
            });
            console.log(response.data)
        } catch (error) {
            setError(error.response.data.message);
            console.error('Erro ao resetar senha:', error);
        }
    }


    return (
        <div className='flex justify-center'>
            {/* <button onClick={handleLogin} className="w-10 h-10 bg-blak"></button> */}
            <section className="flex w-[50vw] mt-12 bg-gray-50 dark:bg-gray-900 max-lg:w-screen justify-center items-center">
                <div className="flex flex-col px-6 py-8 mx-auto lg:py-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] justify-center items-center]">
                    <div className="bg-white rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Redefinir Senha
                            </h1>
                            <form onSubmit={handleResetPassword} className="space-y-4 md:space-y-5">
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <div className='w-full'>
                                        <Input text="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nova senha</label>
                                    <Input type="password" text="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                    {/* <label htmlFor="password" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Nova Senha</label>
                                    <Input type="password" text="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                                </div>
                                <ButtonLarge text="Enviar Código"></ButtonLarge>
                            </form>
                            <form onSubmit={handleConfirmCode} className="space-y-4 md:space-y-5">
                                <div>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insira o código</label>
                                    <Input type="input" text="Código" value={code} onChange={(e) => setCode(e.target.value)} />
                                </div>
                                <ButtonLarge text="Confirmar Código"></ButtonLarge>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}