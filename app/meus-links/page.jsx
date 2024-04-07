'use client'

import Loader from "../components/Loader";
import LimitPhrase from "../components/LimitPhrase";
import ButtonClose from "../components/ButtonClose";

export default function MyPage() {
    const maxLength = 40;


    const data = Loader();

    return (
        <div className="flex justify-center">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[80%]">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm rounded-lg">
                            <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Link Longo</th>
                                    <th scope="col" className="px-6 py-4">Link Encurtado</th>
                                    <th scope="col" className="px-6 py-4">Cliques</th>
                                    <th scope="col" className="px-6 py-4">Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium"><a href={item.link_long} target="_blank"><LimitPhrase text={item.link_long} maxLength={maxLength} /></a></td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium"><a href={item.short_link} target="_blank"><LimitPhrase text={item.short_link} maxLength={maxLength} /></a></td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.qtd_clicks}</td>
                                        Continuar AQUI
                                        <td className="whitespace-nowrap px-6 py-4"><ButtonClose></ButtonClose></td>

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



