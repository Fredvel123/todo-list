import { LogoutCardStyles } from "./LogoutCardStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useTheme from "../../hooks/useTheme";
import useToken from "../../hooks/useToken";
import { useNavigate } from "react-router-dom";

export default function LogouCard({ open, callback }) {
  const { colors, fonts } = useTheme();
  const navigate = useNavigate();
  const { setTokenHook } = useToken();

  const logOut = () => {
    setTokenHook({ auth: false, token: "" });
    navigate("/");
  };

  return (
    <LogoutCardStyles color={colors} active={open} font={fonts}>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={logOut}>Log Out</button>
      <XMarkIcon className="card__close" onClick={callback} />
    </LogoutCardStyles>
  );
}
