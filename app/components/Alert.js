'use client'

import React, { useState } from "react";
import { TEToast } from "tw-elements-react";

export default function Alert(props) {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);

    return (
        <>
            {props.alert === "info" && (
                <TEToast
                    staticToast
                    open={open1}
                    color="bg-primary-100 text-primary-700"
                    className="w-full"
                >
                    <div className="flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-clip-padding px-4 pb-2 pt-2.5">
                        <p className="flex items-center font-bold">
                            <span className="[&>svg]:w-4 [&>svg]:h-4 mr-2 -mt-[2px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            {props.title}
                        </p>
                    </div>
                    <div className="break-words rounded-b-lg px-4 py-4">
                        {props.text}
                    </div>
                </TEToast>
            )}
            {props.alert === "correct" && (
                <TEToast
                    staticToast
                    open={open2}
                    color="bg-success-100 text-success-700"
                    className="mb-6"
                >
                    <div className="flex items-center justify-center rounded-lg border-b-2 border-success/20 bg-clip-padding px-4 pb-2 pt-2.5">
                        <p className="flex items-center font-bold">
                            <span className="[&>svg]:w-4 [&>svg]:h-4 mr-2 -mt-[2px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            {props.text}
                        </p>
                    </div>
                </TEToast>
            )}
            {props.alert === "alert" && (
                <TEToast
                    staticToast
                    open={open3}
                    color="bg-warning-100 text-warning-700"
                    className="w-full"
                >
                    <div className="flex items-center justify-between rounded-t-lg border-b-2 border-warning-200 bg-clip-padding px-4 pb-2 pt-2.5">
                        <p className="flex items-center font-bold">
                            <span className="[&>svg]:w-4 [&>svg]:h-4 mr-2 -mt-[2px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            {props.text}
                        </p>
                    </div>
                    <div className="break-words rounded-b-lg px-4 py-4">
                        Hello, world! This is a toast message.
                    </div>
                </TEToast>
            )}
            {props.alert === "error" && (
                <TEToast staticToast
                open={open4} 
                color="bg-danger-100 text-danger-700"
                className="w-full"
                >
                    <div className="flex items-center justify-center rounded-lg border-b-2 border-danger-200 bg-clip-padding px-4 pb-2 pt-2.5">
                        <p className="flex items-center font-bold">
                            <span className="[&>svg]:w-4 [&>svg]:h-4 mr-2 -mt-[2px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            {props.text}
                        </p>
                    </div>
                </TEToast>
            )}
        </>
    );
}