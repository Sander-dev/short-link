"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import LimitPhrase from "../components/LimitPhrase";
import ButtonClose from "../components/ButtonClose";
import getUrl from "../components/useVariables";
import ButtonView from "../components/ButtonView";

const extractIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

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
    <div className="flex justify-center m-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[85%]">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-md">
            <table className="min-w-full text-center text-sm border-collapse border-none">
              <thead className="shadow-inner text-white text-xl bg-gradient-to-bl from-brown to-blak font-medium dark:border-neutral-500 dark:text-neutral-800 ">
                <tr>
                  <th scope="col" className="px-6 py-6">
                    Link Longo
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Link Encurtado
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Cliques
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Excluir
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Infos
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-neutral-500 ease-in-out hover:bg-[#d9d9d9] hover:shadow-lg duration-200"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-base">
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
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-base">
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
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-base">
                      {item.qtdClick}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-base">
                      <ButtonClose
                        idShortLink={extractIdFromUrl(item.shortLink)}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-base">
                      <ButtonView />
                    </td>
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
