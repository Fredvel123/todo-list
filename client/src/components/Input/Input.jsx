import useTheme from "../../hooks/useTheme";
import { InputStyles } from "./InputStyles";

export default function Input({ type, placeh, title }) {
  const { colors, fonts } = useTheme();
  return (
    <InputStyles color={colors} font={fonts}>
      <span>{title}</span>
      <input type={type} placeholder={placeh} />
    </InputStyles>
  );
}
