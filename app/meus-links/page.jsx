"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import LimitPhrase from "../components/LimitPhrase";
import ButtonClose from "../components/ButtonClose";
import getUrl from "../components/useVariables";
import Link from "next/link";

export default function MyPage() {
  const maxLength = 40;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = window.localStorage.getItem("access_token");
        const response = await axios.get(
          `${getUrl}/api/v1/link/my-link-short`,
          {
            params: {
              page: 0,
              size: 12,
              sortBy: "qtdClick",
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Adicionando logs para debug
        console.log(response.data.content);

        if (response.data.content) {
          setData(response.data.content);
        } else {
          throw new Error("Estrutura de resposta inesperada");
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[80%]">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm border-collapse border rounded-lg">
              <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Link Longo
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Link Encurtado
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Cliques
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Excluir
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <a
                        href={item.linkLong}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LimitPhrase
                          text={item.linkLong}
                          maxLength={maxLength}
                        />
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <a
                        href={item.shortLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LimitPhrase
                          text={item.shortLink}
                          maxLength={maxLength}
                        />
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.qtdClick}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <ButtonClose />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">linkar</td>
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
