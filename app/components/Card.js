import React from 'react';

export default function Card( props ) {
    return (
        <div
            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {props.ip}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {props.localization}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {props.user_agent}
                </p>
            </div>
            <div
                className="border-t border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                {props.data}
            </div>
        </div>
    );
}