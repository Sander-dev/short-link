"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Components
import ButtonLarge from "../components/ButtonLarge";
import Input from "../components/Input";
import LinkPhrase from "../components/LinkPhrase";
import Alert from "../components/Alert";
import getUrl from "../components/useVariables";

export default function Login() {
  const rota = "/";
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Campo vazio, insira um email válido para entrar");
      setShowError(true);
      return;
    } else if (!password.trim()) {
      setError("Campo vazio, insira uma senha válida para entrar");
      setShowError(true);
      return;
    }

    try {
      const response = await axios.post(`${getUrl}/auth/signin`, {
        email: email,
        password: password,
      });
      setShowError(false);

      const access_token = response.data.accessToken;
      localStorage.setItem("access_token", access_token);

      // Dispara o evento de login
      const loginEvent = new Event("loginEvent");
      window.dispatchEvent(loginEvent);

      router.push(rota);
    } catch (error) {
      setError(error.response);
      setShowError(true);
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-96px)]">
      <section className="flex w-[50%] bg-gray-50 dark:bg-gray-900 max-lg:w-screen justify-center items-center">
        <div className="flex flex-col px-6 py-8 mx-auto lg:py-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[75%] justify-center items-center">
          <div className="bg-white rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Entrar na sua Conta
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-5">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="w-full">
                    <Input
                      type="input"
                      text="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Senha
                  </label>
                  <Input
                    type="password"
                    text="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Não tem uma conta?{" "}
                    <LinkPhrase route="/register" text="Registrar"></LinkPhrase>
                  </p>
                </div>
                <ButtonLarge text="Entrar"></ButtonLarge>
                <LinkPhrase
                  route="/forgot-password"
                  text="Esqueceu a Senha?"
                ></LinkPhrase>
                <div>{showError && <Alert alert="error" text={error} />}</div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="max-lg:hidden bg-cover lg:bg-capivara lg:w-[50%] my-custom-height object-bottom absolute right-0"></div>
    </div>
  );
}
