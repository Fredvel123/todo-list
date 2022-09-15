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

export default function SideBar() {
  const { colors, theme, changeTheme } = useTheme();
  const navidate = useNavigate();

  return (
    <SideBarStyles color={colors}>
      <div className="header">
        <Logo />
      </div>
      <div className="menu">
        <PencilSquareIcon
          onClick={() => navidate("tasks")}
          className="menu__icon"
        />
        <div className="menu__cart">
          <ClipboardIcon className="menu__icon" />
          <span>Active Tasks</span>
        </div>

        <div className="menu__cart">
          <ClipboardDocumentListIcon className="menu__icon" />
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

        {false ? // <img src="" alt="image" />
        null : (
          <UserCircleIcon className="menu__icon" />
        )}
        <ArrowLeftOnRectangleIcon className="menu__icon menu__logout" />
      </div>
    </SideBarStyles>
  );
}
