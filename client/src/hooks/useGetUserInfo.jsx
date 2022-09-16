import { useEffect, useState } from "react";
import { userInfo } from "../config/endpoints";
import useToken from "./useToken";

export default function useGetUserInfo() {
  const { token } = useToken();
  const [user, setUser] = useState(null);
  const getUserInfo = async () => {
    try {
      const request = await fetch(userInfo, {
        method: "GET",
        headers: {
          "access-token": token.token,
        },
      });
      const res = await request.json();
      setUser(res);
    } catch (err) {
      setUser("there was something wrong");
    }
  };
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);
  return user;
}
