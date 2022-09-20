import useToken from "./useToken";
import { userInfo } from "../config/endpoints";

export default function useUpdateInfoInLocalStorage() {
  const { setTokenHook, token } = useToken();
  const updateUserInfo = async () => {
    const request = await fetch(userInfo, {
      method: "GET",
      headers: {
        "access-token": token.token,
      },
    });
    const res = await request.json();
    setTokenHook({
      ...token,
      user: {
        full_name: res.full_name,
        avatar: res.avatar,
        created_at: res.create_ar,
      },
    });
  };
  return updateUserInfo;
}
