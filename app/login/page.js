'use client'

import React, { useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";

// Components
import ButtonLarge from "../components/ButtonLarge"
import Input from "../components/Input";

export default function login() {
    


    return (
        <div className='flex'>
            <section className="flex w-[50%] mt-12 bg-gray-50 dark:bg-gray-900 max-lg:w-screen justify-center items-center">
                <div className="flex flex-col px-6 py-8 mx-auto lg:py-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] justify-center items-center]">
                    <div className="bg-white rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/">
                                <div className='w-full'>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <div className='w-full'>
                                        <Input text="Email"></Input>
                                    </div>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <Input type="password" text="Password"></Input>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/login" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <ButtonLarge text="Sign in"></ButtonLarge>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-lg:hidden bg-cover lg:bg-capivara lg:w-[50%] my-custom-height object-bottom absolute right-0'></div>

        </div>
    );
}