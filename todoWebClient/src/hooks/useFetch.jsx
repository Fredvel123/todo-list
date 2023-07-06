import { useState } from "react";
import useToken from "./useToken";

export default function useFetch() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);

  const { token } = useToken();
  const fetchApi = async (url) => {
    setLoading(true);
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "access-token": token.token,
      },
    });
    const res = await request.json();
    setResponse(res);
    setLoading(false);
  };

  return { fetchApi, response, loading };
}
