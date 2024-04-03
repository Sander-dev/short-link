'use client'

import Loader from "../components/Loader";

export default function MyPage() {
    const data = Loader();

    return (
        <div className="flex justify-center">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[80%]">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm rounded-lg">
                            <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Title</th>
                                    <th scope="col" className="px-6 py-4">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{item.link_long}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.short_link}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.qtd_clicks}</td>

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



