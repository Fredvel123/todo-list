import { useState } from "react";
import { signup } from "../config/endpoints";

export default function useSignUp(full_name, email, password) {
  const [response, setResponse] = useState({ message: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const registerUser = async () => {
    setLoading(true);
    try {
      const request = await fetch(signup, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ full_name, email, password }),
      });
      const res = await request.json();
      setResponse(res);
      setLoading(false);
    } catch (err) {
      setError("there was something wrong");
      setLoading(false);
    }
  };
  return { response, error, loading, registerUser, setResponse };
}
