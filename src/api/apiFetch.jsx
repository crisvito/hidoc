import { useEffect, useState } from "react";
import { apiCon } from "./apiConfig";

export function apiFetch(url) {
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(apiCon.baseUrl + url + apikey)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.articles);
  //     })
  //     .catch((err) => {
  //     });
  // }, []);

  useEffect(() => {
    const apikey = "&apiKey=" + apiCon.apiKey;
    fetch(apiCon.baseUrl + url + apikey)
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        setIsPending(false);
        setItems(data.articles);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return { items, isPending, error };
}
