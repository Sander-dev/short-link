import { useEffect, useState } from "react";
import axios from "axios";

const Loader = () => {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const access_token = window.localStorage.getItem('access_token');
        const fetchData = async () => {
            if (access_token) {
                try {
                    const response = await axios.get(
                        `http://localhost:8000/link/me_link_short/`,{
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                    );
                    setData((prevData) => [...prevData, ...response.data]);
                    console.log(response.data)
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();

        

        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight;
            const currentHeight =
                e.target.documentElement.scrollTop + window.innerHeight;
            if (currentHeight + 1 >= scrollHeight) {
                setOffset((prevOffset) => prevOffset + 5);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return data;
};

export default Loader;
