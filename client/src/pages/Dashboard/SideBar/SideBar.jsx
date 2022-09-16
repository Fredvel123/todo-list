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
// import { useState } from "react";
// import LogouCard from "../../../components/LogoutCard/LogouCard";

export default function SideBar({ openCard }) {
  const { colors, theme, changeTheme } = useTheme();
  const navigate = useNavigate();
  const user = useGetUserInfo();
  // const [cardActive, setCardActive] = useState(false);

  // close log out card
  // const closeCardLogout = () => {
  //   setCardActive(false);
  // };

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
          <ClipboardIcon className="menu__icon" />
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
          <ClipboardDocumentCheckIcon className="menu__icon" />
          <span>Done tasks</span>
        </div>

        {!theme ? (
          <SunIcon onClick={changeTheme} className="menu__icon" />
        ) : (
          <MoonIcon onClick={changeTheme} className="menu__icon" />
        )}

        <Cog6ToothIcon className="menu__icon" />

        {user ? (
          <img className="menu__avatar" src={user.avatar} alt="" width={50} />
        ) : (
          <UserCircleIcon
            className="menu__icon"
            onClick={() => console.log(user)}
          />
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
