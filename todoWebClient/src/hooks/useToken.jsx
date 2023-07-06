import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/slices/token";

export default function useToken() {
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const setTokenHook = (data) => {
    dispatch(setToken(data));
  };

  return { token, setTokenHook };
}
