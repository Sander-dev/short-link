'use client'

import { useEffect } from "react";
import LoaderInfo from "../../components/LoaderInfo";

export default function MyPage() {
    const data = LoaderInfo();
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="flex justify-center">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[80%]">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    PEGAR CARDS DO TW-ELEMENTS
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm rounded-lg">
                            <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Id</th>
                                    <th scope="col" className="px-6 py-4">User Agent</th>
                                    <th scope="col" className="px-6 py-4">Ip</th>
                                    <th scope="col" className="px-6 py-4">Localização</th>
                                    <th scope="col" className="px-6 py-4">Data de Criação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{item.link_short_id}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.user_agent}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.ip}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.localization}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.created_at}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
