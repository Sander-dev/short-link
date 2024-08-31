import { useEffect, useState } from "react";
import axios from "axios";

const Loader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Extrai a query string da URL usando window.location.search
        const searchParams = new URLSearchParams(window.location.search);
        // Pega o valor de 'shortLink' na query string
        const shortLink = searchParams.get('shortLink');

        const access_token = window.localStorage.getItem('access_token');
        const fetchData = async () => {
            if (access_token && shortLink) {
                try {
                    const response = await axios.get(
                        `http://localhost:8090/api/v1/clicks/all?shortlink=${shortLink}&page=0&size=12&direction=asc`, {
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    });
                    
                    setData(response.data._embedded.clickDTOList);
                    console.log(response.data._embedded.clickDTOList);

                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();

    }, []);

    return data;
};

export default Loader;
