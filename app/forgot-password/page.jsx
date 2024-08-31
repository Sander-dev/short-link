"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Components
import ButtonLarge from "../components/ButtonLarge";
import Input from "../components/Input";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import getUrl from "../components/useVariables";

export default function ForgotPassword() {
  const rota = "/login";
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordValidate, setNewPasswordValidate] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showCodeForm, setShowCodeForm] = useState(false);
  const [code, setCode] = useState("");
  const [correct, setCorrect] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (!userEmail.trim() || !validateEmail(userEmail)) {
      setError("Insira um email válido para redefinir a senha");
      setShowError(true);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${getUrl}/api/v1/user/reset-password?email=${userEmail}`, 
      );
      setShowError(false);
      setShowCodeForm(true);
      setCorrect(response.data.msg);
      setShowAlert(true);
    } catch (error) {
      setError(error.response?.data?.message || "Erro ao enviar o código");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmCode = async (event) => {
    event.preventDefault();

    if (!userEmail.trim() || !validateEmail(userEmail)) {
      setError("Insira um email válido para redefinir a senha");
      setShowError(true);
      return;
    } else if (
      !newPassword.trim() ||
      newPassword.length < 8 ||
      !newPasswordValidate.trim() ||
      newPasswordValidate.length < 8
    ) {
      setError("Insira uma senha válida para redefinir a senha");
      setShowError(true);
      return;
    } else if (newPassword !== newPasswordValidate) {
      setError("As senhas não coincidem");
      setShowError(true);
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `${getUrl}/api/v1/user/reset-password/validate`,
        {
          username: userEmail,
          newPassword: newPassword,
          confPassword: newPasswordValidate,
          code: code,
        }
      );
      setCorrect("Senha redefinida com sucesso!");
      setShowAlert(true);
      setShowCodeForm(false);
      setUserEmail("");
      setNewPassword("");
      setNewPasswordValidate("");
      setCode("");
      // router.push(rota);
    } catch (error) {
      setError(error.response?.data?.detail || "Erro ao redefinir a senha");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="flex justify-center">
      <section className="flex w-[50vw] mt-12 bg-gray-50 dark:bg-gray-900 max-lg:w-screen justify-center items-center">
        <div className="flex flex-col px-6 py-8 mx-auto lg:py-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] justify-center items-center">
          <div className="bg-white rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Redefinir Senha
              </h1>
              {!showCodeForm && (
                <form className="space-y-4 md:space-y-5" onSubmit={handleResetPassword}>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <div className="w-full">
                      <Input
                        text="Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <ButtonLarge
                    text="Enviar Código"
                    type="submit"
                  />
                </form>
              )}
              {showCodeForm && (
                <form className="space-y-4 md:space-y-5" onSubmit={handleConfirmCode}>
                  <div className="flex flex-col gap-3">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <Input
                        text="Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="code"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Insira o código
                      </label>
                      <Input
                        type="input"
                        text="Código"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nova senha
                      </label>
                      <Input
                        type="password"
                        text="Nova senha"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newPasswordValidate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Repita a senha
                      </label>
                      <Input
                        type="password"
                        text="Repita a senha"
                        value={newPasswordValidate}
                        onChange={(e) => setNewPasswordValidate(e.target.value)}
                      />
                    </div>
                  </div>
                  <ButtonLarge
                    text="Redefinir senha"
                    type="submit"
                  />
                </form>
              )}
              <div className="flex justify-center">
                {loading ? (
                  <Spinner />
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
  );
}
