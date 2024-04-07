'use client'

import React, { useState } from "react";
import axios from "axios";
import Image from 'next/image'
import { useRouter } from 'next/navigation';


// Components
import ButtonLarge from "../components/ButtonLarge"
import Input from "../components/Input";
import Alert from "../components/Alert";
import Loading from "@/public/Loading.gif"

export default function ForgotPassword() {

    const rota = "/login"
    const router = useRouter()

    const [userEmail, setUserEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [showCodeForm, setShowCodeForm] = useState(false);
    const [correct, setCorrect] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleResetPassword = async (event) => {
        event.preventDefault();

        if (!userEmail.trim() || !validateEmail(userEmail)) {
            setError("Insira um email válido redefinir a senha");
            setShowError(true);
            return;
        } if (!newPassword.trim() || newPassword.length < 8) {
            setError("A senha deve ter no mínimo 8 caracteres");
            setShowError(true);
            return;
        }

        setLoading(true);

        try {
            const response = await axios.patch('http://127.0.0.1:8000/api/v1/user/reset-password', {
                user_email: userEmail,
                new_password: newPassword
            });
            setShowError(false);
            setShowCodeForm(true);
            setCorrect(response.data.msg);
            setShowAlert(true);
        } catch (error) {
            setError(error.response.data.detail);
            setShowError(true);
        } finally {
            setLoading(false);
        }
    }

    const [code, setCode] = useState();

    const handleConfirmCode = async (event) => {
        event.preventDefault();

        setShowAlert(false);

        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/user/reset-password/validate', {
                params: {
                    email: userEmail,
                    code: code
                }
            });
        } catch (error) {
            setError(error.response.data.detail);
            setShowError(true);
        } finally {
            setCorrect("Senha redefinida com sucesso!");
            setShowAlert(true);
            router.push(rota);
        }
    }

    // Função para validar o formato do email
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div className='flex justify-center'>
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
                            {showCodeForm && ( // Renderizar o formulário de código apenas se showCodeForm for verdadeiro
                                <form onSubmit={handleConfirmCode} className="space-y-4 md:space-y-5">
                                    <div>
                                        <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insira o código</label>
                                        <Input type="input" text="Código" value={code} onChange={(e) => setCode(e.target.value)} />
                                    </div>
                                    <ButtonLarge text="Confirmar Código"></ButtonLarge>
                                </form>
                            )}
                            <div className="flex justify-center">
                                {loading ? (
                                    <Image
                                        width={40}
                                        height={40}
                                        alt='Carregamento'
                                        src={Loading}>
                                    </Image>
                                ) : (
                                    <div className="w-full">
                                        {showError && <Alert alert="error" text={error} />}
                                        {showAlert && <Alert alert="correct" text={correct} />}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}