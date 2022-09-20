import { useEffect, useState } from "react";
// import { userInfo } from "../config/endpoints";
import useToken from "../hooks/useToken";

export default function useGetUserInfo() {
  const [user, setUser] = useState({ err: null, data: null });
  const { token } = useToken();

  const getUserInfo = async () => {
    if (!token.auth) {
      setUser({ err: true });
      return;
    }
    setUser({ err: false, data: token.user });
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);
  return user;
}
