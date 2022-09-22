import { LogoutCardStyles } from "./LogoutCardStyles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useTheme from "../../hooks/useTheme";
import useToken from "../../hooks/useToken";
import { useNavigate } from "react-router-dom";
import useTasks from "../../hooks/useTasks";

export default function LogouCard({ open, callback }) {
  const { colors, fonts } = useTheme();
  const navigate = useNavigate();
  const { resetTasksInLocalStorage } = useTasks();
  const { setTokenHook } = useToken();

  const logOut = () => {
    setTokenHook({ auth: false, token: "" });
    resetTasksInLocalStorage();
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
