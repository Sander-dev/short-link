'use client'

import { useEffect } from "react";
import LoaderInfo from "../../components/LoaderInfo";
import Card from "@/app/components/Card";

export default function MyPage() {
    const data = LoaderInfo();
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="flex justify-center">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[80%]">
                <div className="flex flex-col min-w-full py-2 sm:px-6 lg:px-8 items-center bg-brown rounded-lg mt-5">
                    <h1 className="mt-8 text-5xl text-white">
                        Mais Informações
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                        {data.map((item, index) => (
                            <Card link_short={item.link_short_id} user_agent={item.user_agent} ip={item.ip} localization={item.localization} data={item.created_at}></Card>
                        ))}

                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
