import React, { useEffect, useState } from "react";

export default function Loader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.escuelajs.co/api/v1/products?offset=0&limit=20`
                );
                const json = await response.json();
                setData(prevData => [...prevData, ...json]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []); // Adicionando um array vazio como segundo argumento para useEffect, para garantir que ele só seja executado uma vez

    return null; // Retornando algo aqui, pois useEffect não pode retornar diretamente um valor
}
