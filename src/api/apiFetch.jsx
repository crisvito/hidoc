import { useEffect, useState } from "react";
import { apiCon } from "./apiConfig";

export function apiFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apikey = "&apiKey=" + apiCon.apiKey;
    fetch(apiCon.baseUrl + url + apikey)
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return { data, isPending, error };
}
