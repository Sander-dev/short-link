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
                        <table className="min-w-full text-center text-sm border-collapse border rounded-lg">
                            <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Link Longo</th>
                                    <th scope="col" className="px-6 py-4">Link Encurtado</th>
                                    <th scope="col" className="px-6 py-4">Cliques</th>
                                    <th scope="col" className="px-6 py-4">Excluir</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">111111</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">222222</td>
                                    <td className="whitespace-nowrap px-6 py-4">3333333</td>
                                    <td className="whitespace-nowrap px-6 py-4"><ButtonClose></ButtonClose></td>
                                </tr>



                                {/* {data.map((item, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">111111<a href={item.link_long} target="_blank"><LimitPhrase text={item.link_long} maxLength={maxLength} /></a></td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">222222<a href={item.short_link} target="_blank"><LimitPhrase text={item.short_link} maxLength={maxLength} /></a></td>
                                        <td className="whitespace-nowrap px-6 py-4">3333333{item.qtd_clicks}</td>
                                        <td className="whitespace-nowrap px-6 py-4"><ButtonClose></ButtonClose></td>

                                    </tr>
                                ))} */}
                            </tbody>
                        </table>

                        <table className="border-collapse border rounded-lg">
                            <tr className="border-collapse border rounded-lg">
                                <th>titulo</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                            </tr>
                            <tr>
                                <td>descrição</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}



