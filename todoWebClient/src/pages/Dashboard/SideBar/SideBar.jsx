import { SideBarStyles } from "./SideBarStyles";
// colors
import useTheme from "../../../hooks/useTheme";
import {
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  SunIcon,
  MoonIcon,
  ClipboardIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import useGetUserInfo from "../../../hooks/useGetUserInfo";

export default function SideBar({ openCard }) {
  const { colors, theme, changeTheme } = useTheme();
  const navigate = useNavigate();
  const user = useGetUserInfo();

  return (
    <SideBarStyles color={colors}>
      <div className="header">
        <Logo />
      </div>
      <div className="menu">
        <PencilSquareIcon
          onClick={() => navigate("create")}
          className="menu__icon"
        />
        <div className="menu__cart">
          <ClipboardIcon
            className="menu__icon"
            onClick={() => navigate("active")}
          />

          <span>Active Tasks</span>
        </div>

        <div className="menu__cart">
          <ClipboardDocumentListIcon
            className="menu__icon"
            onClick={() => navigate("all")}
          />
          <span>All Tasks</span>
        </div>

        <div className="menu__cart">
          <ClipboardDocumentCheckIcon
            className="menu__icon"
            onClick={() => navigate("complete")}
          />
          <span>Done tasks</span>
        </div>

        {!theme ? (
          <SunIcon onClick={changeTheme} className="menu__icon" />
        ) : (
          <MoonIcon onClick={changeTheme} className="menu__icon" />
        )}

        <Cog6ToothIcon
          className="menu__icon"
          onClick={() => navigate("settings")}
          // onClick={() => console.log(user)}
        />
        {user.data !== null && user.data.avatar ? (
          <img
            className="menu__avatar"
            src={user.data.avatar}
            alt="LOGO"
            width={50}
            onClick={() => console.log(user)}
          />
        ) : (
          <UserCircleIcon className="menu__icon" />
        )}
        <ArrowLeftOnRectangleIcon
          onClick={openCard}
          className="menu__icon menu__logout"
        />
        {/* <LogouCard open={cardActive} callback={closeCardLogout} /> */}
      </div>
    </SideBarStyles>
  );
}
