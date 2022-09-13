import { SideBarStyles } from "./SideBarStyles";
// colors
import useTheme from "../../../hooks/useTheme";
import logo from "../../../assets/logo.png";
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

export default function SideBar() {
  const { colors, theme, changeTheme } = useTheme();
  const navidate = useNavigate();

  return (
    <SideBarStyles color={colors}>
      <div className="header">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <PencilSquareIcon
          onClick={() => navidate("tasks")}
          className="menu-icon"
        />
        <div className="button">
          <ClipboardIcon className="menu-icon" />
          <span>Active Tasks</span>
        </div>

        <div className="button">
          <ClipboardDocumentListIcon className="menu-icon" />
          <span>All Tasks</span>
        </div>

        <div className="button">
          <ClipboardDocumentCheckIcon className="menu-icon" />
          <span>Tasks done</span>
        </div>

        {!theme ? (
          <SunIcon onClick={changeTheme} className="menu-icon" />
        ) : (
          <MoonIcon onClick={changeTheme} className="menu-icon" />
        )}

        <Cog6ToothIcon className="menu-icon" />

        {false ? (
          <img src="" alt="image" />
        ) : (
          <UserCircleIcon className="menu-icon" />
        )}
        <ArrowLeftOnRectangleIcon className="menu-icon logout" />
      </div>
    </SideBarStyles>
  );
}
