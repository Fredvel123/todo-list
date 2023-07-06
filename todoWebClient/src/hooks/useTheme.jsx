import { darkTheme, lightTheme } from "../global-styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/slices/theme";
import fonts from "../global-styles/fonts.js";

export default function useTheme() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(setTheme(!theme));
  };

  return { colors: theme ? lightTheme : darkTheme, changeTheme, theme, fonts };
}
