import { useEffect, useState } from "react";
import axios from "axios";

const Loader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const access_token = window.localStorage.getItem("access_token");
    const fetchData = async () => {
      if (access_token) {
        try {
          const response = await axios.get(
            `${getUrl}/api/v1/link/my-link-short`,
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        return null;
      }
    };
    fetchData();
  }, []);

  return data;
};

export default Loader;
