import { useState } from "react";
// import getListings from "../api/listings";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const request = (...args) => {
    setLoading(true);
    apiFunc(...args).then((res) => {
      if (!res.ok || res.status === "404") {
        setLoading(false);
        return setData([]);
      } else {
        setLoading(false);
        return setData(res.data);
      }
    });
  };

  return {
    data,
    loading,
    request,
  };
};
